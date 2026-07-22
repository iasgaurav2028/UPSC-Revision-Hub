// ╔══════════════════════════════════════════════════════════════════╗
// ║  ENGINE-NOTES.JS — Main panel: dashboard, timeline, browse, notes   ║
// ║                                                                    ║
// ║  Depends on engine-core.js. Contains: the home Dashboard cards,    ║
// ║  the static Syllabus overview panel, the interactive Timeline      ║
// ║  visualization, the Browse view (Cards/List/Grid), and the two     ║
// ║  note renderers — renderStandardNote (Laxmikanth-style) and        ║
// ║  renderNewsArticleNote (dated newspaper clippings).                ║
// ╚══════════════════════════════════════════════════════════════════╝

const CIRCLED = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];
const DASH_ICONS = { gs1: "🏛", gs2: "⚖", gs3: "📊", gs4: "🧭", essay: "✍" };

// Toggle the dashboard background image on the main panel. Only the
// dashboard uses it; note/timeline/browse views keep the plain background.
function setDashboardBg(on) {
  const mainEl = document.querySelector(".main");
  if (mainEl) mainEl.classList.toggle("has-dash-bg", on);
}

function renderDashboard() {
  document.getElementById("topbarTitle").textContent = "Dashboard";
  setDashboardBg(true);
  let html = `
    <div class="dash-hero">
      <div class="dash-hero-target" aria-hidden="true"></div>
      <div class="dash-hero-content">
        <div class="dash-hero-eyebrow">🎯 Civil Services Examination</div>
        <div class="dash-hero-title">UPSC Target 2028</div>
        <div class="dash-hero-sub">Master Notes &nbsp;·&nbsp; Complete Syllabus &nbsp;·&nbsp; Prelims + Mains</div>
        <div class="dash-hero-tags">
          <span>Integrity</span><span>Honesty</span><span>Justice</span><span>Empathy</span><span>Courage</span><span>Objectivity</span>
        </div>
        <div class="dash-hero-tricolour" aria-hidden="true"></div>
      </div>
    </div>
    <div class="dash-grid">`;
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
  setDashboardBg(false);
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
  setDashboardBg(false);
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
  setDashboardBg(false); // re-enabled by renderDashboard() below if needed
  if (selectedId === "syllabus") {
    renderSyllabusOverview();
    hideNoteNavBar();
    return;
  }
  if (!selectedId) {
    renderDashboard();
    hideNoteNavBar();
    return;
  }

  const node = findNode(TREE_DATA, selectedId);

  // Lazy content loading: the bundled TREE_DATA is a skeleton (no note
  // bodies). A leaf marked `hasNotes` gets its `notes` filled in from
  // NOTES_STORE once its subject's content chunk has loaded. If it isn't
  // loaded yet, show a brief loading state, fetch the chunk, then re-render.
  if (node && node.hasNotes && !node.notes) {
    if (NOTES_STORE[node.id]) {
      node.notes = NOTES_STORE[node.id];
    } else {
      renderNoteLoading(node);
      hideNoteNavBar();
      ensureChunkLoaded(node.chunk, function () {
        if (NOTES_STORE[node.id]) node.notes = NOTES_STORE[node.id];
        if (selectedId === node.id) renderNotes();
      });
      return;
    }
  }

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
    hideNoteNavBar();
    return;
  }

  if (node.notes.newsType) {
    trackNoteOpen(node);
    renderNewsArticleNote(node);
    updateNoteNavBar(node);
    return;
  }
  trackNoteOpen(node);
  renderStandardNote(node);
  updateNoteNavBar(node);
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

  // Location header derived automatically from the tree (see buildNoteCrumb):
  //   eyebrow = full path breadcrumb (paper › … › group)
  //   source  = subject name (Polity/Geography/…), replacing old "Laxmikanth"
  const crumbInfo = buildNoteCrumb(node.id);
  const subjectLabel = n.source || crumbInfo.subject || "Notes";

  let html = "";
  html += `<div class="note-header"><div class="note-title-row"><div>`;
  html += `<div class="note-eyebrow">${esc(crumbInfo.crumb)}</div>`;
  html += `<div class="note-title-line">
    <div class="note-title">${esc(node.title)}</div>
    <button class="icon-toggle-btn bookmark-toggle ${isBookmarked ? "active" : ""}" id="bookmarkBtn" title="Bookmark this note">${isBookmarked ? "🔖" : "📑"}</button>
    <button class="icon-toggle-btn favourite-toggle ${isFavourited ? "active" : ""}" id="favouriteBtn" title="Favourite this topic">${isFavourited ? "⭐" : "☆"}</button>
  </div>`;
  html += `<div class="note-source">${esc(subjectLabel)}${node.pageRef ? " &nbsp;·&nbsp; " + esc(node.pageRef) : ""}</div>`;
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

  // Header style depends on where this news-type note lives:
  //   • Under the top-level "newspaper" section → genuine daily clipping,
  //     keep the "📰 The Hindu · date · subject" eyebrow.
  //   • Embedded inside a subject (e.g. GS-3 › Economics › Budget) → use the
  //     same location breadcrumb as standard notes, with the subject shown
  //     below the heading.
  const crumbInfo = buildNoteCrumb(node.id);
  const chain = findAncestorChain(TREE_DATA, node.id);
  const isClipping = !!(chain && chain[0] && chain[0].id === "newspaper");

  let html = "";
  html += `<div class="note-header"><div class="note-title-row"><div>`;
  if (isClipping) {
    html += `<div class="note-eyebrow">📰 The Hindu &nbsp;·&nbsp; ${esc(n.date || "")} &nbsp;·&nbsp; ${esc(n.subject || "")}</div>`;
    html += `<div class="note-title">${esc(node.title)}</div>`;
    if (n.section)
      html += `<div class="note-source">Section: ${esc(n.section)}</div>`;
  } else {
    html += `<div class="note-eyebrow">${esc(crumbInfo.crumb)}</div>`;
    html += `<div class="note-title">${esc(node.title)}</div>`;
    const belowBits = [
      n.subject || crumbInfo.subject,
      n.date,
      n.section,
    ].filter(Boolean);
    html += `<div class="note-source">${esc(belowBits.join("  ·  "))}</div>`;
  }
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

// ╔══════════════════════════════════════════════════════════╗
// ║  NOTE PREV / NEXT — standalone floating buttons                ║
// ║                                                              ║
// ║  Two independent floating buttons (bottom-left / bottom-right) ║
// ║  for moving between leaf topics within the current "chapter"  ║
// ║  (see findChapterNode in core.js). No wrapping bar/box — each  ║
// ║  button shows/hides on its own. Works identically in normal   ║
// ║  and reading mode since both are fixed-position elements.     ║
// ╚══════════════════════════════════════════════════════════╝
function hideNoteNavBar() {
  const prevBtn = document.getElementById("noteNavPrevBtn");
  const nextBtn = document.getElementById("noteNavNextBtn");
  if (prevBtn) prevBtn.classList.remove("active");
  if (nextBtn) nextBtn.classList.remove("active");
}

function updateNoteNavBar(node) {
  const prevBtn = document.getElementById("noteNavPrevBtn");
  const nextBtn = document.getElementById("noteNavNextBtn");
  if (!prevBtn || !nextBtn || !node) return;

  const pos = getChapterPosition(node.id);
  if (!pos || pos.leaves.length <= 1) {
    // Nothing meaningful to navigate between (e.g. a lone topic) — hide both.
    hideNoteNavBar();
    return;
  }

  const { chapterNode, leaves, index } = pos;
  const isFirst = index === 0;
  const isLast = index === leaves.length - 1;

  // Previous button: icon stays a static ◀ — state is communicated via
  // disabled styling (greyed out, no hover) and the title tooltip,
  // rather than changing the glyph itself.
  prevBtn.classList.add("active");
  if (isFirst) {
    // At the first topic of this chapter: step back into the PREVIOUS
    // chapter's last topic (the mirror of how Next crosses forward). Only
    // disabled when there's no earlier chapter at all.
    const prevChapter = findPrevChapterNode(chapterNode);
    const prevChapterLeaves = prevChapter ? chapterLeaves(prevChapter) : [];
    if (prevChapterLeaves.length > 0) {
      const target = prevChapterLeaves[prevChapterLeaves.length - 1];
      prevBtn.disabled = false;
      prevBtn.title = "Previous chapter: " + prevChapter.title;
      prevBtn.onclick = () =>
        openPrevChapterConfirm(chapterNode, prevChapter, target);
    } else {
      prevBtn.disabled = true;
      prevBtn.title = "You're at the beginning";
      prevBtn.onclick = null;
    }
  } else {
    prevBtn.disabled = false;
    prevBtn.title = "Previous topic";
    prevBtn.onclick = () => selectAndReveal(leaves[index - 1].id);
  }

  // Next button: always enabled while there's a chapter to move
  // through. On the last topic, the icon switches to 🎉 as a visual
  // cue, and clicking it opens the chapter-complete celebration
  // instead of moving to a (nonexistent) next topic.
  nextBtn.classList.add("active");
  nextBtn.disabled = false;
  if (isLast) {
    nextBtn.textContent = "🎉";
    nextBtn.title = "Finish chapter";
    nextBtn.onclick = () => openChapterCompleteCelebration(chapterNode);
  } else {
    nextBtn.textContent = "▶";
    nextBtn.title = "Next topic";
    nextBtn.onclick = () => selectAndReveal(leaves[index + 1].id);
  }
}

function openChapterCompleteCelebration(chapterNode) {
  const overlay = document.getElementById("chapterCompleteOverlay");
  const title = document.getElementById("chapterCompleteTitle");
  const sub = document.getElementById("chapterCompleteSub");
  const hurrahBtn = document.getElementById("chapterCompleteHurrahBtn");

  const nextChapter = findNextChapterNode(chapterNode);

  title.textContent = "Congratulations! 🎉";
  if (nextChapter) {
    sub.innerHTML = `You've completed every topic in <strong>${esc(chapterNode.title)}</strong>.<br>Ready to move on to <strong>${esc(nextChapter.title)}</strong>?`;
    hurrahBtn.style.display = "block";
    hurrahBtn.textContent = "Hurrah! Start Next Chapter 🎉";
    hurrahBtn.onclick = () => {
      const nextLeaves = chapterLeaves(nextChapter);
      overlay.classList.remove("active");
      if (nextLeaves.length > 0) selectAndReveal(nextLeaves[0].id);
    };
  } else {
    sub.innerHTML = `You've completed every topic in <strong>${esc(chapterNode.title)}</strong>.<br>More chapters will appear here as they're added.`;
    hurrahBtn.style.display = "none";
  }

  overlay.classList.add("active");
}

document
  .getElementById("chapterCompleteCloseBtn")
  .addEventListener("click", () => {
    document
      .getElementById("chapterCompleteOverlay")
      .classList.remove("active");
  });
document
  .getElementById("chapterCompleteOverlay")
  .addEventListener("click", (e) => {
    if (e.target.id === "chapterCompleteOverlay") {
      document
        .getElementById("chapterCompleteOverlay")
        .classList.remove("active");
    }
  });

// ╔══════════════════════════════════════════════════════════╗
// ║  PREVIOUS-CHAPTER CONFIRM                                  ║
// ║  Neutral counterpart to the forward celebration: shown     ║
// ║  when ◀ is pressed on a chapter's first topic and there's  ║
// ║  an earlier chapter to step back into. Confirming lands on ║
// ║  that previous chapter's LAST topic (keeps prev/next a      ║
// ║  continuous, reversible sequence).                          ║
// ╚══════════════════════════════════════════════════════════╝
function openPrevChapterConfirm(currentChapter, prevChapter, targetLeaf) {
  const overlay = document.getElementById("prevChapterOverlay");
  const sub = document.getElementById("prevChapterSub");
  const goBtn = document.getElementById("prevChapterGoBtn");
  if (!overlay || !sub || !goBtn) return;

  sub.innerHTML = `This takes you back to <strong>${esc(prevChapter.title)}</strong>${
    prevChapter.subtitle ? " — " + esc(prevChapter.subtitle) : ""
  }, opening its last topic <strong>${esc(targetLeaf.title)}</strong>.`;

  goBtn.onclick = () => {
    overlay.classList.remove("active");
    selectAndReveal(targetLeaf.id);
  };

  overlay.classList.add("active");
}

document.getElementById("prevChapterCloseBtn").addEventListener("click", () => {
  document.getElementById("prevChapterOverlay").classList.remove("active");
});
document.getElementById("prevChapterOverlay").addEventListener("click", (e) => {
  if (e.target.id === "prevChapterOverlay") {
    document.getElementById("prevChapterOverlay").classList.remove("active");
  }
});
