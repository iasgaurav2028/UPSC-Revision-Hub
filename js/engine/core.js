// ╔══════════════════════════════════════════════════════════════════╗
// ║  ENGINE-CORE.JS — Shared state, storage, and utility functions      ║
// ║                                                                    ║
// ║  Loaded FIRST among the engine modules — everything else depends   ║
// ║  on this. Contains: persisted state (completed/bookmarked/         ║
// ║  favourited/recents/history/tracker), their localStorage save      ║
// ║  functions, tree-traversal helpers (findNode, findPath, progress   ║
// ║  calculations), the search index, subject color-coding, and the    ║
// ║  esc() HTML-escaping helper used by every other module.            ║
// ╚══════════════════════════════════════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════════════╗
// ║  ENGINE.JS — All logic: rendering, state, navigation, quizzes      ║
// ║                                                                    ║
// ║  This file changes RARELY. It contains every function that reads  ║
// ║  TREE_DATA / QUIZ_DATA (from data.js) and turns them into what     ║
// ║  you see on screen: the sidebar tree, search, bookmarks/          ║
// ║  favourites/recents/history/tracker, the timeline, the browse      ║
// ║  (cards/list/grid) view, the note renderer, and the full Practice ║
// ║  Hub (MCQs, flashcards, true/false, fill-blank, match-following).  ║
// ║                                                                    ║
// ║  Depends on data.js being loaded first (needs TREE_DATA/QUIZ_DATA ║
// ║  to already exist), and on the DOM elements defined in index.html.║
// ╚══════════════════════════════════════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════╗
// ║  SUBJECT DASHBOARD META (icons/labels for home cards)     ║
// ╚══════════════════════════════════════════════════════════╝
const DASHBOARD_IDS = ["gs1", "gs2", "gs3", "gs4", "essay", "newspaper"];

// ╔══════════════════════════════════════════════════════════╗
// ║  STATE                                                    ║
// ╚══════════════════════════════════════════════════════════╝
// NOTE: `expanded` (which tree branches are open) is intentionally
// NOT persisted — every page refresh starts with the entire tree
// collapsed. `completed` (progress checkmarks) IS persisted, so
// your progress survives refreshes.
let expanded = {};
let selectedId = null;
let completed = {}; // { [leafId]: true }
let bookmarked = {}; // { [leafId]: true } — bookmarked notes
let favourited = {}; // { [leafId]: true } — favourite topics
let recents = []; // [{ id, title, ts }] — most recent first, max 20
let revisionHistory = []; // [{ id, title, ts, action }] — log of completed/reviewed/quiz events
let dailyTracker = {}; // { "YYYY-MM-DD": count } — topics touched per day

try {
  completed = JSON.parse(localStorage.getItem("upsc-completed") || "{}");
} catch (err) {
  completed = {};
}
try {
  bookmarked = JSON.parse(localStorage.getItem("upsc-bookmarked") || "{}");
} catch (err) {
  bookmarked = {};
}
try {
  favourited = JSON.parse(localStorage.getItem("upsc-favourited") || "{}");
} catch (err) {
  favourited = {};
}
try {
  recents = JSON.parse(localStorage.getItem("upsc-recents") || "[]");
} catch (err) {
  recents = [];
}
try {
  revisionHistory = JSON.parse(
    localStorage.getItem("upsc-revision-history") || "[]",
  );
} catch (err) {
  revisionHistory = [];
}
try {
  dailyTracker = JSON.parse(localStorage.getItem("upsc-daily-tracker") || "{}");
} catch (err) {
  dailyTracker = {};
}

function saveExpanded() {
  // Deliberately a no-op: expanded state is session-only (in-memory),
  // never written to localStorage, so refreshing always resets the tree.
}
function saveCompleted() {
  try {
    localStorage.setItem("upsc-completed", JSON.stringify(completed));
  } catch (err) {}
}
function saveBookmarked() {
  try {
    localStorage.setItem("upsc-bookmarked", JSON.stringify(bookmarked));
  } catch (err) {}
}
function saveFavourited() {
  try {
    localStorage.setItem("upsc-favourited", JSON.stringify(favourited));
  } catch (err) {}
}
function saveRecents() {
  try {
    localStorage.setItem("upsc-recents", JSON.stringify(recents));
  } catch (err) {}
}
function saveRevisionHistory() {
  try {
    localStorage.setItem(
      "upsc-revision-history",
      JSON.stringify(revisionHistory),
    );
  } catch (err) {}
}
function saveDailyTracker() {
  try {
    localStorage.setItem("upsc-daily-tracker", JSON.stringify(dailyTracker));
  } catch (err) {}
}

function todayKey() {
  const d = new Date();
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

// Call whenever a note is opened — updates recents + daily tracker
function trackNoteOpen(node) {
  if (!node || !node.isLeaf) return;
  recents = recents.filter((r) => r.id !== node.id);
  recents.unshift({ id: node.id, title: node.title, ts: Date.now() });
  recents = recents.slice(0, 20);
  saveRecents();

  const key = todayKey();
  if (!dailyTracker[key]) dailyTracker[key] = { opened: [], count: 0 };
  if (!dailyTracker[key].opened.includes(node.id)) {
    dailyTracker[key].opened.push(node.id);
    dailyTracker[key].count = dailyTracker[key].opened.length;
    saveDailyTracker();
  }
}

// Call whenever a topic is marked done/reviewed or a quiz is completed
function logRevisionEvent(node, action) {
  if (!node) return;
  revisionHistory.unshift({
    id: node.id,
    title: node.title,
    ts: Date.now(),
    action,
  });
  revisionHistory = revisionHistory.slice(0, 200);
  saveRevisionHistory();
}

// ╔══════════════════════════════════════════════════════════╗
// ║  TREE HELPERS                                             ║
// ╚══════════════════════════════════════════════════════════╝
function findNode(nodes, id) {
  for (const n of nodes) {
    if (n.id === id) return n;
    if (n.children) {
      const f = findNode(n.children, id);
      if (f) return f;
    }
  }
  return null;
}

function findPath(nodes, id, path = []) {
  for (const n of nodes) {
    const newPath = [...path, n.title];
    if (n.id === id) return newPath;
    if (n.children) {
      const f = findPath(n.children, id, newPath);
      if (f) return f;
    }
  }
  return null;
}

// Collect all leaf ids (nodes with isLeaf:true) under a subtree, for progress calc
function collectLeaves(node) {
  let leaves = [];
  if (node.isLeaf && node.id !== "syllabus") leaves.push(node.id);
  if (node.children) {
    for (const c of node.children) leaves = leaves.concat(collectLeaves(c));
  }
  return leaves;
}

function subtreeProgress(node) {
  const leaves = collectLeaves(node);
  if (leaves.length === 0) return null;
  const done = leaves.filter((id) => completed[id]).length;
  return {
    done,
    total: leaves.length,
    pct: Math.round((done / leaves.length) * 100),
  };
}

// Returns the full chain of ancestor NODES (not just titles) from the
// root of TREE_DATA down to (and including) the node with the given id.
// Returns null if not found.
function findAncestorChain(nodes, id, chain = []) {
  for (const n of nodes) {
    const newChain = [...chain, n];
    if (n.id === id) return newChain;
    if (n.children) {
      const found = findAncestorChain(n.children, id, newChain);
      if (found) return found;
    }
  }
  return null;
}

// ╔══════════════════════════════════════════════════════════╗
// ║  CHAPTER-WISE PREV / NEXT NAVIGATION                       ║
// ║                                                              ║
// ║  A "chapter" is any node explicitly marked `isChapter: true` ║
// ║  in its data file (e.g. Chapter 1 combines Company Rule +    ║
// ║  Crown Rule under one isChapter node; Union Budget combines  ║
// ║  its 4 topics the same way). Prev/Next moves between the     ║
// ║  leaf topics flattened under the nearest such ancestor.       ║
// ║                                                              ║
// ║  When adding new content that should behave as its own       ║
// ║  navigable "chapter", set `isChapter: true` on that node.    ║
// ╚══════════════════════════════════════════════════════════╝

// Identify the "chapter" node for a given leaf id — the ancestor node
// explicitly marked `isChapter: true` (see e.g. ch1.js, budget/index.js).
// Falls back to the leaf's direct parent if no ancestor is marked, so
// navigation still works for content added before this flag existed.
function findChapterNode(leafId) {
  const chain = findAncestorChain(TREE_DATA, leafId);
  if (!chain) return null;
  for (let i = chain.length - 2; i >= 0; i--) {
    if (chain[i].isChapter) return chain[i];
  }
  return chain[chain.length - 2] || null; // fallback: direct parent
}

// Flatten a chapter node's descendant leaves, in tree order.
function chapterLeaves(chapterNode) {
  return collectLeaves(chapterNode)
    .map((id) => findNode(TREE_DATA, id))
    .filter(Boolean);
}

// Given a leaf id, return { chapterNode, leaves, index } describing its
// position within its chapter's flattened leaf list.
function getChapterPosition(leafId) {
  const chapterNode = findChapterNode(leafId);
  if (!chapterNode) return null;
  const leaves = chapterLeaves(chapterNode);
  const index = leaves.findIndex((n) => n.id === leafId);
  if (index === -1) return null;
  return { chapterNode, leaves, index };
}

// Find the chapter node that comes immediately after the given chapter
// node, among its own parent's children (skipping non-chapter siblings
// that have no leaves at all).
function findNextChapterNode(chapterNode) {
  const chain = findAncestorChain(TREE_DATA, chapterNode.id);
  if (!chain || chain.length < 2) return null;
  const parent = chain[chain.length - 2];
  const siblings = parent.children || [];
  const myIndex = siblings.findIndex((s) => s.id === chapterNode.id);
  for (let i = myIndex + 1; i < siblings.length; i++) {
    if (collectLeaves(siblings[i]).length > 0) return siblings[i];
  }
  return null;
}

// Mirror of findNextChapterNode looking backward: the chapter node that
// comes immediately BEFORE the given one among its parent's children
// (skipping empty siblings). Used so "Previous" at a chapter's first
// topic can step back into the prior chapter's last topic.
function findPrevChapterNode(chapterNode) {
  const chain = findAncestorChain(TREE_DATA, chapterNode.id);
  if (!chain || chain.length < 2) return null;
  const parent = chain[chain.length - 2];
  const siblings = parent.children || [];
  const myIndex = siblings.findIndex((s) => s.id === chapterNode.id);
  for (let i = myIndex - 1; i >= 0; i--) {
    if (collectLeaves(siblings[i]).length > 0) return siblings[i];
  }
  return null;
}

function overallProgress() {
  let leaves = [];
  for (const n of TREE_DATA) leaves = leaves.concat(collectLeaves(n));
  const done = leaves.filter((id) => completed[id]).length;
  return {
    done,
    total: leaves.length,
    pct: leaves.length ? Math.round((done / leaves.length) * 100) : 0,
  };
}

// Flat index of all leaf nodes for search
function buildSearchIndex() {
  const index = [];
  function walk(nodes, pathTitles) {
    for (const n of nodes) {
      const newPath = [...pathTitles, n.title];
      if (n.isLeaf && n.id !== "syllabus") {
        index.push({ id: n.id, title: n.title, path: pathTitles.join(" › ") });
      }
      if (n.children) walk(n.children, newPath);
    }
  }
  walk(TREE_DATA, []);
  return index;
}
const SEARCH_INDEX = buildSearchIndex();

// ╔══════════════════════════════════════════════════════════╗
// ║  TREE RENDERING                                           ║
// ╚══════════════════════════════════════════════════════════╝
// ╔══════════════════════════════════════════════════════════╗
// ║  SUBJECT COLOR-CODING — distinct accent per top-level      ║
// ║  section, applied to tree rows (depth 0) and dash cards    ║
// ╚══════════════════════════════════════════════════════════╝
const SUBJECT_COLORS = {
  gs1: "#e0a458", // amber — History/Geography/Society/Culture
  gs2: "#C9A84C", // gold — Polity/IR (matches site's primary gold)
  gs3: "#5fb3a3", // teal-green — Economics/S&T/Environment
  gs4: "#c17bc4", // violet — Ethics/Integrity/Attitude
  essay: "#e8886b", // coral — Essay
  newspaper: "#6fa8dc", // blue — Daily Newspaper
  syllabus: "#9aa5b1", // neutral grey — reference/overview
};

function getSubjectColor(nodeId) {
  return SUBJECT_COLORS[nodeId] || "var(--gold)";
}

// esc() is used across every rendering module (tree, notes, practice hub)
// to safely HTML-escape user-visible text before inserting it via innerHTML.
function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
