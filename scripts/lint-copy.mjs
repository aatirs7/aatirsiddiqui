#!/usr/bin/env node
/**
 * Repo guards from the build spec's acceptance criteria.
 *
 *  1. No em dash anywhere.
 *  2. No pure white or pure black in site chrome. Project identities and
 *     specimens are exempt, because a project's real palette is allowed to
 *     contain them and reproducing it accurately is the whole point of
 *     section 7.3. travld's mint on true black is the named example.
 *  3. No table elements in the markup.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const EM_DASH = String.fromCharCode(0x2014);
const ROOT = process.cwd();
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "out", ".vercel"]);
const TEXT = /\.(ts|tsx|js|jsx|mjs|cjs|css|md|json|svg|html)$/;

/* Files allowed to contain a pure white or pure black. */
const COLOR_EXEMPT = [
  join("content", "identities.ts"),
  join("components", "specimens") + sep,
  join("scripts", "lint-copy.mjs"),
];

const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (TEXT.test(entry)) files.push(full);
  }
})(ROOT);

const problems = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);

  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;

    if (line.includes(EM_DASH)) {
      problems.push(`${at}  em dash`);
    }

    const exempt = COLOR_EXEMPT.some((p) => rel.startsWith(p) || rel === p);
    if (!exempt) {
      const hit = line.match(/#(?:fff|ffffff|000|000000)\b/i);
      if (hit) problems.push(`${at}  pure ${hit[0]} in site chrome`);
    }

    if (/<\/?(table|thead|tbody|tr|td|th)[\s>]/i.test(line)) {
      problems.push(`${at}  table element`);
    }
  });
}

if (problems.length) {
  console.error(`lint-copy: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}

console.log(`lint-copy: clean across ${files.length} files`);
