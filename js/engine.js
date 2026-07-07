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

function renderTree(nodes, depth, rootId) {
  let html = "";
  // Cap visual indent so deeply nested items (6-7 levels) never overflow
  // the sidebar — after depth 4, stop adding further indent.
  const cappedDepth = Math.min(depth, 4);
  const indentStep = 14;
  const rowPadding = 10 + cappedDepth * indentStep;

  for (const node of nodes) {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = !!expanded[node.id];
    const isSelected = selectedId === node.id;
    const isLeaf = !!node.isLeaf && node.id !== "syllabus";
    const isDone = isLeaf && !!completed[node.id];
    const prog = !isLeaf ? subtreeProgress(node) : null;
    const currentRootId = depth === 0 ? node.id : rootId;
    const accentColor = getSubjectColor(currentRootId);

    html += `<div>`;
    html += `<div class="tree-row ${isSelected ? "selected" : ""}" data-id="${node.id}" data-haschildren="${hasChildren}" data-isleaf="${node.id === "syllabus" ? "special" : isLeaf}" style="padding-left:${rowPadding}px; ${isSelected ? `border-left-color:${accentColor};` : ""}">`;
    html += `<span class="tree-chevron ${hasChildren ? (isExpanded ? "expanded" : "") : "hidden"}" style="${depth === 0 ? `color:${accentColor};` : ""}">▶</span>`;
    if (isLeaf) {
      html += `<span class="tree-check ${isDone ? "done" : ""}" data-checkid="${node.id}" style="${isDone ? `background:${accentColor};border-color:${accentColor};` : ""}">${isDone ? "✓" : ""}</span>`;
    } else {
      html += `<span class="tree-icon">${node.icon || ""}</span>`;
    }
    html += `<div class="tree-label-wrap">`;
    html += `<div class="tree-title ${depth === 0 ? "depth-0" : ""}">${node.title}</div>`;
    if (node.subtitle)
      html += `<div class="tree-subtitle">${node.subtitle}</div>`;
    if (node.pageRef) html += `<div class="tree-pageref">${node.pageRef}</div>`;
    html += `</div>`;
    if (prog && prog.total > 0) {
      html += `<div class="tree-progress-mini">${prog.done}/${prog.total}</div>`;
    }
    html += `</div>`;

    if (hasChildren) {
      // Fixed small margin for the connector line only — does NOT compound
      // across nesting levels (each child renders its own indent via padding).
      html += `<div class="tree-children ${isExpanded ? "" : "collapsed"}" style="margin-left:14px">`;
      html += renderTree(node.children, depth + 1, currentRootId);
      html += `</div>`;
    }
    html += `</div>`;
  }
  return html;
}

function refreshTree() {
  if (sidebarView !== "tree") return; // don't overwrite an alternate view
  document.getElementById("treeContainer").innerHTML = renderTree(
    TREE_DATA,
    0,
    null,
  );
  attachTreeHandlers();
  refreshOverallProgress();
}

function refreshOverallProgress() {
  const p = overallProgress();
  document.getElementById("overallFill").style.width = p.pct + "%";
  document.getElementById("overallPct").textContent = p.pct + "%";
}

// ╔══════════════════════════════════════════════════════════╗
// ║  SIDEBAR VIEW SWITCHER — Tree / Bookmarks / Favourites /   ║
// ║  Recents / Revision History / Daily Tracker                ║
// ╚══════════════════════════════════════════════════════════╝
let sidebarView = "tree";

const SIDEBAR_VIEWS = [
  { id: "tree", label: "Tree", icon: "🌳" },
  { id: "browse", label: "Browse", icon: "🗂" },
  { id: "bookmarks", label: "Bookmarks", icon: "🔖" },
  { id: "favourites", label: "Favourites", icon: "⭐" },
  { id: "recents", label: "Recent", icon: "🕐" },
  { id: "history", label: "History", icon: "📋" },
  { id: "tracker", label: "Tracker", icon: "📅" },
  { id: "timeline", label: "Timeline", icon: "📈" },
];

function renderSidebarNav() {
  const nav = document.getElementById("sidebarNav");
  nav.innerHTML = SIDEBAR_VIEWS.map(
    (v) => `
    <button class="sidebar-nav-btn ${v.id === sidebarView ? "active" : ""}" data-view="${v.id}">${v.icon} ${v.label}</button>
  `,
  ).join("");
  nav.querySelectorAll(".sidebar-nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sidebarView = btn.getAttribute("data-view");
      renderSidebarNav();
      switchSidebarView();
    });
  });
}

function switchSidebarView() {
  const container = document.getElementById("treeContainer");
  if (sidebarView === "tree") {
    refreshTree();
    return;
  }
  if (sidebarView === "bookmarks") {
    renderBookmarksList(container);
    return;
  }
  if (sidebarView === "favourites") {
    renderFavouritesList(container);
    return;
  }
  if (sidebarView === "recents") {
    renderRecentsList(container);
    return;
  }
  if (sidebarView === "history") {
    renderHistoryList(container);
    return;
  }
  if (sidebarView === "tracker") {
    renderTrackerView(container);
    return;
  }
  if (sidebarView === "timeline") {
    container.innerHTML = `<div class="side-list-empty">📈 Timeline opened in the main panel.<br>Tap any point on the timeline to view its notes.</div>`;
    selectedId = null;
    renderTimelineView();
    closeMobileDrawer();
    return;
  }
  if (sidebarView === "browse") {
    container.innerHTML = `<div class="side-list-empty">🗂 Browse view opened in the main panel.<br>Switch between Cards, List, and Grid layouts there.</div>`;
    selectedId = null;
    renderBrowseAllView();
    closeMobileDrawer();
    return;
  }
}

function openNoteFromSideList(id) {
  selectAndReveal(id);
  closeMobileDrawer();
}

function timeAgo(ts) {
  const diffMs = Date.now() - ts;
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return mins + "m ago";
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs + "h ago";
  const days = Math.floor(hrs / 24);
  if (days < 30) return days + "d ago";
  return new Date(ts).toLocaleDateString();
}

function renderBookmarksList(container) {
  const ids = Object.keys(bookmarked).filter((id) => bookmarked[id]);
  if (ids.length === 0) {
    container.innerHTML = `<div class="side-list-empty">📑 No bookmarks yet.<br>Tap the bookmark icon on any note to save it here.</div>`;
    return;
  }
  container.innerHTML =
    `<div class="side-list">` +
    ids
      .map((id) => {
        const node = findNode(TREE_DATA, id);
        if (!node) return "";
        return `<div class="side-list-item" data-openid="${id}">
      <div class="side-list-title">🔖 ${esc(node.title)}</div>
      <div class="side-list-meta">${esc(findPath(TREE_DATA, id, []).slice(0, -1).join(" › ") || "")}</div>
    </div>`;
      })
      .join("") +
    `</div>`;
  attachSideListHandlers(container);
}

function renderFavouritesList(container) {
  const ids = Object.keys(favourited).filter((id) => favourited[id]);
  if (ids.length === 0) {
    container.innerHTML = `<div class="side-list-empty">⭐ No favourite topics yet.<br>Tap the star icon on any note to mark it as a favourite.</div>`;
    return;
  }
  container.innerHTML =
    `<div class="side-list">` +
    ids
      .map((id) => {
        const node = findNode(TREE_DATA, id);
        if (!node) return "";
        return `<div class="side-list-item" data-openid="${id}">
      <div class="side-list-title">⭐ ${esc(node.title)}</div>
      <div class="side-list-meta">${esc(findPath(TREE_DATA, id, []).slice(0, -1).join(" › ") || "")}</div>
    </div>`;
      })
      .join("") +
    `</div>`;
  attachSideListHandlers(container);
}

function renderRecentsList(container) {
  if (recents.length === 0) {
    container.innerHTML = `<div class="side-list-empty">🕐 Nothing opened yet.<br>Topics you view will show up here — pick up where you left off.</div>`;
    return;
  }
  container.innerHTML =
    `<div class="side-list">` +
    `<div class="side-list-item" data-openid="${recents[0].id}" style="background:rgba(201,168,76,0.08)">
      <div class="side-list-title">▶ Continue Reading: ${esc(recents[0].title)}</div>
      <div class="side-list-meta">${timeAgo(recents[0].ts)}</div>
    </div>` +
    recents
      .slice(1)
      .map(
        (r) => `
    <div class="side-list-item" data-openid="${r.id}">
      <div class="side-list-title">${esc(r.title)}</div>
      <div class="side-list-meta">${timeAgo(r.ts)}</div>
    </div>`,
      )
      .join("") +
    `</div>`;
  attachSideListHandlers(container);
}

function renderHistoryList(container) {
  if (revisionHistory.length === 0) {
    container.innerHTML = `<div class="side-list-empty">📋 No revision history yet.<br>Marking topics done or completing quizzes will log activity here.</div>`;
    return;
  }
  container.innerHTML =
    `<div class="side-list">` +
    revisionHistory
      .slice(0, 60)
      .map(
        (r) => `
    <div class="side-list-item" data-openid="${r.id}">
      <div class="side-list-title">${esc(r.title)}</div>
      <div class="side-list-meta">${esc(r.action)} &nbsp;·&nbsp; ${timeAgo(r.ts)}</div>
    </div>`,
      )
      .join("") +
    `</div>`;
  attachSideListHandlers(container);
}

function renderTrackerView(container) {
  const days = Object.keys(dailyTracker).sort().reverse().slice(0, 30);
  if (days.length === 0) {
    container.innerHTML = `<div class="side-list-empty">📅 No activity tracked yet.<br>Open any topic today to start your daily streak.</div>`;
    return;
  }
  const maxCount = Math.max(...days.map((d) => dailyTracker[d].count), 1);
  container.innerHTML =
    `<div class="tracker-cal">` +
    days
      .map((d) => {
        const info = dailyTracker[d];
        const pct = Math.round((info.count / maxCount) * 100);
        return `<div class="tracker-day-row" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;justify-content:space-between">
        <span class="tracker-day-date">${esc(d)}</span>
        <span class="tracker-day-count">${info.count} topic${info.count !== 1 ? "s" : ""}</span>
      </div>
      <div class="tracker-bar-track"><div class="tracker-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
      })
      .join("") +
    `</div>`;
}

function attachSideListHandlers(container) {
  container.querySelectorAll(".side-list-item").forEach((item) => {
    item.addEventListener("click", () => {
      openNoteFromSideList(item.getAttribute("data-openid"));
    });
  });
}

function attachTreeHandlers() {
  document.querySelectorAll(".tree-check").forEach((chk) => {
    chk.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = chk.getAttribute("data-checkid");
      completed[id] = !completed[id];
      saveCompleted();
      refreshTree();
      if (selectedId === id) renderNotes(); // update mark-done button state if viewing this note
    });
  });

  document.querySelectorAll(".tree-row").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.getAttribute("data-id");
      const hasChildren = row.getAttribute("data-haschildren") === "true";
      const isLeafAttr = row.getAttribute("data-isleaf");

      if (hasChildren) {
        expanded[id] = !expanded[id];
        saveExpanded();
      }
      if (isLeafAttr === "true" || isLeafAttr === "special") {
        selectedId = selectedId === id ? null : id;
        renderNotes();
        closeMobileDrawer();
      }
      refreshTree();
    });
  });
}

// ╔══════════════════════════════════════════════════════════╗
// ║  SEARCH                                                   ║
// ╚══════════════════════════════════════════════════════════╝
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchResults.classList.remove("active");
    searchResults.innerHTML = "";
    return;
  }
  const matches = SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.path.toLowerCase().includes(q),
  ).slice(0, 15);
  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="search-empty">No matching topics found</div>`;
  } else {
    searchResults.innerHTML = matches
      .map(
        (m) => `
      <div class="search-result-item" data-searchid="${m.id}">
        <div class="search-result-title">${m.title}</div>
        <div class="search-result-path">${m.path}</div>
      </div>`,
      )
      .join("");
  }
  searchResults.classList.add("active");

  document.querySelectorAll(".search-result-item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-searchid");
      selectAndReveal(id);
      searchInput.value = "";
      searchResults.classList.remove("active");
      closeMobileDrawer();
    });
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap"))
    searchResults.classList.remove("active");
});

// Expand all ancestors of a node and select it
function selectAndReveal(id) {
  function expandAncestors(nodes, targetId, ancestors) {
    for (const n of nodes) {
      if (n.id === targetId) {
        ancestors.forEach((a) => (expanded[a] = true));
        return true;
      }
      if (
        n.children &&
        expandAncestors(n.children, targetId, [...ancestors, n.id])
      )
        return true;
    }
    return false;
  }
  expandAncestors(TREE_DATA, id, []);
  saveExpanded();
  selectedId = id;
  refreshTree();
  renderNotes();
}

// ╔══════════════════════════════════════════════════════════╗
// ║  NOTES / DASHBOARD RENDERING                              ║
// ╚══════════════════════════════════════════════════════════╝
const CIRCLED = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

const DASH_ICONS = { gs1: "🏛", gs2: "⚖", gs3: "📊", gs4: "🧭", essay: "✍" };

function renderDashboard() {
  document.getElementById("topbarTitle").textContent = "Dashboard";
  let html = `<div class="dash-grid">`;
  let cardIndex = 0;
  for (const id of DASHBOARD_IDS) {
    const node = findNode(TREE_DATA, id);
    if (!node) continue;
    const prog = subtreeProgress(node) || { done: 0, total: 0, pct: 0 };
    const color = getSubjectColor(id);
    html += `<div class="dash-card" data-dashid="${id}" style="animation-delay:${cardIndex * 0.06}s; border-left: 3px solid ${color};">
      <div class="dash-card-icon" style="filter: drop-shadow(0 0 6px ${color}55)">${node.icon}</div>
      <div class="dash-card-title">${node.title}${node.subtitle ? " — " + node.subtitle : ""}</div>
      <div class="dash-card-bar"><div class="dash-card-fill" style="width:${prog.pct}%; background: linear-gradient(90deg, ${color}, var(--gold-light));"></div></div>
      <div class="dash-card-pct">${prog.done}/${prog.total} topics · ${prog.pct}%</div>
    </div>`;
    cardIndex++;
  }
  html += `</div>`;
  document.getElementById("notesContent").innerHTML = html;

  document.querySelectorAll(".dash-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-dashid");
      expanded[id] = true;
      saveExpanded();
      refreshTree();
    });
  });
}

function renderSyllabusOverview() {
  document.getElementById("topbarTitle").textContent = "UPSC Syllabus";
  document.getElementById("notesContent").innerHTML = `
    <div class="note-header">
      <div class="note-eyebrow">Reference &nbsp;·&nbsp; Overview</div>
      <div class="note-title">UPSC Syllabus Structure</div>
      <div class="note-source">Papers: GS-1, GS-2, GS-3, GS-4 &amp; Essay (Mains)</div>
    </div>
    <div class="section-title">📋 Paper-wise Breakdown</div>
    <div class="features">
      <div class="feature-row"><div class="fkey">GS-1</div><div class="fval-line first">Indian Heritage &amp; Culture, History, Geography of the World &amp; Society</div></div>
      <div class="feature-row"><div class="fkey">GS-2</div><div class="fval-line first">Governance, Constitution, Polity, Social Justice, International Relations</div></div>
      <div class="feature-row"><div class="fkey">GS-3</div><div class="fval-line first">Technology, Economic Development, Biodiversity, Environment, Security, Disaster Management</div></div>
      <div class="feature-row"><div class="fkey">GS-4</div><div class="fval-line first">Ethics, Integrity and Aptitude</div></div>
      <div class="feature-row"><div class="fkey">Essay</div><div class="fval-line first">Two essays from a choice of topics — tests articulation &amp; structured thinking</div></div>
    </div>
    <div class="section-title">🔑 How to Use This Website</div>
    <div class="sig-box">
      <div class="sig-item"><span class="sig-num">①</span><span class="sig-text">Navigate the tree on the left — click any topic to view detailed notes</span></div>
      <div class="sig-item"><span class="sig-num">②</span><span class="sig-text">Tick the checkbox next to a topic once you've revised it — your progress bar updates automatically</span></div>
      <div class="sig-item"><span class="sig-num">③</span><span class="sig-text">Use the search box to jump directly to any topic across the entire syllabus</span></div>
      <div class="sig-item"><span class="sig-num">④</span><span class="sig-text">Take the quiz at the end of a topic's notes to test yourself with PYQ-style questions</span></div>
    </div>
  `;
}

// ╔══════════════════════════════════════════════════════════╗
// ║  TIMELINE DATA — Constitutional evolution, 1773–1947       ║
// ║  Maps each Chapter 1 leaf topic to a year for plotting.    ║
// ║  Add an entry here whenever a new dated topic (e.g. a      ║
// ║  future chapter's acts) should appear on the timeline.     ║
// ╚══════════════════════════════════════════════════════════╝
const TIMELINE_EVENTS = [
  {
    id: "ch1-regulating1773",
    year: 1773,
    label: "Regulating Act",
    era: "company",
  },
  {
    id: "ch1-amending1781",
    year: 1781,
    label: "Amending Act (Settlement)",
    era: "company",
  },
  {
    id: "ch1-pitts1784",
    year: 1784,
    label: "Pitt's India Act",
    era: "company",
  },
  { id: "ch1-act1786", year: 1786, label: "Act of 1786", era: "company" },
  {
    id: "ch1-charter1793",
    year: 1793,
    label: "Charter Act 1793",
    era: "company",
  },
  {
    id: "ch1-charter1813",
    year: 1813,
    label: "Charter Act 1813",
    era: "company",
  },
  {
    id: "ch1-charter1833",
    year: 1833,
    label: "Charter Act 1833",
    era: "company",
  },
  {
    id: "ch1-charter1853",
    year: 1853,
    label: "Charter Act 1853",
    era: "company",
  },
  {
    id: "ch1-govact1858",
    year: 1858,
    label: "Government of India Act 1858",
    era: "crown",
  },
  {
    id: "ch1-ica1861",
    year: 1861,
    label: "Indian Councils Act 1861",
    era: "crown",
  },
  {
    id: "ch1-ica1892",
    year: 1892,
    label: "Indian Councils Act 1892",
    era: "crown",
  },
  {
    id: "ch1-ica1909",
    year: 1909,
    label: "Morley-Minto Reforms",
    era: "crown",
  },
  { id: "ch1-govact1919", year: 1919, label: "Montford Reforms", era: "crown" },
  { id: "ch1-simon", year: 1927, label: "Simon Commission", era: "crown" },
  {
    id: "ch1-communalaward",
    year: 1932,
    label: "Communal Award",
    era: "crown",
  },
  {
    id: "ch1-govact1935",
    year: 1935,
    label: "Government of India Act 1935",
    era: "crown",
  },
  {
    id: "ch1-indep1947",
    year: 1947,
    label: "Indian Independence Act",
    era: "crown",
  },
];

function renderTimelineView() {
  document.getElementById("topbarTitle").textContent =
    "Constitutional Timeline";
  const container = document.getElementById("notesContent");

  const minYear = Math.min(...TIMELINE_EVENTS.map((e) => e.year));
  const maxYear = Math.max(...TIMELINE_EVENTS.map((e) => e.year));
  const span = maxYear - minYear;

  let html = `<div class="timeline-header">
    <div class="note-eyebrow">Visualization &nbsp;·&nbsp; Chapter 1</div>
    <div class="note-title">Constitutional Evolution Timeline</div>
    <div class="note-source">${minYear} — ${maxYear} &nbsp;·&nbsp; Company Rule &amp; Crown Rule &nbsp;·&nbsp; tap any point to open its notes</div>
  </div>`;

  html += `<div class="timeline-legend">
    <span class="timeline-legend-item"><span class="timeline-dot era-company"></span> Company Rule (1773–1858)</span>
    <span class="timeline-legend-item"><span class="timeline-dot era-crown"></span> Crown Rule (1858–1947)</span>
  </div>`;

  html += `<div class="timeline-track-wrap"><div class="timeline-track">`;
  TIMELINE_EVENTS.forEach((ev, i) => {
    const leftPct = span > 0 ? ((ev.year - minYear) / span) * 100 : 0;
    const isDone = !!completed[ev.id];
    const side = i % 2 === 0 ? "top" : "bottom";
    html += `<div class="timeline-point-wrap" style="left:${leftPct}%">
      <div class="timeline-point era-${ev.era} ${isDone ? "is-done" : ""}" data-timelineid="${ev.id}" title="${esc(ev.label)}"></div>
      <div class="timeline-label timeline-label-${side}">
        <div class="timeline-label-year">${ev.year}</div>
        <div class="timeline-label-text">${esc(ev.label)}</div>
      </div>
    </div>`;
  });
  html += `</div></div>`;

  html += `<div class="timeline-footnote">💡 Filled dots = topics you've marked as done. This timeline currently covers Laxmikanth Chapter 1 (Historical Background) — future dated chapters will extend it automatically.</div>`;

  container.innerHTML = html;

  document.querySelectorAll(".timeline-point").forEach((pt) => {
    pt.addEventListener("click", () => {
      selectAndReveal(pt.getAttribute("data-timelineid"));
    });
  });
}

// ╔══════════════════════════════════════════════════════════╗
// ║  BROWSE ALL TOPICS — Cards / List / Grid view modes        ║
// ║  A flat, searchable layout over every leaf topic in the    ║
// ║  syllabus (as opposed to the nested Tree in the sidebar).  ║
// ╚══════════════════════════════════════════════════════════╝
let browseViewMode = "cards"; // cards | list | grid
let browseFilterSubject = "all";

function getAllLeafNodesWithPath() {
  const out = [];
  function walk(nodes, pathTitles, rootId) {
    for (const n of nodes) {
      const newPath = [...pathTitles, n.title];
      const currentRoot = rootId || n.id;
      if (n.isLeaf && n.id !== "syllabus") {
        out.push({
          node: n,
          path: pathTitles.join(" › "),
          rootId: currentRoot,
        });
      }
      if (n.children) walk(n.children, newPath, currentRoot);
    }
  }
  // Only walk from depth-0 nodes, tracking which top-level subject each leaf belongs to
  for (const top of TREE_DATA) {
    walk(top.children || [], [top.title], top.id);
  }
  return out;
}

function renderBrowseAllView() {
  document.getElementById("topbarTitle").textContent = "Browse All Topics";
  const container = document.getElementById("notesContent");
  const allLeaves = getAllLeafNodesWithPath();

  const filtered =
    browseFilterSubject === "all"
      ? allLeaves
      : allLeaves.filter((l) => l.rootId === browseFilterSubject);

  let html = `<div class="browse-header">
    <div class="note-eyebrow">Visualization &nbsp;·&nbsp; Flat Topic Index</div>
    <div class="note-title">Browse All Topics</div>
    <div class="note-source">${filtered.length} topics${browseFilterSubject !== "all" ? " in " + esc(DASHBOARD_IDS.includes(browseFilterSubject) ? findNode(TREE_DATA, browseFilterSubject).title : browseFilterSubject) : ""}</div>
  </div>`;

  html += `<div class="browse-controls">`;
  html += `<div class="browse-filter-row">`;
  html += `<button class="browse-filter-chip ${browseFilterSubject === "all" ? "active" : ""}" data-filter="all">All</button>`;
  DASHBOARD_IDS.forEach((id) => {
    const n = findNode(TREE_DATA, id);
    if (!n) return;
    html += `<button class="browse-filter-chip ${browseFilterSubject === id ? "active" : ""}" data-filter="${id}" style="${browseFilterSubject === id ? `background:${getSubjectColor(id)};border-color:${getSubjectColor(id)};` : ""}">${n.icon} ${n.title}</button>`;
  });
  html += `</div>`;
  html += `<div class="browse-mode-row">`;
  [
    ["cards", "🗂 Cards"],
    ["list", "☰ List"],
    ["grid", "▦ Grid"],
  ].forEach(([m, label]) => {
    html += `<button class="browse-mode-btn ${browseViewMode === m ? "active" : ""}" data-mode="${m}">${label}</button>`;
  });
  html += `</div></div>`;

  if (filtered.length === 0) {
    html += `<div class="empty-state"><div class="empty-icon">📭</div><div class="empty-title">No Topics</div><div class="empty-desc">No topics found for this filter yet.</div></div>`;
    container.innerHTML = html;
    attachBrowseHandlers();
    return;
  }

  if (browseViewMode === "cards") {
    html +=
      `<div class="browse-cards-grid">` +
      filtered.map((l) => browseCardHtml(l)).join("") +
      `</div>`;
  } else if (browseViewMode === "grid") {
    html +=
      `<div class="browse-grid-tiles">` +
      filtered.map((l) => browseGridTileHtml(l)).join("") +
      `</div>`;
  } else {
    html +=
      `<div class="browse-list-rows">` +
      filtered.map((l) => browseListRowHtml(l)).join("") +
      `</div>`;
  }

  container.innerHTML = html;
  attachBrowseHandlers();
}

function browseCardHtml(l) {
  const color = getSubjectColor(l.rootId);
  const isDone = !!completed[l.node.id];
  const isBookmarked = !!bookmarked[l.node.id];
  return `<div class="browse-card" data-openid="${l.node.id}" style="border-left: 3px solid ${color};">
    <div class="browse-card-top">
      <span class="browse-card-icon">${l.node.icon || "📄"}</span>
      ${isDone ? '<span class="browse-card-done">✓</span>' : ""}
      ${isBookmarked ? '<span class="browse-card-bookmark">🔖</span>' : ""}
    </div>
    <div class="browse-card-title">${esc(l.node.title)}</div>
    <div class="browse-card-path">${esc(l.path)}</div>
  </div>`;
}

function browseGridTileHtml(l) {
  const color = getSubjectColor(l.rootId);
  const isDone = !!completed[l.node.id];
  return `<div class="browse-tile" data-openid="${l.node.id}" style="background: linear-gradient(160deg, ${color}22, transparent); border-color: ${color}44;" title="${esc(l.node.title)}">
    <div class="browse-tile-icon">${l.node.icon || "📄"}</div>
    <div class="browse-tile-title">${esc(l.node.title)}</div>
    ${isDone ? '<div class="browse-tile-done">✓</div>' : ""}
  </div>`;
}

function browseListRowHtml(l) {
  const color = getSubjectColor(l.rootId);
  const isDone = !!completed[l.node.id];
  const isBookmarked = !!bookmarked[l.node.id];
  return `<div class="browse-list-row" data-openid="${l.node.id}">
    <span class="browse-list-dot" style="background:${color}"></span>
    <span class="browse-list-icon">${l.node.icon || "📄"}</span>
    <div class="browse-list-text">
      <div class="browse-list-title">${esc(l.node.title)}</div>
      <div class="browse-list-path">${esc(l.path)}</div>
    </div>
    ${isBookmarked ? '<span class="browse-list-tag">🔖</span>' : ""}
    ${isDone ? '<span class="browse-list-tag done">✓ Done</span>' : ""}
  </div>`;
}

function attachBrowseHandlers() {
  document.querySelectorAll("[data-openid]").forEach((el) => {
    el.addEventListener("click", () =>
      selectAndReveal(el.getAttribute("data-openid")),
    );
  });
  document.querySelectorAll(".browse-filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      browseFilterSubject = chip.getAttribute("data-filter");
      renderBrowseAllView();
    });
  });
  document.querySelectorAll(".browse-mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      browseViewMode = btn.getAttribute("data-mode");
      renderBrowseAllView();
    });
  });
}

function renderNotes() {
  if (selectedId === "syllabus") {
    renderSyllabusOverview();
    return;
  }
  if (!selectedId) {
    renderDashboard();
    return;
  }

  const node = findNode(TREE_DATA, selectedId);
  const container = document.getElementById("notesContent");
  const topbarTitle = document.getElementById("topbarTitle");

  if (!node || !node.notes) {
    // Branch node with no notes yet, or leaf with notes:null placeholder
    const prog = subtreeProgress(node);
    topbarTitle.textContent = node ? node.title : "Dashboard";
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📖</div>
        <div class="empty-title">${node ? esc(node.title) : "Select a Topic"}</div>
        <div class="empty-desc">${prog ? `Progress: ${prog.done}/${prog.total} topics completed (${prog.pct}%)` : "Notes for this topic haven't been added yet. Share the chapter content to add it."}</div>
      </div>`;
    return;
  }

  if (node.notes.newsType) {
    trackNoteOpen(node);
    renderNewsArticleNote(node);
    return;
  }
  trackNoteOpen(node);
  renderStandardNote(node);
}

function renderStandardNote(node) {
  const container = document.getElementById("notesContent");
  const topbarTitle = document.getElementById("topbarTitle");
  const n = node.notes;
  const isDone = !!completed[node.id];
  const hasQuiz = !!QUIZ_DATA[node.id];
  const isBookmarked = !!bookmarked[node.id];
  const isFavourited = !!favourited[node.id];
  topbarTitle.textContent = node.title;

  let html = "";
  html += `<div class="note-header"><div class="note-title-row"><div>`;
  html += `<div class="note-eyebrow">${esc(n.subject || "GS")} &nbsp;·&nbsp; ${esc(n.era || "")}</div>`;
  html += `<div class="note-title-line">
    <div class="note-title">${esc(node.title)}</div>
    <button class="icon-toggle-btn bookmark-toggle ${isBookmarked ? "active" : ""}" id="bookmarkBtn" title="Bookmark this note">${isBookmarked ? "🔖" : "📑"}</button>
    <button class="icon-toggle-btn favourite-toggle ${isFavourited ? "active" : ""}" id="favouriteBtn" title="Favourite this topic">${isFavourited ? "⭐" : "☆"}</button>
  </div>`;
  html += `<div class="note-source">${esc(n.source || "Laxmikanth")} ${node.pageRef ? "&nbsp;·&nbsp; " + esc(node.pageRef) : ""}</div>`;
  html += `</div>`;
  html += `<div class="note-actions">`;
  html += `<button class="mark-done-btn ${isDone ? "is-done" : ""}" id="markDoneBtn">${isDone ? "✓ Completed" : "Mark as Done"}</button>`;
  if (hasQuiz)
    html += `<button class="quiz-cta-btn" id="startQuizBtn">🎯 Practice Hub</button>`;
  html += `</div></div></div>`;

  html += `<div class="section-title">⚖ Constitutional Significance</div><div class="sig-box">`;
  (n.significance || []).forEach((s, i) => {
    html += `<div class="sig-item"><span class="sig-num">${CIRCLED[i] || i + 1 + "."}</span><span class="sig-text">${esc(s)}</span></div>`;
  });
  html += `</div>`;

  html += `<div class="section-title">📜 Key Features</div><div class="features">`;
  (n.features || []).forEach((f) => {
    html += `<div class="feature-row"><div class="fkey">${esc(f.key)}</div><div>`;
    f.main.split("\n").forEach((line, j) => {
      html += `<div class="fval-line ${j === 0 ? "first" : ""}">${esc(line)}</div>`;
    });
    if (f.note) html += `<div class="fval-note">${esc(f.note)}</div>`;
    html += `</div></div>`;
  });
  html += `</div>`;

  html += `<div class="two-col">`;
  html += `<div class="two-col-cell"><div class="section-title">⚠ Prelims Traps</div><div class="trap-box">`;
  (n.traps || []).forEach((t) => {
    html += `<div class="trap-item"><span class="t-icon">✗</span><div>`;
    html += `<div class="t-label">${esc(t.label)}</div>`;
    t.lines.forEach((line) => {
      html += `<div class="t-line">${esc(line)}</div>`;
    });
    html += `</div></div>`;
  });
  html += `</div></div>`;

  html += `<div class="two-col-cell"><div class="section-title">✍ Mains Angle</div><div class="mains-box">`;
  html += `<div class="mains-quote">&ldquo;${esc(n.mainsAngle || "")}&rdquo;</div>`;
  html += `<div class="mains-theme-label">Key Theme</div>`;
  html += `<div class="mains-theme">${esc(n.mainsTheme || "")}</div>`;
  html += `</div></div>`;
  html += `</div>`;

  html += `<div class="section-title">🔑 Quick Recall</div><div class="hooks">`;
  (n.recall || []).forEach((r) => {
    html += `<span class="hook">${esc(r)}</span>`;
  });
  html += `</div>`;

  container.innerHTML = html;
  document.querySelector(".notes-scroll").scrollTop = 0;

  const markBtn = document.getElementById("markDoneBtn");
  if (markBtn) {
    markBtn.addEventListener("click", () => {
      completed[node.id] = !completed[node.id];
      saveCompleted();
      if (completed[node.id]) logRevisionEvent(node, "completed");
      refreshTree();
      renderNotes();
    });
  }
  const bookmarkBtn = document.getElementById("bookmarkBtn");
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener("click", () => {
      bookmarked[node.id] = !bookmarked[node.id];
      saveBookmarked();
      renderStandardNote(node);
    });
  }
  const favouriteBtn = document.getElementById("favouriteBtn");
  if (favouriteBtn) {
    favouriteBtn.addEventListener("click", () => {
      favourited[node.id] = !favourited[node.id];
      saveFavourited();
      renderStandardNote(node);
    });
  }
  const quizBtn = document.getElementById("startQuizBtn");
  if (quizBtn) {
    quizBtn.addEventListener("click", () => openQuiz(node.id));
  }
}

// ╔══════════════════════════════════════════════════════════╗
// ║  NEWS ARTICLE NOTE TEMPLATE                                ║
// ║  Lighter-weight than the Laxmikanth-style note — built for ║
// ║  daily current-affairs entries (headline, date, summary,   ║
// ║  syllabus relevance, prelims/mains angle).                  ║
// ╚══════════════════════════════════════════════════════════╝
function renderNewsArticleNote(node) {
  const container = document.getElementById("notesContent");
  const topbarTitle = document.getElementById("topbarTitle");
  const n = node.notes;
  const isDone = !!completed[node.id];
  topbarTitle.textContent = node.title;

  let html = "";
  html += `<div class="note-header"><div class="note-title-row"><div>`;
  html += `<div class="note-eyebrow">📰 The Hindu &nbsp;·&nbsp; ${esc(n.date || "")} &nbsp;·&nbsp; ${esc(n.subject || "")}</div>`;
  html += `<div class="note-title">${esc(node.title)}</div>`;
  if (n.section)
    html += `<div class="note-source">Section: ${esc(n.section)}</div>`;
  html += `</div>`;
  html += `<div class="note-actions">`;
  html += `<button class="mark-done-btn ${isDone ? "is-done" : ""}" id="markDoneBtn">${isDone ? "✓ Reviewed" : "Mark as Reviewed"}</button>`;
  html += `</div></div></div>`;

  if (n.summary) {
    html += `<div class="section-title">📄 Summary</div><div class="sig-box">`;
    html += `<div class="sig-text" style="line-height:1.75">${esc(n.summary)}</div>`;
    html += `</div>`;
  }

  if (n.keyPoints && n.keyPoints.length) {
    html += `<div class="section-title">🔎 Key Points</div><div class="features">`;
    n.keyPoints.forEach((kp) => {
      html += `<div class="feature-row"><div class="fkey">${esc(kp.key)}</div><div>`;
      html += `<div class="fval-line first">${esc(kp.detail)}</div>`;
      html += `</div></div>`;
    });
    html += `</div>`;
  }

  if (n.syllabusLink) {
    html += `<div class="section-title">🎯 Syllabus Relevance</div><div class="sig-box">`;
    html += `<div class="sig-text">${esc(n.syllabusLink)}</div>`;
    html += `</div>`;
  }

  if ((n.prelimsPoints && n.prelimsPoints.length) || n.mainsAngle) {
    html += `<div class="two-col">`;
    if (n.prelimsPoints && n.prelimsPoints.length) {
      html += `<div class="two-col-cell"><div class="section-title">⚠ Prelims Pointers</div><div class="trap-box">`;
      n.prelimsPoints.forEach((p) => {
        html += `<div class="trap-item"><span class="t-icon">•</span><div class="t-line">${esc(p)}</div></div>`;
      });
      html += `</div></div>`;
    }
    if (n.mainsAngle) {
      html += `<div class="two-col-cell"><div class="section-title">✍ Mains Angle</div><div class="mains-box">`;
      html += `<div class="mains-quote">&ldquo;${esc(n.mainsAngle)}&rdquo;</div>`;
      if (n.mainsGS) {
        html += `<div class="mains-theme-label">Likely GS Paper</div><div class="mains-theme">${esc(n.mainsGS)}</div>`;
      }
      html += `</div></div>`;
    }
    html += `</div>`;
  }

  if (n.recall && n.recall.length) {
    html += `<div class="section-title">🔑 Quick Recall</div><div class="hooks">`;
    n.recall.forEach((r) => {
      html += `<span class="hook">${esc(r)}</span>`;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
  document.querySelector(".notes-scroll").scrollTop = 0;

  const markBtn = document.getElementById("markDoneBtn");
  if (markBtn) {
    markBtn.addEventListener("click", () => {
      completed[node.id] = !completed[node.id];
      saveCompleted();
      if (completed[node.id]) logRevisionEvent(node, "reviewed");
      refreshTree();
      renderNewsArticleNote(node);
    });
  }
}

let quizState = { qid: null, index: 0, answers: [], questions: [] };
let currentPracticeMode = "mcq";
let currentPracticeNodeId = null;

const PRACTICE_MODES = [
  { id: "mcq", label: "Topic MCQs", icon: "📝" },
  { id: "flashcards", label: "Flashcards", icon: "🗂" },
  { id: "truefalse", label: "True/False", icon: "✓✗" },
  { id: "fillblank", label: "Fill Blanks", icon: "___" },
  { id: "match", label: "Match Following", icon: "🔗" },
  { id: "revision", label: "Revision Quiz", icon: "⚡" },
  { id: "random", label: "Random Quiz", icon: "🎲" },
  { id: "pyq", label: "PYQ Practice", icon: "🏛" },
];

// ╔══════════════════════════════════════════════════════════╗
// ║  AUTO-DERIVATION: build all 8 practice formats from the    ║
// ║  existing 20-MCQ bank for a topic (QUIZ_DATA[nodeId])      ║
// ╚══════════════════════════════════════════════════════════╝
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 1. MCQ — the original bank, as-is
function deriveMCQ(quiz) {
  return quiz.questions;
}

// 2. Flashcards — front: question, back: correct answer + explanation
function deriveFlashcards(quiz) {
  return quiz.questions.map((q) => ({
    front: q.q,
    back: q.options[q.correct] + (q.explain ? "\n\n💡 " + q.explain : ""),
  }));
}

// 3. True/False — for each MCQ, present the CORRECT option as a "True"
// statement half the time, and a wrong option as a "False" statement the
// other half — built by merging the question stem with an option.
function deriveTrueFalse(quiz) {
  const out = [];
  quiz.questions.forEach((q, i) => {
    const makeTrue = i % 2 === 0;
    const optIndex = makeTrue
      ? q.correct
      : (q.correct + 1 + (i % (q.options.length - 1))) % q.options.length;
    const statement =
      q.q.replace(/:$/, "").replace(/\?$/, "") + " — " + q.options[optIndex];
    out.push({
      statement,
      isTrue: optIndex === q.correct,
      explain: q.explain,
    });
  });
  return out;
}

// 4. Fill in the Blank — blank out the correct option's most distinctive
// word/phrase from within the explanation or option text itself.
function deriveFillBlank(quiz) {
  return quiz.questions.map((q) => {
    const answer = q.options[q.correct];
    return {
      sentence: q.q,
      answer: answer,
      explain: q.explain,
    };
  });
}

// 5. Match the Following — pairs built from each question's stem (short
// form) and its correct answer.
function deriveMatch(quiz) {
  const pairs = quiz.questions.slice(0, 8).map((q) => ({
    left: q.q.length > 70 ? q.q.slice(0, 67) + "..." : q.q,
    right: q.options[q.correct],
  }));
  return pairs;
}

// 6. Revision Quiz — a fast shuffled subset (10 of the 20) for quick recall
function deriveRevision(quiz) {
  return shuffle(quiz.questions).slice(0, Math.min(10, quiz.questions.length));
}

// 7. Random Quiz — all questions, fully shuffled (both order of questions
// AND order of options within each question)
function deriveRandom(quiz) {
  return shuffle(quiz.questions).map((q) => {
    const optOrder = shuffle(q.options.map((_, i) => i));
    return {
      q: q.q,
      options: optOrder.map((i) => q.options[i]),
      correct: optOrder.indexOf(q.correct),
      explain: q.explain,
    };
  });
}

// 8. PYQ Practice — same bank, exam-style framing (no changes to content,
// just presented under exam conditions/labeling)
function derivePYQ(quiz) {
  return quiz.questions;
}

function getModeQuestions(nodeId, mode) {
  const quiz = QUIZ_DATA[nodeId];
  if (!quiz) return null;
  switch (mode) {
    case "mcq":
      return { type: "mcq", items: deriveMCQ(quiz), title: quiz.title };
    case "flashcards":
      return {
        type: "flashcards",
        items: deriveFlashcards(quiz),
        title: quiz.title,
      };
    case "truefalse":
      return {
        type: "truefalse",
        items: deriveTrueFalse(quiz),
        title: quiz.title,
      };
    case "fillblank":
      return {
        type: "fillblank",
        items: deriveFillBlank(quiz),
        title: quiz.title,
      };
    case "match":
      return { type: "match", items: deriveMatch(quiz), title: quiz.title };
    case "revision":
      return { type: "mcq", items: deriveRevision(quiz), title: quiz.title };
    case "random":
      return { type: "mcq", items: deriveRandom(quiz), title: quiz.title };
    case "pyq":
      return { type: "mcq", items: derivePYQ(quiz), title: quiz.title };
    default:
      return null;
  }
}

// ╔══════════════════════════════════════════════════════════╗
// ║  PRACTICE HUB — OPEN / TABS / ROUTER                       ║
// ╚══════════════════════════════════════════════════════════╝
function openQuiz(nodeId) {
  currentPracticeNodeId = nodeId;
  currentPracticeMode = "mcq";
  document.getElementById("quizOverlay").classList.add("active");
  renderPracticeTabs();
  loadPracticeMode("mcq");
}

function closeQuiz() {
  document.getElementById("quizOverlay").classList.remove("active");
}

function renderPracticeTabs() {
  const tabsEl = document.getElementById("practiceTabs");
  tabsEl.innerHTML = PRACTICE_MODES.map(
    (m) => `
    <button class="practice-tab ${m.id === currentPracticeMode ? "active" : ""}" data-mode="${m.id}">
      ${m.icon} ${m.label}
    </button>`,
  ).join("");
  tabsEl.querySelectorAll(".practice-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      currentPracticeMode = tab.getAttribute("data-mode");
      renderPracticeTabs();
      loadPracticeMode(currentPracticeMode);
    });
  });
}

function loadPracticeMode(mode) {
  const data = getModeQuestions(currentPracticeNodeId, mode);
  document.getElementById("quizTitle").textContent = data
    ? data.title.toUpperCase()
    : "PRACTICE HUB";
  if (!data || !data.items || data.items.length === 0) {
    document.getElementById("quizFooter").style.display = "none";
    document.getElementById("quizProgressFill").style.width = "0%";
    document.getElementById("quizBody").innerHTML =
      `<div class="practice-mode-info">No content available for this mode yet.</div>`;
    return;
  }

  if (data.type === "mcq") {
    quizState = {
      index: 0,
      answers: new Array(data.items.length).fill(null),
      questions: data.items,
    };
    document.getElementById("quizFooter").style.display = "flex";
    renderQuizQuestion();
  } else if (data.type === "flashcards") {
    renderFlashcards(data.items);
  } else if (data.type === "truefalse") {
    renderTrueFalse(data.items);
  } else if (data.type === "fillblank") {
    renderFillBlank(data.items);
  } else if (data.type === "match") {
    renderMatch(data.items);
  }
}

// ╔══════════════════════════════════════════════════════════╗
// ║  MODE: MCQ (shared by Topic MCQs / Revision / Random / PYQ) ║
// ╚══════════════════════════════════════════════════════════╝
function renderQuizQuestion() {
  const { index, questions, answers } = quizState;
  const footer = document.getElementById("quizFooter");
  const progressFill = document.getElementById("quizProgressFill");

  if (index >= questions.length) {
    renderQuizResult();
    return;
  }

  footer.style.display = "flex";
  progressFill.style.width = (index / questions.length) * 100 + "%";

  const q = questions[index];
  const selected = answers[index];
  const letters = ["A", "B", "C", "D"];

  let html = `<div class="quiz-qnum">QUESTION ${index + 1} OF ${questions.length}</div>`;
  html += `<div class="quiz-question">${esc(q.q)}</div>`;
  q.options.forEach((opt, i) => {
    let cls = "quiz-option";
    if (selected !== null) {
      if (i === q.correct) cls += " correct";
      else if (i === selected) cls += " incorrect";
    } else if (i === selected) {
      cls += " selected";
    }
    html += `<div class="${cls}" data-optindex="${i}">
      <span class="quiz-option-letter">${letters[i]}.</span>
      <span>${esc(opt)}</span>
    </div>`;
  });
  if (selected !== null) {
    html += `<div class="quiz-explain active">💡 ${esc(q.explain)}</div>`;
  }

  document.getElementById("quizBody").innerHTML = html;

  document.querySelectorAll(".quiz-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      if (quizState.answers[quizState.index] !== null) return;
      const i = parseInt(opt.getAttribute("data-optindex"), 10);
      quizState.answers[quizState.index] = i;
      renderQuizQuestion();
    });
  });

  document.getElementById("quizPrevBtn").disabled = index === 0;
  document.getElementById("quizNextBtn").textContent =
    index === questions.length - 1 ? "Finish ▶" : "Next ▶";
  document.getElementById("quizNextBtn").disabled = selected === null;

  const score = answers.filter((a, i) => a === questions[i].correct).length;
  document.getElementById("quizScoreLabel").textContent =
    `Score: ${score}/${questions.length}`;
}

function renderQuizResult() {
  const { questions, answers } = quizState;
  const score = answers.filter((a, i) => a === questions[i].correct).length;
  const pct = Math.round((score / questions.length) * 100);
  document.getElementById("quizProgressFill").style.width = "100%";
  document.getElementById("quizFooter").style.display = "none";
  document.getElementById("quizBody").innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-score">${score}/${questions.length}</div>
      <div class="quiz-result-label">${pct}% Score</div>
      <button class="quiz-retry-btn" id="quizRetryBtn">Retry</button>
    </div>`;
  document.getElementById("quizRetryBtn").addEventListener("click", () => {
    loadPracticeMode(currentPracticeMode);
  });

  const node = findNode(TREE_DATA, currentPracticeNodeId);
  if (node)
    logRevisionEvent(
      node,
      `quiz (${currentPracticeMode}): ${score}/${questions.length} (${pct}%)`,
    );
}

document.getElementById("quizPrevBtn").addEventListener("click", () => {
  if (quizState.index > 0) {
    quizState.index--;
    renderQuizQuestion();
  }
});
document.getElementById("quizNextBtn").addEventListener("click", () => {
  quizState.index++;
  renderQuizQuestion();
});
document.getElementById("quizClose").addEventListener("click", closeQuiz);
document.getElementById("quizOverlay").addEventListener("click", (e) => {
  if (e.target.id === "quizOverlay") closeQuiz();
});

// ╔══════════════════════════════════════════════════════════╗
// ║  MODE: FLASHCARDS                                          ║
// ╚══════════════════════════════════════════════════════════╝
let flashState = { cards: [], index: 0, flipped: false };

function renderFlashcards(cards) {
  flashState = { cards, index: 0, flipped: false };
  document.getElementById("quizFooter").style.display = "none";
  document.getElementById("quizProgressFill").style.width = "0%";
  paintFlashcard();
}

function paintFlashcard() {
  const { cards, index, flipped } = flashState;
  document.getElementById("quizProgressFill").style.width =
    (index / cards.length) * 100 + "%";
  const card = cards[index];
  document.getElementById("quizBody").innerHTML = `
    <div class="flashcard-wrap">
      <div class="flashcard ${flipped ? "flipped" : ""}" id="flashcardEl">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-label">Question</div>
            <div class="flashcard-content">${esc(card.front)}</div>
            <div class="flashcard-hint" style="margin-top:16px">Tap to reveal answer</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-label">Answer</div>
            <div class="flashcard-content">${esc(card.back)}</div>
          </div>
        </div>
      </div>
      <div class="flashcard-nav">
        <button class="quiz-nav-btn" id="fcPrev" ${index === 0 ? "disabled" : ""}>◀ Prev</button>
        <span class="flashcard-counter">${index + 1} / ${cards.length}</span>
        <button class="quiz-nav-btn" id="fcNext" ${index === cards.length - 1 ? "disabled" : ""}>Next ▶</button>
      </div>
    </div>`;

  document.getElementById("flashcardEl").addEventListener("click", () => {
    flashState.flipped = !flashState.flipped;
    paintFlashcard();
  });
  document.getElementById("fcPrev").addEventListener("click", (e) => {
    e.stopPropagation();
    if (flashState.index > 0) {
      flashState.index--;
      flashState.flipped = false;
      paintFlashcard();
    }
  });
  document.getElementById("fcNext").addEventListener("click", (e) => {
    e.stopPropagation();
    if (flashState.index < cards.length - 1) {
      flashState.index++;
      flashState.flipped = false;
      paintFlashcard();
    }
  });
}

// ╔══════════════════════════════════════════════════════════╗
// ║  MODE: TRUE / FALSE                                        ║
// ╚══════════════════════════════════════════════════════════╝
let tfState = { items: [], index: 0, answered: false, score: 0 };

function renderTrueFalse(items) {
  tfState = { items, index: 0, answered: false, score: 0 };
  document.getElementById("quizFooter").style.display = "none";
  paintTrueFalse();
}

function paintTrueFalse() {
  const { items, index, answered } = tfState;
  document.getElementById("quizProgressFill").style.width =
    (index / items.length) * 100 + "%";
  const item = items[index];

  let html = `<div class="quiz-qnum">STATEMENT ${index + 1} OF ${items.length}</div>`;
  html += `<div class="tf-statement">${esc(item.statement)}</div>`;
  html += `<div class="tf-buttons">
    <button class="tf-btn tf-true" data-val="true">✓ True</button>
    <button class="tf-btn tf-false" data-val="false">✗ False</button>
  </div>`;
  if (answered) {
    html += `<div class="quiz-explain active">💡 ${esc(item.explain)}</div>`;
    html += `<div class="quiz-footer" style="border:none;padding:14px 0 0;">
      <button class="quiz-nav-btn" id="tfPrev" ${index === 0 ? "disabled" : ""}>◀ Prev</button>
      <span class="quiz-score-label">Score: ${tfState.score}/${items.length}</span>
      <button class="quiz-nav-btn" id="tfNext">${index === items.length - 1 ? "Finish ▶" : "Next ▶"}</button>
    </div>`;
  }
  document.getElementById("quizBody").innerHTML = html;

  if (!answered) {
    document.querySelectorAll(".tf-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val") === "true";
        const correct = val === item.isTrue;
        if (correct) tfState.score++;
        tfState.answered = true;
        paintTrueFalse();
        setTimeout(() => {
          document.querySelectorAll(".tf-btn").forEach((b) => {
            const bVal = b.getAttribute("data-val") === "true";
            if (bVal === item.isTrue) b.classList.add("correct-answer");
            else if (bVal === val) b.classList.add("selected-incorrect");
          });
        }, 10);
      });
    });
  } else {
    const prevBtn = document.getElementById("tfPrev");
    const nextBtn = document.getElementById("tfNext");
    if (prevBtn)
      prevBtn.addEventListener("click", () => {
        if (index > 0) {
          tfState.index--;
          tfState.answered = false;
          paintTrueFalse();
        }
      });
    if (nextBtn)
      nextBtn.addEventListener("click", () => {
        if (index < items.length - 1) {
          tfState.index++;
          tfState.answered = false;
          paintTrueFalse();
        } else {
          document.getElementById("quizProgressFill").style.width = "100%";
          document.getElementById("quizBody").innerHTML = `
          <div class="quiz-result">
            <div class="quiz-result-score">${tfState.score}/${items.length}</div>
            <div class="quiz-result-label">${Math.round((tfState.score / items.length) * 100)}% Score</div>
            <button class="quiz-retry-btn" id="tfRetry">Retry</button>
          </div>`;
          document
            .getElementById("tfRetry")
            .addEventListener("click", () => renderTrueFalse(items));
        }
      });
  }
}

// ╔══════════════════════════════════════════════════════════╗
// ║  MODE: FILL IN THE BLANK                                   ║
// ╚══════════════════════════════════════════════════════════╝
let fibState = { items: [], index: 0, checked: false, score: 0 };

function renderFillBlank(items) {
  fibState = { items, index: 0, checked: false, score: 0 };
  document.getElementById("quizFooter").style.display = "none";
  paintFillBlank();
}

function paintFillBlank() {
  const { items, index, checked } = fibState;
  document.getElementById("quizProgressFill").style.width =
    (index / items.length) * 100 + "%";
  const item = items[index];

  let html = `<div class="quiz-qnum">FILL IN THE BLANK — ${index + 1} OF ${items.length}</div>`;
  html += `<div class="fib-sentence">${esc(item.sentence)}</div>`;
  html += `<input type="text" class="fib-blank-input" id="fibInput" placeholder="Type your answer" ${checked ? "disabled" : ""}>`;
  html += `<div><button class="fib-check-btn" id="fibCheckBtn">${checked ? "Next ▶" : "Check Answer"}</button></div>`;
  if (checked) {
    const userVal = document.getElementById("fibInput")
      ? document.getElementById("fibInput").value
      : "";
    html += `<div class="fib-feedback active ${fibState.lastCorrect ? "correct" : "incorrect"}">
      ${fibState.lastCorrect ? "✓ Correct!" : "✗ Correct answer: " + esc(item.answer)}
      <br>💡 ${esc(item.explain)}
    </div>`;
  }
  document.getElementById("quizBody").innerHTML = html;

  document.getElementById("fibCheckBtn").addEventListener("click", () => {
    if (!fibState.checked) {
      const input = document.getElementById("fibInput");
      const userVal = (input.value || "").trim().toLowerCase();
      const correctVal = item.answer.trim().toLowerCase();
      fibState.lastCorrect = correctVal.includes(userVal) && userVal.length > 2;
      if (fibState.lastCorrect) fibState.score++;
      fibState.checked = true;
      paintFillBlank();
    } else {
      if (index < items.length - 1) {
        fibState.index++;
        fibState.checked = false;
        paintFillBlank();
      } else {
        document.getElementById("quizProgressFill").style.width = "100%";
        document.getElementById("quizBody").innerHTML = `
          <div class="quiz-result">
            <div class="quiz-result-score">${fibState.score}/${items.length}</div>
            <div class="quiz-result-label">${Math.round((fibState.score / items.length) * 100)}% Score</div>
            <button class="quiz-retry-btn" id="fibRetry">Retry</button>
          </div>`;
        document
          .getElementById("fibRetry")
          .addEventListener("click", () => renderFillBlank(items));
      }
    }
  });
}

// ╔══════════════════════════════════════════════════════════╗
// ║  MODE: MATCH THE FOLLOWING                                 ║
// ╚══════════════════════════════════════════════════════════╝
let matchState = {
  pairs: [],
  leftOrder: [],
  rightOrder: [],
  selectedLeft: null,
  matched: [],
  score: 0,
};

function renderMatch(pairs) {
  const leftOrder = shuffle(pairs.map((_, i) => i));
  const rightOrder = shuffle(pairs.map((_, i) => i));
  matchState = {
    pairs,
    leftOrder,
    rightOrder,
    selectedLeft: null,
    matched: [],
    score: 0,
  };
  document.getElementById("quizFooter").style.display = "none";
  document.getElementById("quizProgressFill").style.width = "0%";
  paintMatch();
}

function paintMatch() {
  const { pairs, leftOrder, rightOrder, matched, selectedLeft } = matchState;
  document.getElementById("quizProgressFill").style.width =
    (matched.length / pairs.length) * 100 + "%";

  let html = `<div class="quiz-qnum">MATCH THE FOLLOWING — TAP A LEFT ITEM, THEN ITS MATCH ON THE RIGHT</div>`;
  html += `<div class="match-grid">`;
  html += `<div><div class="match-col-label">Column A</div>`;
  leftOrder.forEach((pi) => {
    const isMatched = matched.includes(pi);
    const isSelected = selectedLeft === pi;
    html += `<div class="match-item ${isMatched ? "matched-correct" : isSelected ? "selected" : ""}" data-left="${pi}">${esc(pairs[pi].left)}</div>`;
  });
  html += `</div>`;
  html += `<div><div class="match-col-label">Column B</div>`;
  rightOrder.forEach((pi) => {
    const isMatched = matched.includes(pi);
    html += `<div class="match-item ${isMatched ? "matched-correct" : ""}" data-right="${pi}">${esc(pairs[pi].right)}</div>`;
  });
  html += `</div></div>`;

  if (matched.length === pairs.length) {
    html += `<div class="quiz-result" style="padding-top:24px">
      <div class="quiz-result-label">🎉 All matched!</div>
      <button class="quiz-retry-btn" id="matchRetry">Retry</button>
    </div>`;
  }

  document.getElementById("quizBody").innerHTML = html;

  document.querySelectorAll(".match-item[data-left]").forEach((el) => {
    el.addEventListener("click", () => {
      const pi = parseInt(el.getAttribute("data-left"), 10);
      if (matchState.matched.includes(pi)) return;
      matchState.selectedLeft = pi;
      paintMatch();
    });
  });
  document.querySelectorAll(".match-item[data-right]").forEach((el) => {
    el.addEventListener("click", () => {
      const pi = parseInt(el.getAttribute("data-right"), 10);
      if (matchState.matched.includes(pi) || matchState.selectedLeft === null)
        return;
      if (matchState.selectedLeft === pi) {
        matchState.matched.push(pi);
        matchState.selectedLeft = null;
        paintMatch();
      } else {
        el.classList.add("matched-wrong-flash");
        setTimeout(() => {
          el.classList.remove("matched-wrong-flash");
        }, 400);
      }
    });
  });
  const retryBtn = document.getElementById("matchRetry");
  if (retryBtn) retryBtn.addEventListener("click", () => renderMatch(pairs));
}

// ╔══════════════════════════════════════════════════════════╗
// ║  MOBILE DRAWER                                            ║
// ╚══════════════════════════════════════════════════════════╝
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeDrawerBtn = document.getElementById("closeDrawer");

function openMobileDrawer() {
  sidebar.classList.add("open");
  overlay.classList.add("active");
}
function closeMobileDrawer() {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}

menuBtn.addEventListener("click", openMobileDrawer);
closeDrawerBtn.addEventListener("click", closeMobileDrawer);
overlay.addEventListener("click", closeMobileDrawer);

// ╔══════════════════════════════════════════════════════════╗
// ║  FULL-SCREEN READING MODE                                 ║
// ╚══════════════════════════════════════════════════════════╝
const appEl = document.querySelector(".app");
const readingModeBtn = document.getElementById("readingModeBtn");
const exitReadingBtn = document.getElementById("exitReadingBtn");

function enterReadingMode() {
  appEl.classList.add("reading-mode");
  closeMobileDrawer();
  // Best-effort true browser fullscreen; silently ignore if unsupported/blocked
  // (e.g. some mobile browsers or iframes disallow it) — the CSS-based
  // distraction-free layout above still applies either way.
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  document.querySelector(".notes-scroll").scrollTop = 0;
}

function exitReadingMode() {
  appEl.classList.remove("reading-mode");
  if (document.fullscreenElement) {
    document.exitFullscreen().catch(() => {});
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  }
}

readingModeBtn.addEventListener("click", enterReadingMode);
exitReadingBtn.addEventListener("click", exitReadingMode);

// Keep in sync if user exits browser fullscreen via Esc/back gesture directly
document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) appEl.classList.remove("reading-mode");
});

// Escape key also exits our CSS reading mode even without native fullscreen
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && appEl.classList.contains("reading-mode"))
    exitReadingMode();
});

// ╔══════════════════════════════════════════════════════════╗
// ║  INIT                                                     ║
// ╚══════════════════════════════════════════════════════════╝
// Clean up stale keys from older versions of this site (tree-expand
// state used to be saved; it no longer is, so remove any leftovers).
try {
  localStorage.removeItem("upsc-tree-expanded");
  localStorage.removeItem("upsc-tree-state");
} catch (err) {}

refreshTree();
renderSidebarNav();
renderNotes();
