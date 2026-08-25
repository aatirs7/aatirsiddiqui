# Inventory

Every repository and deployment found by the scan, with the decision made
about it. Sources: 54 GitHub repos on `aatirs7`, 40 Vercel projects under
`aatir-siddiquis-projects`, and a filesystem scan of `C:\Users\aatir`.

Scanned 2026-08-25. The seed inventory in the build spec is authoritative
for naming, positioning, and visibility. The scan is authoritative for
dates, links, and live status.

---

## Included

Twenty-one entries in `content/projects.ts`. Nine `public`, twelve `listed`.

### public

| Project | Repos merged | Live check | Decision |
|---|---|---|---|
| Ilmy | `ILMY` + `ILMYIOS` | `ilmy.dev` 200 | One product, web and iOS. Both repos are private, so neither is linked. |
| Drift | `drift` | repo public | Seven local `drift-*` directories are branches of one repo, not separate apps. Canonical: `C:\Users\aatir\drift`. |
| Durus | `Durus` + `DurusIOS` | `durus.space` 200 | Web repo is the reference implementation and is being retired. `DurusIOS` default branch is empty; code is local only. |
| Cobalt | `cobalt` | no deployment | Repo is 0 bytes, code is local only, so no repo link. |
| Parrot | `parrot` | no deployment | Repo is 0 bytes, code is local only, so no repo link. |
| Elysium Intern | `elysiumintern` | `elysiumintern.com` 200 | Private repo, so site link only. |
| CyberCourse | `cybercourse` | `cybercourse-lyart.vercel.app` 200 | Private repo, so site link only. |
| Elysium Cyber | `elysiumcyberv2` | `elysiumcyber.com` 200 | Not in the seed inventory. Added as `public` at Aatir's direction. |
| Elysium Builds | `elysiumbuilds` | `elysiumbuilds.dev` 200 | Resolves the seed inventory's "Elysium Hub" row, see below. Added as `public` at Aatir's direction. |

### listed

Name, category, status, tagline, and a palette plate. No links, no
screenshots, no detail page. Enforced by the Zod schema, not by convention.

| Project | Repo | Reason for listed |
|---|---|---|
| Siddiqui Family Tree | `SiddiquiFamilyTree` | Family genealogy. |
| ElysiumHealth | `elysiumhealth` | Personal health data. |
| ElysiumVault | `elysiumvault` | Personal financial data, Plaid. |
| Vega | `empty` | Personal trading system. |
| RepFeed | `fashionreps` | Private two-person app. |
| WanderFund | none | Specced, never built. |
| travld | `travld` | Shelved, replaced by Drift. |
| ElysiumHome | `elysiumhome` | Shelved, reads live from four other project databases. |
| Meridian | `meridian` | Not in the seed inventory. Two-person accountability app, added at Aatir's direction. Defaulted to `listed` per the spec rule for new finds. |
| cheapseat.lol | `bidclone` | Not in the seed inventory. Added at Aatir's direction, defaulted to `listed`. Candidate to promote to `public`. |
| EPL Fantasy Draft | `fantasypremierleague` | Not in the seed inventory. Added at Aatir's direction, defaulted to `listed`. Candidate to promote to `public`. |
| wc26 | `wc26` (+ `wc26-general` merged) | Not in the seed inventory and not named in the exclusion list, so kept. Defaulted to `listed`. |

---

## Hidden

Present in `content/projects.ts` as a commented block with the reason, so
the decision is not re-litigated. Not on the site in any form. Verified
absent from the build output.

| Project | Repo | Reason |
|---|---|---|
| Sehat | `sehat` | Private family health records. Note: `sehat.dev` returns 200 and serves a real app, although the repo is empty and the seed inventory says Specced. Worth confirming what is deployed there. |
| ShahmirCRM | `sharjeelcrm` | Client business, not Aatir's to display. |
| ACCSHOP | `accshop` | Same client, same reason. |
| Phir Milengey Hum | `phirmilingay` | Private personal gift site. |
| MentorReach | `trajectorycoaching` | Dropped at Aatir's direction. See the note below: this is a complete product, not an empty repo. |
| Systems 10 | `systems10` | Dropped at Aatir's direction. |

---

## Excluded

### Merged into another entry

| Repo | Merged into |
|---|---|
| `ILMYIOS` | Ilmy |
| `DurusIOS` | Durus |
| `drift-site`, `drift-companion`, `drift-v3-ui`, `drift-v3-api`, `drift-planner-ui`, `drift-planner-api` | Drift. All are branches of the `drift` repo, not separate apps. |
| `vega` | Vega. This repo is a 0-byte placeholder; the real code is in the repo named `empty`. |
| `wc26-general` | wc26. Near-identical port of the same product for a different audience. |
| `systems10-1` | Systems 10 duplicate checkout. |
| `elysiumse7en` (local dir) | ElysiumHome. Directory name does not match the product. |

### Superseded or abandoned

| Repo | Reason |
|---|---|
| `ElysiumCyber` | Clone of the Stackbit "Content Ops Starter" template, superseded by `elysiumcyberv2`. |
| `projectarkham`, `projectarkhamv2`, `arkhamprotocol` | Abandoned lineage, excluded at Aatir's direction. |
| `UltraSe7en`, `ultra-se7en-qbry` | Abandoned static prototype. |
| `ElysiumVentures` | Seven-file static holding page. |
| `ASIDsolutions` | Old static one-pager. |
| `accountselller` | Static precursor to ACCSHOP. |
| `elysiumcyberv2` predecessor `elysium-cyber` (Vercel) | Duplicate deployment of the same domain. |

### One-off, personal, or scratch

| Repo | Reason |
|---|---|
| `Peru-Bolivia-2026` | Personal trip PWA. Excluded at Aatir's direction. |
| `stupidnotes4u` | Personal artistic project. Excluded at Aatir's direction. |
| `ibmbrain` | Internal work-related knowledge app. Excluded at Aatir's direction. |
| `timer`, `aatirtimer`, `apollo`, `codextest`, `ansibletest`, `remote`, `empty` (as a name) | Scratch repos, a few files each. |
| `aatirsiddiqui` | This repo. |

### Archival, school and internship

Excluded at Aatir's direction: `VCUPoetryWebsite`, `Jira-Ticket-Management`,
`AWS-Key-Rotation-Script`, `Cover-Letter-Generator`,
`CMSC-Assignment-2-Rest`, `Vesta-Cyber-Solutions-Internship-2021`.

### Third-party code, not Aatir's

| Directory | Upstream |
|---|---|
| `C:\Users\aatir\blackbird` | `p1ngul1n0/blackbird` |
| `C:\Users\aatir\shannon` | `KeygraphHQ/shannon` |
| `astro-platform-starter` | Netlify's official Astro starter, cloned verbatim |

### Does not exist

`dethrone` and `aatirtimer` both 404 on GitHub. `dethrone` is only the name
of a spec file inside `bidclone`.

---

## Notes and open items

**Directory names that do not match the product.** Recorded so this is not
rediscovered on the next scan.

| Directory or repo | Actual product |
|---|---|
| `trajectorycoaching` | MentorReach |
| `elysiumse7en` | ElysiumHome |
| `fashionreps` | RepFeed |
| `empty` | Vega |

**Elysium Hub does not exist as its own project.** The seed inventory
describes it as an "internal client ops and billing dashboard". The
`elysiumbuilds` spec describes itself as an "internal operations hub for a
portfolio of client websites, plus a public per-client portal for change
requests and billing visibility". Same thing, already built and live. The
Elysium Hub row is therefore satisfied by the Elysium Builds entry rather
than tracked separately.

**MentorReach is a complete product, not a stub.** Dropped at Aatir's
direction, recorded here because the reason matters if the decision is
revisited: `package.json` names it `mentorreach`, there is a full spec at
`docs/mentorreach-platform-spec.md`, and it has a native scheduler, Stripe
Connect commission attribution, and recent commits on legal documents and
dispute clauses. It has no Vercel project, so it is not live, and the seed
inventory's `Live` status for it was not accurate.

**Three deployments are broken.** None of them ships a link, because all
three projects are `listed` and `listed` entries carry no links at all.

| URL | Status |
|---|---|
| `elysiumhealth.vercel.app` | 404 at the root route |
| `elysiumvault.vercel.app` | 404 at the root route |
| `elysiumhome.dev` | 401, body is `Unauthorized` |

Three more redirect to their own app login, which is correct behaviour and
not a dead link: `vega-gamma-tawny.vercel.app`, `siddiquifamilytree.com`,
`shahmircrm.vercel.app`.

**Two deviations from the acceptance criteria**, both deliberate.

1. *WanderFund has no palette plate.* The criteria say every `listed`
   project has one. WanderFund was never built: no repo, no code, no tokens
   anywhere on disk. Inventing a palette would be fabrication, so it ships
   as a `listed` entry with no plate.
2. *RepFeed has no start year.* Its working tree has zero commits, so no
   date is derivable. The field is omitted rather than guessed.

**Font substitutions.** The eight-family budget forced four. Each is
recorded in that project's `identity.note` and shown on its plate as
"set in a stand-in", so the page never silently misrepresents a typeface.
Satoshi (Durus) is licensed and cannot be redistributed, so it falls back to
Inter. IBM Plex Mono and JetBrains Mono fall back to Geist Mono. Noto Naskh
Arabic falls back to Amiri. Noto Nastaliq Urdu is dropped.

**Two things worth acting on, outside this site.**

1. The public repo named `empty` is Vega. It exposes `STRATEGY.md` and
   `SNIPERBOT-PLAYBOOK.md`, which describe a live trading strategy and name
   a third party.
2. `vega`, `parrot`, `cobalt`, `sehat`, `fashionreps`, `ibmbrain`, and
   `DurusIOS` are 0-byte repos. The only copy of that code is on one laptop.
