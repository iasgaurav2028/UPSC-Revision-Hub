// ╔══════════════════════════════════════════════════════════════════╗
// ║  ENGINE-TREE.JS — Sidebar: tree rendering & navigation views        ║
// ║                                                                    ║
// ║  Depends on engine-core.js (state, findNode, esc, colors).         ║
// ║  Contains: the nested tree renderer, sidebar nav tabs (Tree/       ║
// ║  Browse/Bookmarks/Favourites/Recent/History/Tracker/Timeline),     ║
// ║  and the list renderers for bookmarks/favourites/recents/history/  ║
// ║  tracker. Also the mobile drawer's tree-related handlers.          ║
// ╚══════════════════════════════════════════════════════════════════╝

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
    pushHistory();
    return;
  }
  if (sidebarView === "browse") {
    container.innerHTML = `<div class="side-list-empty">🗂 Browse view opened in the main panel.<br>Switch between Cards, List, and Grid layouts there.</div>`;
    selectedId = null;
    renderBrowseAllView();
    closeMobileDrawer();
    pushHistory();
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
        pushHistory();
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
  pushHistory();
}

// ╔══════════════════════════════════════════════════════════╗
// ║  NOTES / DASHBOARD RENDERING                              ║
// ╚══════════════════════════════════════════════════════════╝
