// ╔══════════════════════════════════════════════════════════════════╗
// ║  TREE-ASSEMBLY.JS — Combines every DATA_* file into TREE_DATA       ║
// ║                                                                    ║
// ║  This file must be loaded LAST among the data/ files (see the      ║
// ║  <script> order in index.html) — it simply lists the top-level    ║
// ║  DATA_* variables that every other file has already defined.       ║
// ║                                                                    ║
// ║  You should never need to edit this file. Adding new content       ║
// ║  happens inside the individual subject/part/chapter files; this    ║
// ║  file just stitches the top-level sections together.               ║
// ╚══════════════════════════════════════════════════════════════════╝
const TREE_DATA = [
  DATA_syllabus,
  DATA_gs1,
  DATA_gs2,
  DATA_gs3,
  DATA_gs4,
  DATA_essay,
  DATA_newspaper,
  DATA_quickrecall,
];
