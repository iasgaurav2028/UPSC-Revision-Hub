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
