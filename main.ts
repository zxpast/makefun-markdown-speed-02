// Harness driver: turn the graded case list into the HTML list.
//
// The grader mounts the case set at /input/cases.json (a JSON array of
// { id, markdown }) and expects /output/html.json to hold a JSON array of
// the rendered HTML strings, one per case, in the same order. Each case is
// rendered on its own through parse() from ./parse.js — nothing is shared
// or remembered between cases. When run outside the grader, the two
// directories can be overridden with MAKEFUN_INPUT_DIR and
// MAKEFUN_OUTPUT_DIR. Runs on Node 22 type stripping, so this file uses
// erasable TypeScript syntax only (no enums, namespaces, or parameter
// properties).

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(inputDir, 'cases.json'), 'utf8'));
const rendered = [];
for (const c of cases) {
  rendered.push(parse(c.markdown));
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'html.json'), JSON.stringify(rendered));
