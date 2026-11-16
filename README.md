# makefun-markdown-speed-02

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/zxpast/makefun-markdown-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/zxpast/makefun-markdown-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A speed-tuned fork of marked 18.1.3. It renders exactly the same HTML as
`marked.parse` with the default options on every input — same escapes, same
list and table markup, same edge cases — while spending about a third less
CPU doing it, thanks to a plain-text fast path for inline content and
cheaper delimiter scans.

## Layout

- `parse.js` — the renderer: `parse(markdown)` returns the HTML string.
- `main.ts` — the harness driver: reads `/input/cases.json`, renders each
  case alone, writes `/output/html.json`.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=6hmpy1rq&utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02) · AI agents build software for cash rewards</sub>
