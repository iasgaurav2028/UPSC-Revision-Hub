// ╔══════════════════════════════════════════════════════════════════╗
// ║  ENGINE-LOADER.JS — Lazy content loading (per-subject chunks)       ║
// ║                                                                    ║
// ║  Loaded SECOND (right after core.js). The bundle only ships a       ║
// ║  lightweight TREE_DATA "skeleton" — every node's structure          ║
// ║  (id/title/icon/hierarchy) but NOT its heavy `notes` body. The      ║
// ║  actual notes + quizzes live in files under js/content/ that        ║
// ║  MIRROR the js/data/ notes folder structure (e.g. js/content/       ║
// ║  gs2/polity/laxmikanth/part1/ch2/constituent-assembly-working.js).  ║
// ║  Each node's `chunk` field is that file's path (minus js/content/   ║
// ║  and .js); the file is fetched on demand the first time one of its  ║
// ║  topics is opened.                                                  ║
// ║                                                                    ║
// ║  Chunks are loaded by injecting a <script> tag (NOT fetch()) so     ║
// ║  the site keeps working when index.html is opened directly from     ║
// ║  disk (file://), where fetch/XHR are blocked by the browser.        ║
// ║                                                                    ║
// ║  Each chunk file is a single call:                                  ║
// ║     __registerContent("<mirror/path>", { notes:{...}, quizzes:{} });║
// ╚══════════════════════════════════════════════════════════════════╝

// leafId -> notes object (populated lazily as chunks load)
const NOTES_STORE = {};
// topicId -> quiz object (populated lazily as chunks load)
const QUIZ_DATA = {};

// chunkId -> true once its content file has loaded & registered
const __loadedChunks = {};
// chunkId -> [callbacks] waiting for that chunk to finish loading
const __loadingChunks = {};

// Called by each js/content/<chunk>.js file when it loads. Merges that
// subject's notes + quizzes into the in-memory stores and fires any
// callbacks that were waiting on this chunk.
function __registerContent(chunkId, payload) {
  if (payload && payload.notes) Object.assign(NOTES_STORE, payload.notes);
  if (payload && payload.quizzes) Object.assign(QUIZ_DATA, payload.quizzes);
  __loadedChunks[chunkId] = true;
  const waiting = __loadingChunks[chunkId] || [];
  delete __loadingChunks[chunkId];
  waiting.forEach((fn) => {
    try {
      fn();
    } catch (err) {
      /* ignore individual callback errors */
    }
  });
}

// Ensure a subject's content chunk is loaded, then run cb(). If the
// chunk is already loaded, cb() runs synchronously. Concurrent requests
// for the same chunk share a single <script> injection.
function ensureChunkLoaded(chunkId, cb) {
  if (!chunkId || __loadedChunks[chunkId]) {
    cb();
    return;
  }
  if (__loadingChunks[chunkId]) {
    __loadingChunks[chunkId].push(cb);
    return;
  }
  __loadingChunks[chunkId] = [cb];

  const script = document.createElement("script");
  // Path is relative to index.html (the document), NOT to bundle.js.
  script.src = "js/content/" + chunkId + ".js";
  script.async = false;
  script.onload = function () {
    // Normally __registerContent (called from inside the chunk) already
    // fired the callbacks. This is a safety net in case a chunk file
    // loaded but didn't register (e.g. empty/renamed) — don't hang.
    if (!__loadedChunks[chunkId]) {
      __loadedChunks[chunkId] = true;
      const waiting = __loadingChunks[chunkId] || [];
      delete __loadingChunks[chunkId];
      waiting.forEach((fn) => {
        try {
          fn();
        } catch (err) {}
      });
    }
  };
  script.onerror = function () {
    // Failed to load (missing file, offline). Fire callbacks anyway so
    // the note renderer can fall back to its "notes not added" state
    // instead of leaving the user on a permanent loading spinner.
    console.error("Failed to load content chunk:", chunkId);
    const waiting = __loadingChunks[chunkId] || [];
    delete __loadingChunks[chunkId];
    waiting.forEach((fn) => {
      try {
        fn();
      } catch (err) {}
    });
  };
  document.head.appendChild(script);
}

// Lightweight placeholder shown while a topic's content chunk loads.
// (In practice this flashes only on the very first open of each subject;
// once cached, subsequent opens render instantly.)
function renderNoteLoading(node) {
  const topbarTitle = document.getElementById("topbarTitle");
  if (topbarTitle) topbarTitle.textContent = node ? node.title : "Loading";
  const container = document.getElementById("notesContent");
  if (container) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⏳</div>
        <div class="empty-title">Loading…</div>
        <div class="empty-desc">Fetching notes for ${esc(node ? node.title : "this topic")}</div>
      </div>`;
  }
}
