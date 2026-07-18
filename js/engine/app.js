// ╔══════════════════════════════════════════════════════════════════╗
// ║  ENGINE-APP.JS — Final wiring: DOM refs, mobile drawer, reading    ║
// ║  mode, and the app's init calls                                    ║
// ║                                                                    ║
// ║  Loaded LAST — depends on every other engine module being defined  ║
// ║  already. Grabs the top-level DOM element references, wires up     ║
// ║  the mobile drawer and full-screen reading mode toggles, and       ║
// ║  finally calls refreshTree() + renderNotes() to paint the first    ║
// ║  screen.                                                           ║
// ╚══════════════════════════════════════════════════════════════════╝

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
// ║  BROWSER HISTORY (Back/Forward between viewed notes)      ║
// ║                                                            ║
// ║  This is a single-page app; without this, the browser's    ║
// ║  Back button (or Android back gesture) would leave the     ║
// ║  site. We push a history entry whenever the main panel     ║
// ║  view changes — opening a note, or switching to the        ║
// ║  dashboard / timeline / browse — so Back returns to the    ║
// ║  previously viewed note instead of closing the site.       ║
// ║  pushState is called WITHOUT a URL change, so this also     ║
// ║  works when index.html is opened directly from disk.       ║
// ╚══════════════════════════════════════════════════════════╝
let __suppressHistory = false; // true while restoring a state (avoid re-push)

function currentViewState() {
  if (selectedId) return { view: "note", id: selectedId };
  if (sidebarView === "timeline") return { view: "timeline" };
  if (sidebarView === "browse") return { view: "browse" };
  return { view: "dashboard" };
}

function sameView(a, b) {
  return !!a && !!b && a.view === b.view && a.id === b.id;
}

// Record the current view as a new browser-history entry (skipped while
// we're restoring a state, and de-duplicated against the current entry).
function pushHistory() {
  if (__suppressHistory) return;
  const s = currentViewState();
  if (sameView(history.state, s)) return;
  try {
    history.pushState(s, "");
  } catch (err) {
    /* pushState blocked in rare sandboxed contexts — safe to ignore */
  }
}

// Restore a view from a history entry (on Back/Forward) WITHOUT pushing a
// new entry.
function applyViewState(state) {
  __suppressHistory = true;
  try {
    const s = state || { view: "dashboard" };
    if (s.view === "note" && s.id) {
      if (sidebarView !== "tree") {
        sidebarView = "tree";
        renderSidebarNav();
      }
      selectAndReveal(s.id);
    } else if (s.view === "timeline") {
      sidebarView = "timeline";
      renderSidebarNav();
      switchSidebarView();
    } else if (s.view === "browse") {
      sidebarView = "browse";
      renderSidebarNav();
      switchSidebarView();
    } else {
      if (sidebarView !== "tree") {
        sidebarView = "tree";
        renderSidebarNav();
      }
      selectedId = null;
      refreshTree();
      renderNotes();
    }
  } finally {
    __suppressHistory = false;
  }
}

window.addEventListener("popstate", (e) => {
  applyViewState(e.state);
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

// Seed the initial history entry (the dashboard) so the first Back press
// returns here rather than immediately leaving the site.
history.replaceState(currentViewState(), "");
