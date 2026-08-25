# aatirsiddiqui

Portfolio site. Next.js App Router, TypeScript, Tailwind 4, deployed on Vercel.
Built to the spec in `portfolio-site-spec.md`.

## Hard rules, enforced by `npm run lint:copy`

- No em dashes anywhere: code, copy, comments, commit messages. Use a comma,
  a colon, or a period.
- No pure white and no pure black in the site chrome. Use the tokens in
  `app/globals.css`. `content/identities.ts` and `components/specimens/` are
  exempt, because a project's real palette is reproduced verbatim there.
- No table elements. Center alignment is the default.

## Layout

- `content/projects.ts`   one entry per product, validated by Zod on import.
- `content/identities.ts` each project's real design tokens, ported by value
                          from its own repo. The source path is commented
                          above every entry.
- `components/specimens/` real pieces of each project's UI, rebuilt here.
                          CSS Modules reading only `--p-*`. No network calls,
                          no persistence, all data is a local fixture.
- `INVENTORY.md`          every scanned repo and the decision made about it.

## Visibility

`public` gets a detail page, links, and specimens. `listed` gets a spine card
and a palette plate, and must never carry a link, a screenshot, or a detail
page. `hidden` is not on the site at all. The Zod schema in `lib/schema.ts`
enforces this structurally, so a mistake fails the build rather than shipping.
