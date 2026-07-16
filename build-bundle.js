#!/usr/bin/env node
/**
 * build-bundle.js
 * ─────────────────────────────────────────────────────────────
 * Builds the site's runtime JS from the modular source under
 * js/data/ and js/engine/. To keep initial page load flat no
 * matter how many notes are added, the output is SPLIT:
 *
 *   js/bundle.js         ← always loaded by index.html. Contains a
 *                          lightweight TREE_DATA "skeleton" (every
 *                          node's id/title/icon/hierarchy but NOT
 *                          its heavy `notes` body) + the engine.
 *
 *   js/content/<sub>.js  ← one file per top-level subject (gs1, gs2,
 *                          gs3, gs4, essay, newspaper). Holds that
 *                          subject's note bodies + quizzes. Loaded
 *                          on demand the first time you open a topic
 *                          in that subject (see js/engine/loader.js).
 *
 * File order within the data layer is AUTOMATIC — computed from a
 * dependency graph (see scan-data.js). You never edit this file.
 *
 * HOW TO RUN (from this project's root folder):
 *   node build-bundle.js
 *
 * HOW TO ADD NEW CONTENT (no changes needed here):
 *   DATA files:
 *     1. Create your new file anywhere under js/data/, declaring
 *        const DATA_x = { id, title, ..., children: [...] } (with an
 *        inline `notes: {...}` on leaf topics as usual).
 *     2. Add DATA_x into its parent's `children: [...]` array.
 *   QUIZ files:
 *     1. Create quiz-<topicid>.js declaring const QUIZ_x = {...}.
 *     2. Add one line to js/data/quiz-assembly.js:  "<id>": QUIZ_x,
 *
 *   Then run: node build-bundle.js  — the split into skeleton +
 *   per-subject chunks happens automatically. Your source files
 *   still keep notes inline; the split is purely a build step.
 *
 * If the scan finds a problem (a typo'd reference, a duplicate
 * declaration, a circular dependency), it stops with a clear error.
 * Run `node validate.js` for deeper integrity checks.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { scanDataFiles, topoSortFiles } = require("./scan-data.js");

const root = __dirname;
const dataDir = path.join(root, "js", "data");
const outFile = path.join(root, "js", "bundle.js");
const contentDir = path.join(root, "js", "content");

// Engine modules, in fixed load order. loader.js sits right after core
// (it defines NOTES_STORE / QUIZ_DATA / the chunk loader that the notes
// and practice modules rely on at call time).
const ENGINE_FILES = [
  "js/engine/core.js",
  "js/engine/loader.js",
  "js/engine/tree.js",
  "js/engine/notes.js",
  "js/engine/practice.js",
  "js/engine/app.js",
];

// Fields kept on every skeleton node (structural / needed by the sidebar
// tree, search, browse, progress and chapter navigation). Everything else
// on a node — chiefly the heavy `notes` object — is moved into a content
// chunk and loaded on demand.
const SKELETON_FIELDS = [
  "id",
  "title",
  "subtitle",
  "icon",
  "pageRef",
  "isLeaf",
  "isChapter",
];

/**
 * Load the topo-sorted data files into an isolated VM sandbox and return
 * the assembled { TREE_DATA, QUIZ_DATA } objects. Mirrors validate.js —
 * the data files are pure data, but a few touch a minimal document/
 * localStorage shim, so we provide stubs.
 */
function loadDataObjects(sortedRecords) {
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
    },
    localStorage: {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(combined, sandbox);
  return vm.runInContext("({ TREE_DATA, QUIZ_DATA })", sandbox);
}

/**
 * Walk the full TREE_DATA. Produce:
 *   - skeleton: same tree with only structural fields + flags
 *       (hasNotes, chunk, newsType, hasQuiz) — no `notes` bodies.
 *   - notesByChunk: { chunkId: { leafId: notesObject } }
 *   - chunkOfLeaf: { leafId: chunkId }  (chunk = depth-0 subject id)
 */
function buildSkeleton(treeData, quizData) {
  const notesByChunk = {};
  const chunkOfLeaf = {};

  function recur(node, chunkId) {
    const out = {};
    for (const f of SKELETON_FIELDS) {
      if (node[f] !== undefined) out[f] = node[f];
    }

    // A real notes body (non-null object) gets moved into its chunk.
    if (node.notes && typeof node.notes === "object") {
      out.hasNotes = true;
      out.chunk = chunkId;
      if (node.notes.newsType) out.newsType = node.notes.newsType;
      if (!notesByChunk[chunkId]) notesByChunk[chunkId] = {};
      notesByChunk[chunkId][node.id] = node.notes;
      chunkOfLeaf[node.id] = chunkId;
    }

    if (quizData[node.id]) out.hasQuiz = true;

    if (Array.isArray(node.children) && node.children.length) {
      out.children = node.children.map((c) => recur(c, chunkId));
    }
    return out;
  }

  // Each top-level node defines its own chunk id (gs1, gs2, ... syllabus).
  const skeleton = treeData.map((top) => recur(top, top.id));
  return { skeleton, notesByChunk, chunkOfLeaf };
}

/** Group quizzes by the chunk of the leaf they belong to. */
function buildQuizzesByChunk(quizData, chunkOfLeaf) {
  const quizzesByChunk = {};
  const orphanQuizzes = [];
  for (const [topicId, quiz] of Object.entries(quizData)) {
    const chunkId = chunkOfLeaf[topicId];
    if (!chunkId) {
      orphanQuizzes.push(topicId);
      continue;
    }
    if (!quizzesByChunk[chunkId]) quizzesByChunk[chunkId] = {};
    quizzesByChunk[chunkId][topicId] = quiz;
  }
  return { quizzesByChunk, orphanQuizzes };
}

function main() {
  console.log("Scanning js/data/ ...");
  const records = scanDataFiles(dataDir);
  console.log(`Found ${records.length} data file(s).`);

  let sorted;
  try {
    sorted = topoSortFiles(records);
  } catch (err) {
    console.error("❌ Could not determine a safe file order:\n");
    console.error("   " + err.message.replace(/\n/g, "\n   "));
    console.error("\nBundle NOT written. Fix the issue above and re-run.");
    process.exit(1);
  }

  let treeData, quizData;
  try {
    ({ TREE_DATA: treeData, QUIZ_DATA: quizData } = loadDataObjects(sorted));
  } catch (err) {
    console.error("❌ Data files failed to execute:\n");
    console.error("   " + String(err.message).replace(/\n/g, "\n   "));
    console.error("\nBundle NOT written. Run `node validate.js` for details.");
    process.exit(1);
  }
  if (!Array.isArray(treeData)) {
    console.error(
      "❌ TREE_DATA is not defined as an array. Bundle NOT written.",
    );
    process.exit(1);
  }

  const { skeleton, notesByChunk, chunkOfLeaf } = buildSkeleton(
    treeData,
    quizData || {},
  );
  const { quizzesByChunk, orphanQuizzes } = buildQuizzesByChunk(
    quizData || {},
    chunkOfLeaf,
  );
  if (orphanQuizzes.length) {
    console.warn(
      `⚠️  ${orphanQuizzes.length} quiz(zes) have no matching leaf topic and were skipped: ${orphanQuizzes.join(", ")}`,
    );
  }

  // ── Write js/bundle.js (skeleton tree + engine) ──
  let bundle = `// ═══════════════════════════════════════════════════════════
// BUNDLE.JS — Auto-generated by build-bundle.js. DO NOT EDIT DIRECTLY.
// Contains the lightweight TREE_DATA skeleton (structure only, no note
// bodies) plus the engine. Note bodies + quizzes load on demand from
// js/content/<subject>.js. Edit source under js/data/ or js/engine/,
// then re-run: node build-bundle.js
// ═══════════════════════════════════════════════════════════

const TREE_DATA = ${JSON.stringify(skeleton)};

`;
  for (const relPath of ENGINE_FILES) {
    const fullPath = path.join(root, relPath);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ ${relPath} not found. Bundle NOT written.`);
      process.exit(1);
    }
    bundle += `// ── ${relPath} ──\n`;
    bundle += fs.readFileSync(fullPath, "utf8");
    bundle += "\n";
  }
  fs.writeFileSync(outFile, bundle, "utf8");

  // ── Write js/content/<chunk>.js (notes + quizzes per subject) ──
  if (!fs.existsSync(contentDir)) fs.mkdirSync(contentDir, { recursive: true });

  // Every subject that has notes OR quizzes gets a chunk file.
  const chunkIds = new Set([
    ...Object.keys(notesByChunk),
    ...Object.keys(quizzesByChunk),
  ]);

  // Remove stale chunk files for subjects that no longer have content.
  for (const existing of fs.readdirSync(contentDir)) {
    if (!existing.endsWith(".js")) continue;
    const id = existing.replace(/\.js$/, "");
    if (!chunkIds.has(id)) fs.unlinkSync(path.join(contentDir, existing));
  }

  let totalNotes = 0;
  let totalQuizzes = 0;
  for (const chunkId of chunkIds) {
    const payload = {
      notes: notesByChunk[chunkId] || {},
      quizzes: quizzesByChunk[chunkId] || {},
    };
    totalNotes += Object.keys(payload.notes).length;
    totalQuizzes += Object.keys(payload.quizzes).length;
    const content = `// ═══════════════════════════════════════════════════════════
// CONTENT CHUNK "${chunkId}" — Auto-generated by build-bundle.js.
// DO NOT EDIT DIRECTLY. Loaded on demand by js/engine/loader.js the
// first time a topic in this subject is opened. Edit source under
// js/data/ and re-run: node build-bundle.js
// ═══════════════════════════════════════════════════════════
__registerContent(${JSON.stringify(chunkId)}, ${JSON.stringify(payload)});
`;
    fs.writeFileSync(path.join(contentDir, chunkId + ".js"), content, "utf8");
  }

  console.log(
    `✅ js/bundle.js written (skeleton: ${skeleton.length} top-level nodes, ${bundle.length} chars).`,
  );
  console.log(
    `✅ js/content/ written (${chunkIds.size} chunk(s): ${[...chunkIds].sort().join(", ")}).`,
  );
  console.log(
    `   ${totalNotes} note bodies + ${totalQuizzes} quizzes moved into chunks.`,
  );
}

main();
