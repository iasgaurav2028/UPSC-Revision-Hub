#!/usr/bin/env node
/**
 * validate.js
 * ─────────────────────────────────────────────────────────────
 * Deeper integrity checks than build-bundle.js performs. Run this
 * any time after adding/editing content, ideally BEFORE opening
 * index.html, to catch mistakes early with clear messages instead
 * of silent bugs or a blank screen in the browser.
 *
 * HOW TO RUN:
 *   node validate.js
 *
 * WHAT IT CHECKS:
 *   1. Every DATA_ or QUIZ_ reference resolves (same as build-bundle.js)
 *   2. No duplicate `id:` values anywhere in the tree
 *   3. Every leaf node (isLeaf: true) that isn't the syllabus
 *      overview has a `notes` object (not null/undefined) OR is
 *      clearly a placeholder — flags notes-less leaves
 *   4. Every leaf node's `notes` object has the fields the note
 *      renderer expects, depending on its type (newsType vs
 *      standard Laxmikanth-style note)
 *   5. Quiz coverage: which leaf topics have NO matching quiz in
 *      QUIZ_DATA (informational — not all leaves need a quiz, e.g.
 *      branch placeholders, but flags genuine content topics that
 *      are missing one)
 *   6. Every QUIZ_DATA entry has a question array with well-formed
 *      questions (4 options, valid `correct` index, non-empty
 *      explain)
 *   7. Orphaned files: any js/data/*.js file whose declared
 *      DATA_ or QUIZ_ variable is never referenced by anything else
 *      AND isn't one of the known root variables (DATA_syllabus,
 *      DATA_gs1...DATA_gs4, DATA_essay, DATA_newspaper) — usually
 *      means you forgot to add it to a parent's children array.
 *
 * Exits with a non-zero status code if any ERROR-level issue is
 * found (safe for use in a pre-commit hook or CI later on).
 * WARN-level issues are printed but don't fail the run.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { scanDataFiles, topoSortFiles } = require("./scan-data.js");

const root = __dirname;
const dataDir = path.join(root, "js", "data");

const ROOT_VARS = [
  "DATA_syllabus",
  "DATA_gs1",
  "DATA_gs2",
  "DATA_gs3",
  "DATA_gs4",
  "DATA_essay",
  "DATA_newspaper",
];

let errors = [];
let warnings = [];

function err(msg) {
  errors.push(msg);
}
function warn(msg) {
  warnings.push(msg);
}

function main() {
  console.log("Running validation...\n");

  // ── Step 1: scan + topological sort (catches typos/dupes/cycles) ──
  const records = scanDataFiles(dataDir);
  let sorted;
  try {
    sorted = topoSortFiles(records);
  } catch (e) {
    err("Dependency graph error: " + e.message);
    printResultsAndExit();
    return;
  }
  console.log(
    `✓ Scanned ${records.length} files, dependency graph is valid (no cycles, no unresolved refs, no duplicate declarations).`,
  );

  // ── Step 2: orphaned file check ──
  const referencedElsewhere = new Set();
  for (const r of records) {
    for (const ref of r.references) referencedElsewhere.add(ref);
  }
  for (const r of records) {
    for (const declared of r.declares) {
      const isRoot = ROOT_VARS.includes(declared);
      const isReferenced = referencedElsewhere.has(declared);
      if (!isRoot && !isReferenced) {
        warn(
          `Orphaned file: ${r.relPath} declares "${declared}" but nothing references it. Did you forget to add it to a parent's children array (or to quiz-assembly.js)?`,
        );
      }
    }
  }

  // ── Step 3: actually load everything into a sandbox to inspect the tree ──
  let sandbox;
  try {
    sandbox = loadIntoSandbox(sorted);
  } catch (e) {
    err("Runtime error while loading data files: " + e.message);
    printResultsAndExit();
    return;
  }
  console.log(`✓ All files execute without runtime errors.`);

  const { TREE_DATA, QUIZ_DATA } = sandbox;

  // ── Step 4: duplicate ID check ──
  const seenIds = new Map(); // id -> path (title breadcrumb)
  function walkIds(nodes, breadcrumb) {
    for (const n of nodes) {
      const here = breadcrumb + " > " + (n.title || n.id);
      if (!n.id) {
        err(`Node missing an "id" field (found under: ${breadcrumb})`);
      } else if (seenIds.has(n.id)) {
        err(
          `Duplicate id "${n.id}" found at both "${seenIds.get(n.id)}" and "${here}"`,
        );
      } else {
        seenIds.set(n.id, here);
      }
      if (n.children && n.children.length) walkIds(n.children, here);
    }
  }
  walkIds(TREE_DATA, "TREE_DATA");
  console.log(`✓ Checked ${seenIds.size} node IDs for duplicates.`);

  // ── Step 5: leaf node notes shape check ──
  const leaves = [];
  function collectLeaves(nodes) {
    for (const n of nodes) {
      if (n.isLeaf && n.id !== "syllabus") leaves.push(n);
      if (n.children) collectLeaves(n.children);
    }
  }
  collectLeaves(TREE_DATA);

  let leavesWithoutNotes = 0;
  let leavesMissingQuiz = [];
  for (const leaf of leaves) {
    if (!leaf.notes) {
      leavesWithoutNotes++;
      continue; // fine — some leaves are intentionally placeholders
    }
    const n = leaf.notes;
    if (n.newsType) {
      if (!n.summary && !n.keyPoints) {
        warn(
          `News-type leaf "${leaf.id}" (${leaf.title}) has neither a summary nor keyPoints.`,
        );
      }
    } else {
      const missingFields = [
        "significance",
        "features",
        "traps",
        "mainsAngle",
        "recall",
      ].filter((f) => !n[f]);
      if (missingFields.length > 0) {
        warn(
          `Leaf "${leaf.id}" (${leaf.title}) is missing note field(s): ${missingFields.join(", ")}`,
        );
      }
    }
    if (!QUIZ_DATA[leaf.id]) {
      leavesMissingQuiz.push(`${leaf.id} (${leaf.title})`);
    }
  }
  console.log(
    `✓ Checked ${leaves.length} leaf topics (${leavesWithoutNotes} are content-less placeholders).`,
  );

  if (leavesMissingQuiz.length > 0) {
    console.log(
      `\n📋 Topics with notes but NO Practice Hub quiz (${leavesMissingQuiz.length}):`,
    );
    leavesMissingQuiz.forEach((t) => console.log("   - " + t));
  } else {
    console.log(`✓ Every topic with notes has a matching Practice Hub quiz.`);
  }

  // ── Step 6: quiz question shape check ──
  let malformedQuestions = 0;
  for (const [topicId, quiz] of Object.entries(QUIZ_DATA)) {
    if (!quiz.questions || quiz.questions.length === 0) {
      err(`Quiz "${topicId}" has no questions array (or it's empty).`);
      continue;
    }
    quiz.questions.forEach((q, i) => {
      const problems = [];
      if (!q.q) problems.push("missing question text");
      if (!Array.isArray(q.options) || q.options.length !== 4)
        problems.push("options must be an array of exactly 4");
      if (typeof q.correct !== "number" || q.correct < 0 || q.correct > 3)
        problems.push("correct must be 0-3");
      if (!q.explain) problems.push("missing explanation");
      if (problems.length > 0) {
        malformedQuestions++;
        err(`Quiz "${topicId}" question #${i + 1}: ${problems.join("; ")}`);
      }
    });
  }
  const totalQuestions = Object.values(QUIZ_DATA).reduce(
    (sum, q) => sum + (q.questions ? q.questions.length : 0),
    0,
  );
  console.log(
    `✓ Checked ${totalQuestions} questions across ${Object.keys(QUIZ_DATA).length} quizzes (${malformedQuestions} malformed).`,
  );

  printResultsAndExit();
}

/** Load the sorted files + engine.js into an isolated VM sandbox and return TREE_DATA/QUIZ_DATA. */
function loadIntoSandbox(sortedRecords) {
  let combined = "";
  for (const r of sortedRecords)
    combined += fs.readFileSync(r.path, "utf8") + "\n";

  const sandbox = {
    console,
    document: {
      createElement: () => ({
        style: {},
        addEventListener() {},
        textContent: "",
        get innerHTML() {
          return this.textContent;
        },
        set innerHTML(v) {
          this._h = v;
        },
      }),
      getElementById: () => ({
        addEventListener() {},
        style: {},
        classList: { add() {}, remove() {}, contains: () => false },
        innerHTML: "",
        textContent: "",
        value: "",
        querySelectorAll: () => [],
      }),
      querySelectorAll: () => [],
      querySelector: () => ({
        scrollTop: 0,
        classList: { add() {}, remove() {}, contains: () => false },
      }),
      addEventListener: () => {},
      documentElement: {},
      fullscreenElement: null,
      webkitFullscreenElement: null,
      exitFullscreen: () => Promise.resolve(),
    },
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);

  // Top-level `const TREE_DATA`/`const QUIZ_DATA` inside a vm context create
  // LEXICAL bindings, not properties on the sandbox object — so we can't
  // read sandbox.TREE_DATA afterwards. Instead, run the data files, then
  // in the SAME context evaluate an expression that returns them together.
  vm.runInContext(combined, sandbox);
  const result = vm.runInContext("({ TREE_DATA, QUIZ_DATA })", sandbox);

  return result;
}

function printResultsAndExit() {
  console.log("\n" + "─".repeat(60));
  if (warnings.length > 0) {
    console.log(`\n⚠️  ${warnings.length} warning(s):\n`);
    warnings.forEach((w) => console.log("   • " + w));
  }
  if (errors.length > 0) {
    console.log(`\n❌ ${errors.length} error(s):\n`);
    errors.forEach((e) => console.log("   • " + e));
    console.log(
      "\nFix the errors above. Warnings are informational and won't break the site.",
    );
    process.exit(1);
  } else {
    console.log(
      `\n✅ No errors found.${warnings.length > 0 ? " (See warnings above — informational only.)" : ""}`,
    );
    process.exit(0);
  }
}

main();
