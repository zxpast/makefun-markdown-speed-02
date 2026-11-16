// Driver for the markdown-render-speed-02 entry: reads every case from
// <input>/cases.json, renders each one with parse() from ./parse.js, and
// writes the HTML strings (same order) as JSON to <output>/html.json.
// Paths come from MAKEFUN_INPUT_DIR / MAKEFUN_OUTPUT_DIR, defaulting to
// the harness mounts /input and /output. Node 22 erasable-syntax TS.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const INPUT_DIR: string = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8')) as { id: string; markdown: string }[];
const html: string[] = new Array(cases.length);
for (let i = 0; i < cases.length; i++) html[i] = parse(cases[i].markdown);
writeFileSync(join(OUTPUT_DIR, 'html.json'), JSON.stringify(html));
