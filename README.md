# aatirsiddiqui

An index of everything Aatir Siddiqui has built: iOS apps, web apps,
internal tools, and ventures. Live at
[aatirsiddiqui.vercel.app](https://aatirsiddiqui.vercel.app).

Next.js App Router, TypeScript, Tailwind 4, deployed on Vercel. No
database, no CMS, no auth. All content is a typed data file validated by
Zod at import time.

## Running it

```
npm install
npm run dev          # http://localhost:3000
npm run lint:copy    # repo guards
npm run check        # guards, lint, typecheck, build
```

## How it is organised

| Path | What lives there |
|---|---|
| `content/projects.ts` | One entry per product. Zod-validated on import. |
| `content/identities.ts` | Each project's real design tokens, ported by value from its own repo. The source file is named above every entry. |
| `components/specimens/` | Real pieces of a project's interface, rebuilt here in its own design language. |
| `components/Vitrine.tsx` | The container every specimen mounts inside. |
| `INVENTORY.md` | Every scanned repo and the decision made about it. |
| `scripts/lint-copy.mjs` | The repo guards. |

## The rules this repo enforces

`npm run lint:copy` fails the build on any of these:

- an em dash anywhere, in code, copy, or comments
- a pure white or pure black in the site chrome (`content/identities.ts`
  and `components/specimens/` are exempt, because a project's real palette
  is reproduced there verbatim, travld's mint on black included)
- a table element

The Zod schema in `lib/schema.ts` enforces the visibility policy
structurally rather than by convention: a project that is not `public`
cannot carry a link, a screenshot, a specimen, or a featured flag, and
`/work/[slug]` generates pages for `public` entries only. A mistake there
fails the build instead of shipping.

## Specimens

Each public project gets one or two working pieces of its own interface
rebuilt in this codebase, running in its own palette, type, and motion, so
the page moves through a series of distinct visual worlds while the site's
own chrome stays neutral.

A specimen mounts inside `.vitrine[data-project="<slug>"]`, which sets that
project's tokens as `--p-*` custom properties. Specimen CSS is a CSS Module
that reads only `--p-*` and never a site token. The wrapper sets
`isolation: isolate`, `contain: layout paint`, and `overflow: hidden`.

Specimens load through `next/dynamic` with `ssr: false`, mount on
intersection with a 200px root margin, reset when scrolled out and back,
make no network requests, and hold all data as a local fixture. The
project's fallback sits underneath as the backdrop, so the frame is never
empty and never changes size.

Built so far: Ilmy. The rest are listed in the build spec's Appendix B.
