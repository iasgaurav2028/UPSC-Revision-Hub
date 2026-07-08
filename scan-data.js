/**
 * scan-data.js
 * ─────────────────────────────────────────────────────────────
 * Shared utility used by both build-bundle.js (auto file ordering)
 * and validate.js (integrity checks). Not run directly.
 *
 * WHAT IT DOES:
 * Walks every .js file under js/data/, and for each file records:
 *   - which DATA_* / QUIZ_* constant(s) it DECLARES (via `const X = `)
 *   - which DATA_* / QUIZ_* constants it REFERENCES (anywhere in
 *     the file body, e.g. inside a `children: [...]` array)
 *
 * From this, build-bundle.js can topologically sort files so that
 * every file loads AFTER the files declaring what it references —
 * no more hand-maintained FILE_ORDER list.
 *
 * validate.js uses the same data to catch mistakes: a reference to
 * a variable nobody declares, a variable declared in two different
 * files, files not reachable from TREE_DATA/QUIZ_DATA, etc.
 */

const fs = require("fs");
const path = require("path");

/** Recursively list every .js file under a directory. */
function walkJsFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkJsFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".js")) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Scan js/data/ and return an array of file records:
 *   { path, relPath, declares: [names...], references: [names...] }
 */
function scanDataFiles(dataDir) {
  const files = walkJsFiles(dataDir);
  const records = [];

  for (const filePath of files) {
    const relPath = path
      .relative(path.dirname(dataDir), filePath)
      .split(path.sep)
      .join("/");
    const source = fs.readFileSync(filePath, "utf8");

    // Declarations: `const DATA_foo =` or `const QUIZ_foo =`
    const declares = [
      ...source.matchAll(/\bconst\s+((?:DATA|QUIZ)_\w+)\s*=/g),
    ].map((m) => m[1]);

    // All DATA_*/QUIZ_* identifiers mentioned anywhere in the file
    const allMentions = [...source.matchAll(/\b((?:DATA|QUIZ)_\w+)\b/g)].map(
      (m) => m[1],
    );

    // References = mentioned but not (in this file) the thing right after `const `
    // i.e. every mention minus the declaration occurrences themselves.
    const declareSet = new Set(declares);
    const mentionCounts = {};
    for (const name of allMentions)
      mentionCounts[name] = (mentionCounts[name] || 0) + 1;
    const references = Object.keys(mentionCounts).filter((name) => {
      // A name is a "reference" if it appears more times than it's declared,
      // OR it's mentioned but never declared in this file at all.
      const declaredHere = declareSet.has(name) ? 1 : 0;
      return mentionCounts[name] > declaredHere;
    });

    records.push({ path: filePath, relPath, declares, references });
  }

  return records;
}

/**
 * Topologically sort file records so every file appears after all
 * files declaring the variables it references. Throws a clear error
 * if a reference can't be resolved (typo, missing file) or if a
 * circular dependency exists.
 */
function topoSortFiles(records) {
  const declaredBy = {}; // varName -> relPath
  for (const r of records) {
    for (const name of r.declares) {
      if (declaredBy[name] && declaredBy[name] !== r.relPath) {
        throw new Error(
          `Duplicate declaration: "${name}" is declared in both ${declaredBy[name]} and ${r.relPath}`,
        );
      }
      declaredBy[name] = r.relPath;
    }
  }

  const byPath = {};
  for (const r of records) byPath[r.relPath] = r;

  const visited = {}; // relPath -> "visiting" | "done"
  const order = [];

  function visit(relPath, chain) {
    if (visited[relPath] === "done") return;
    if (visited[relPath] === "visiting") {
      throw new Error(
        `Circular dependency detected: ${chain.concat(relPath).join(" -> ")}`,
      );
    }
    visited[relPath] = "visiting";
    const record = byPath[relPath];
    for (const refName of record.references) {
      const depPath = declaredBy[refName];
      if (!depPath) {
        throw new Error(
          `Unresolved reference: "${refName}" is used in ${relPath} but no file declares it.\n` +
            `  (Check for a typo, or a missing/not-yet-created file.)`,
        );
      }
      if (depPath !== relPath) visit(depPath, chain.concat(relPath));
    }
    visited[relPath] = "done";
    order.push(relPath);
  }

  // Visit in a stable order (alphabetical by path) so output is deterministic
  const sortedPaths = records.map((r) => r.relPath).sort();
  for (const p of sortedPaths) visit(p, []);

  return order.map((relPath) => byPath[relPath]);
}

module.exports = { walkJsFiles, scanDataFiles, topoSortFiles };
