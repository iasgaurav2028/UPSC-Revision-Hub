#!/usr/bin/env node
/**
 * build-bundle.js
 * ─────────────────────────────────────────────────────────────
 * Builds the site's runtime JS from the modular source under
 * js/data/ and js/engine/. To keep initial page load flat no
 * matter how many notes are added, the output is SPLIT:
 *
 *   js/bundle.js   ← always loaded by index.html. Contains a
 *                    lightweight TREE_DATA "skeleton" (every node's
 *                    id/title/icon/hierarchy but NOT its heavy
 *                    `notes` body) + the engine.
 *
 *   js/content/... ← the note bodies + quizzes, split into files
 *                    that MIRROR the source notes folder structure
 *                    under js/data/. For example:
 *                      js/data/gs2/polity/laxmikanth/part1/ch2/
 *                          constituent-assembly-working.js
 *                    produces
 *                      js/content/gs2/polity/laxmikanth/part1/ch2/
 *                          constituent-assembly-working.js
 *                    Each such file holds the notes for the topic(s)
 *                    declared in that source file, PLUS those topics'
 *                    quizzes. It's loaded on demand the first time you
 *                    open one of its topics (see js/engine/loader.js).
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
 *   mirrored content files happens automatically. Your source files
 *   still keep notes inline; the split is purely a build step. A
 *   topic's content file lands next to where its notes live in the
 *   tree, so js/content/ reads like a mirror of js/data/.
 *
 * If the scan finds a problem (a typo'd reference, a duplicate
 * declaration, a circular dependency), it stops with a clear error.
 * Run `node validate.js` for deeper integrity checks.
 */

const fs = require("fs");
const path = require("path");
const {
  scanDataFiles,
  topoSortFiles,
  loadDataObjects,
} = require("./scan-data.js");

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
// file and loaded on demand.
const SKELETON_FIELDS = [
  "id",
  "title",
  "subtitle",
  "icon",
  "pageRef",
  "isLeaf",
  "isChapter",
];

// Fallback chunk for any topic whose source file couldn't be determined
// (shouldn't happen in practice — every node id appears literally in the
// file that declares it).
const FALLBACK_CHUNK = "misc";

/** "data/gs2/.../file.js"  ->  "gs2/.../file"  (the chunk id / mirror path). */
function relPathToChunk(relPath) {
  return relPath.replace(/^data\//, "").replace(/\.js$/, "");
}

/**
 * Map every node id to the chunk (mirror path) of the SOURCE FILE that
 * declares it, by scanning each file's text for `id: "..."` literals.
 * A node id appears literally only in the file where that node object is
 * defined, so this reliably ties each topic to its notes file.
 */
function buildIdToChunk(records) {
  const idToChunk = {};
  for (const r of records) {
    const text = fs.readFileSync(r.path, "utf8");
    const chunk = relPathToChunk(r.relPath);
    for (const m of text.matchAll(/\bid:\s*["']([^"']+)["']/g)) {
      idToChunk[m[1]] = chunk;
    }
  }
  return idToChunk;
}

/**
 * Walk the full TREE_DATA. Produce:
 *   - skeleton: same tree with only structural fields + flags
 *       (hasNotes, chunk, newsType, hasQuiz) — no `notes` bodies.
 *   - notesByChunk: { chunkPath: { leafId: notesObject } }
 * where chunkPath mirrors the source notes file (via idToChunk).
 */
function buildSkeleton(treeData, quizData, idToChunk) {
  const notesByChunk = {};

  function recur(node) {
    const out = {};
    for (const f of SKELETON_FIELDS) {
      if (node[f] !== undefined) out[f] = node[f];
    }

    // A real notes body (non-null object) gets moved into its chunk,
    // whose path mirrors the source file that declares this node.
    if (node.notes && typeof node.notes === "object") {
      const chunk = idToChunk[node.id] || FALLBACK_CHUNK;
      out.hasNotes = true;
      out.chunk = chunk;
      if (node.notes.newsType) out.newsType = node.notes.newsType;
      if (!notesByChunk[chunk]) notesByChunk[chunk] = {};
      notesByChunk[chunk][node.id] = node.notes;
    }

    if (quizData[node.id]) out.hasQuiz = true;

    if (Array.isArray(node.children) && node.children.length) {
      out.children = node.children.map((c) => recur(c));
    }
    return out;
  }

  const skeleton = treeData.map((top) => recur(top));
  return { skeleton, notesByChunk };
}

/**
 * Group quizzes into the same chunk as their topic's notes file (quiz id
 * === topic id, so we reuse idToChunk).
 */
function buildQuizzesByChunk(quizData, idToChunk) {
  const quizzesByChunk = {};
  const orphanQuizzes = [];
  for (const [topicId, quiz] of Object.entries(quizData)) {
    const chunk = idToChunk[topicId];
    if (!chunk) {
      orphanQuizzes.push(topicId);
      continue;
    }
    if (!quizzesByChunk[chunk]) quizzesByChunk[chunk] = {};
    quizzesByChunk[chunk][topicId] = quiz;
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

  const idToChunk = buildIdToChunk(records);

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

  const { skeleton, notesByChunk } = buildSkeleton(
    treeData,
    quizData || {},
    idToChunk,
  );
  const { quizzesByChunk, orphanQuizzes } = buildQuizzesByChunk(
    quizData || {},
    idToChunk,
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
// js/content/... (mirrors the js/data/ notes folder structure). Edit
// source under js/data/ or js/engine/, then re-run: node build-bundle.js
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

  // ── Write js/content/... (notes + quizzes, mirroring source paths) ──
  // Wipe and regenerate the whole content tree so renamed/removed source
  // files never leave stale content behind. (Everything here is generated.)
  fs.rmSync(contentDir, { recursive: true, force: true });
  fs.mkdirSync(contentDir, { recursive: true });

  const chunkIds = new Set([
    ...Object.keys(notesByChunk),
    ...Object.keys(quizzesByChunk),
  ]);

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
// CONTENT "${chunkId}" — Auto-generated by build-bundle.js. DO NOT EDIT.
// Mirrors the source notes file js/data/${chunkId}.js. Loaded on demand
// by js/engine/loader.js the first time one of its topics is opened.
// Edit the source under js/data/ and re-run: node build-bundle.js
// ═══════════════════════════════════════════════════════════
__registerContent(${JSON.stringify(chunkId)}, ${JSON.stringify(payload)});
`;
    const outPath = path.join(contentDir, chunkId + ".js");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, content, "utf8");
  }

  console.log(
    `✅ js/bundle.js written (skeleton: ${skeleton.length} top-level nodes, ${bundle.length} chars).`,
  );
  console.log(
    `✅ js/content/ written (${chunkIds.size} file(s), mirroring js/data/ structure).`,
  );
  console.log(
    `   ${totalNotes} note bodies + ${totalQuizzes} quizzes split across those files.`,
  );
}

main();
