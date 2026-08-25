import { projectsSchema, type Project } from "@/lib/schema";
import { identities } from "./identities";

/**
 * One entry per product, not per repo. Dates and links come from the
 * GitHub, Vercel, and filesystem scan recorded in INVENTORY.md.
 *
 * Repo links point only at repositories that are public AND have code on
 * their default branch. Most of these repos are private or empty, and a
 * link a visitor cannot open is worse than no link at all.
 *
 * Hidden projects live at the bottom of this file as a commented block so
 * the decision is not re-litigated on the next build.
 */
const rows: Project[] = [
  {
    slug: "ilmy",
    name: "Ilmy",
    tagline: "Islamic learning app with structured tracks and daily lessons",
    description:
      "Ilmy teaches the Names of Allah, the prophets, Quran basics, and daily duas through short lessons built from teaching cards followed by questions. It is built for two kinds of learner at once: children working through a track for the first time, and adults refreshing what they learned as kids without the app feeling childish.",
    category: "iOS",
    status: "App Store",
    visibility: "public",
    year: 2026,
    updated: "2026-08-24",
    stack: ["Expo", "React Native", "Clerk", "Neon Postgres", "RevenueCat"],
    links: {
      site: "https://ilmy.dev",
    },
    highlights: [
      "Lessons run as a mixed stream of intro, learn, and question items, submitted as one batch",
      "Checkpoint lessons gate each track, with a final test at the end",
      "Musabaqa runs head to head matches between friends",
    ],
    identity: identities.ilmy,
    specimens: [
      {
        id: "lesson-flow",
        label: "Lesson card, 3 learn screens then a question",
        frame: "phone",
        component: "ilmy/LessonFlow",
        interactive: true,
      },
    ],
    featured: true,
  },
  {
    slug: "drift",
    name: "Drift",
    tagline: "Travel app for trip history and AI-assisted day planning",
    description:
      "Drift keeps each trip's flights, trains, hotels, and days in one dark itinerary, with booking documents attached to the item they belong to. Times are stored destination-local, so 15:19 on a Kyoto trip reads 15:19 no matter which timezone the phone is in.",
    category: "iOS",
    status: "TestFlight",
    visibility: "public",
    year: 2026,
    updated: "2026-08-25",
    stack: ["Expo", "React Native", "Next.js", "Neon Postgres", "Vercel Blob"],
    links: {
      repo: ["https://github.com/aatirs7/drift"],
    },
    highlights: [
      "Every time is destination-local and stored naive, so an itinerary never shifts under you",
      "Booking documents open through a signed two step link that expires in five minutes",
      "Notifications are entirely local, on a four trigger matrix capped to the 64 iOS allows",
    ],
    identity: identities.drift,
    featured: true,
  },
  {
    slug: "durus",
    name: "Durus",
    tagline: "Arabic revision app for the Madinah book series",
    description:
      "Durus brings the vocabulary of Madinah Arabic Book 1 back just before you forget it. It sits alongside a weekly class rather than replacing one, and it never asks you to grade yourself: correctness comes from the answer, and difficulty from how long you took.",
    category: "iOS",
    status: "In build",
    visibility: "public",
    year: 2026,
    updated: "2026-08-25",
    stack: ["Expo", "SQLite", "Drizzle", "Next.js", "Neon Postgres"],
    links: {
      site: "https://durus.space",
      repo: ["https://github.com/aatirs7/Durus"],
    },
    highlights: [
      "Recognition and production are scheduled separately, on two rows per card",
      "Four drills: review, a speed round, a case drill on final harakat, and plain flashcards",
      "Local first. SQLite on the device is the source of truth and v1 has no server",
    ],
    identity: identities.durus,
  },
  {
    slug: "cobalt",
    name: "Cobalt",
    tagline: "Daily cognitive training across five domains",
    description:
      "Cobalt gives you one set of five short games a day, one per fixed domain, generated from the day's seed so everyone plays the same puzzles. No timer is visible while you play, and the three palettes are dimmed rather than inverted, because a training app should never flash at you.",
    category: "iOS",
    status: "In build",
    visibility: "public",
    year: 2026,
    updated: "2026-08-20",
    stack: ["Expo", "React Native", "Zustand", "Reanimated"],
    links: {},
    highlights: [
      "Six games across verbal, working memory, speed, reasoning, and a rotating wildcard slot",
      "Every puzzle generates at three difficulty tiers, with determinism covered by snapshot tests",
      "Deliberately calm: no visible countdown, no streak pressure, no inverted dark mode",
    ],
    identity: identities.cobalt,
    featured: true,
  },
  {
    slug: "parrot",
    name: "Parrot",
    tagline: "Cross-posting tool for Instagram and TikTok",
    description:
      "Parrot takes one video or photo set from an iPhone, works out a caption and hashtags in the voice of whichever account you are posting to, and publishes to Instagram and TikTok. Each account carries its own voice profile, so the same clip goes out reading differently everywhere it lands.",
    category: "iOS",
    status: "In build",
    visibility: "public",
    year: 2026,
    updated: "2026-07-10",
    stack: ["Expo", "Next.js", "Drizzle", "Neon Postgres", "Anthropic SDK"],
    links: {},
    highlights: [
      "Per account voice profiles drive the caption engine, with rules checked in code as well as in the prompt",
      "No platform secrets ship in the app bundle; the backend sits behind a single shared token",
      "TikTok posts as a draft only, which is the posture their audit actually permits",
    ],
    identity: identities.parrot,
  },
  {
    slug: "elysium-intern",
    name: "Elysium Intern",
    tagline: "Paid hands-on cloud security training for individuals and institutions",
    description:
      "A paid, self-paced cloud security program. A student buys a seat, works through a week by week curriculum one step per page, and does the hands-on work inside a real AWS account the platform provisions for them. The lab starts when they are working and pauses when they step away, which is what keeps it affordable to run.",
    category: "Venture",
    status: "Live",
    visibility: "public",
    year: 2026,
    updated: "2026-08-24",
    stack: ["React", "Tailwind", "Neon Postgres", "AWS SDK", "Stripe"],
    links: {
      site: "https://elysiumintern.com",
    },
    highlights: [
      "Provisions a real AWS sandbox account per student, and auto-pauses it to control cost",
      "Curriculum gates step by step, then day by day, then month by month",
      "Checkout provisions inside one transaction, so a failed webhook retries cleanly",
    ],
    identity: identities["elysium-intern"],
    featured: true,
  },
  {
    slug: "cybercourse",
    name: "CyberCourse",
    tagline: "Certification exam prep with flashcards and adaptive learn mode",
    description:
      "Certification prep for AWS Cloud Practitioner, Solutions Architect, and Security+. You work through video lessons, drill terms in an adaptive learn mode that tracks each term through four mastery stages, then sit module quizzes and a practice exam. Grading lives entirely on the server, so the answers are never in the page.",
    category: "Web",
    status: "Live",
    visibility: "public",
    year: 2026,
    updated: "2026-08-18",
    stack: ["React", "Tailwind", "Neon Postgres", "Stripe", "Bunny Stream"],
    links: {
      site: "https://cybercourse-lyart.vercel.app",
    },
    highlights: [
      "Adaptive learn builds rounds of seven and requeues a missed term later in the same round",
      "Correct answers are never sent to the client, so grading cannot be inspected",
      "Video completion counts cumulative watched seconds rather than trusting the ended event",
    ],
    identity: identities.cybercourse,
  },
  {
    slug: "elysium-cyber",
    name: "Elysium Cyber",
    tagline: "Cloud and cyber security consulting under Elysium Ventures",
    description:
      "The consulting arm of Elysium Ventures, and the front door the training products sit behind. It is a small, near-monochrome marketing site whose job is to explain the services and route people to the right one.",
    category: "Venture",
    status: "Live",
    visibility: "public",
    year: 2025,
    updated: "2026-02-17",
    stack: ["Next.js", "Tailwind", "Vercel"],
    links: {
      site: "https://www.elysiumcyber.com",
    },
    identity: identities["elysium-cyber"],
  },
  {
    slug: "elysium-builds",
    name: "Elysium Builds",
    tagline: "Client site operations hub with a per-client portal for requests and billing",
    description:
      "An internal operations hub for a portfolio of client websites, plus a portal each client reaches by their own tokenized link to file change requests and see what they are being billed for. The internal side sits behind auth; the client side never shows one client anything about another.",
    category: "Internal",
    status: "Live",
    visibility: "public",
    year: 2026,
    updated: "2026-08-20",
    stack: ["Next.js", "Clerk", "Neon Postgres", "Drizzle", "Stripe"],
    links: {
      site: "https://elysiumbuilds.dev",
    },
    highlights: [
      "Internal dashboard covers the request queue, revenue, and margin per client site",
      "Each client gets a tokenized portal rather than an account to manage",
    ],
    identity: identities["elysium-builds"],
  },

  /* ---- listed: name, category, status, tagline, and a palette plate only ---- */

  {
    slug: "siddiqui-family-tree",
    name: "Siddiqui Family Tree",
    tagline: "Multi-generation genealogy site for one family",
    description:
      "Open anyone on the tree and it tells you, in plain words computed from your own position, who they are to you.",
    category: "Web",
    status: "Live",
    visibility: "listed",
    year: 2026,
    updated: "2026-07-16",
    stack: ["Next.js", "Neon Postgres", "Drizzle", "d3"],
    links: {},
    identity: identities["siddiqui-family-tree"],
  },
  {
    slug: "elysium-health",
    name: "ElysiumHealth",
    tagline: "Personal fitness, nutrition, and sleep tracking",
    description: "A private, single user app for training, meals, and sleep against the day.",
    category: "iOS",
    status: "In build",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-24",
    stack: ["Expo", "React Native", "Skia", "Neon Postgres"],
    links: {},
    identity: identities["elysium-health"],
  },
  {
    slug: "elysium-vault",
    name: "ElysiumVault",
    tagline: "Personal finance tracking built on Plaid",
    description:
      "Read-only aggregation of real bank, card, and loan accounts, behind a Face ID gate.",
    category: "iOS",
    status: "In build",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-17",
    stack: ["Expo", "Plaid", "Clerk", "Neon Postgres"],
    links: {},
    identity: identities["elysium-vault"],
  },
  {
    slug: "vega",
    name: "Vega",
    tagline: "Options research and paper-trading system",
    description:
      "Researches pre-market news each weekday, proposes trades as structured data, and waits for approval. Paper only, enforced in code.",
    category: "Platform",
    status: "In build",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-24",
    stack: ["Next.js", "Neon Postgres", "Anthropic SDK", "Alpaca"],
    links: {},
    identity: identities.vega,
  },
  {
    slug: "repfeed",
    name: "RepFeed",
    tagline: "Swipe feed and haul builder over a shopping community",
    description:
      "Ingests a subreddit, collapses every wrapper and mirror link down to one card per real product, and serves them as a stack you swipe through.",
    category: "Web",
    status: "In build",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-23",
    stack: ["Next.js", "Neon Postgres", "Drizzle", "Playwright"],
    links: {},
    identity: identities.repfeed,
  },
  {
    slug: "wanderfund",
    name: "WanderFund",
    tagline: "Trip savings and planning app for two people",
    description: "Specced but never built. There is no repository and no code.",
    category: "Web",
    status: "Specced",
    visibility: "listed",
    stack: [],
    links: {},
    /* No identity. Nothing was ever designed, and inventing a palette
       for the plate would be fabrication. Recorded in INVENTORY.md. */
  },
  {
    slug: "travld",
    name: "travld",
    tagline: "Country and city visit tracking, replaced by Drift",
    description:
      "Logged visits to real places and drew them as a world passport, region maps, and a timelapse. Shelved after two days; Drift took its place.",
    category: "iOS",
    status: "Shelved",
    visibility: "listed",
    year: 2026,
    updated: "2026-07-14",
    stack: ["Expo", "MapLibre", "Turborepo", "Reanimated"],
    links: {},
    identity: identities.travld,
  },
  {
    slug: "elysium-home",
    name: "ElysiumHome",
    tagline: "Personal command center, split into dedicated apps",
    description:
      "A private command deck for the day, reading live and read-only from four other project databases. Shelved once the pieces became their own apps.",
    category: "Web",
    status: "Shelved",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-16",
    stack: ["Next.js", "Neon Postgres", "Anthropic SDK", "Recharts"],
    links: {},
    identity: identities["elysium-home"],
  },
  {
    slug: "meridian",
    name: "Meridian",
    tagline: "Daily accountability app for two people",
    description: "Two people, two pillars, one shared arc. Built for a pair, not a team.",
    category: "iOS",
    status: "TestFlight",
    visibility: "listed",
    year: 2026,
    updated: "2026-06-26",
    stack: ["Expo", "React Native", "Next.js", "Neon Postgres"],
    links: {},
    identity: identities.meridian,
  },
  {
    slug: "cheapseat",
    name: "cheapseat.lol",
    tagline: "One seat, held by whoever last paid the most for it",
    description:
      "A public leaderboard with exactly one spot. Bids stack, a clock counts how long the current holder has kept it, and anyone can take it.",
    category: "Web",
    status: "Live",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-22",
    stack: ["Next.js", "Stripe", "Neon Postgres", "Drizzle"],
    links: {},
    identity: identities.cheapseat,
  },
  {
    slug: "epl-fantasy-draft",
    name: "EPL Fantasy Draft",
    tagline: "Season-long snake-draft fantasy Premier League for a friend group",
    description:
      "A draft where each player is owned by exactly one manager for the season, scored on official Premier League fantasy rules.",
    category: "Web",
    status: "Live",
    visibility: "listed",
    year: 2026,
    updated: "2026-08-13",
    stack: ["Next.js", "Neon Postgres", "Drizzle", "PWA"],
    links: {},
    identity: identities["epl-fantasy-draft"],
  },
  {
    slug: "wc26",
    name: "wc26",
    tagline: "World Cup 2026 bracket pool for family and friends",
    description:
      "Pick the bracket, then watch it score itself as results sync through the tournament.",
    category: "Web",
    status: "Live",
    visibility: "listed",
    year: 2026,
    updated: "2026-07-20",
    stack: ["Next.js", "Neon Postgres", "Drizzle"],
    links: {},
    identity: identities.wc26,
  },
];

/* ---------------------------------------------------------------------
   hidden. Not on the site in any form. Kept here with the reason so the
   call is not re-litigated on the next build.

   - Sehat            iOS   Specced   Private family health records.
   - ShahmirCRM       Web   Live      Client business, not Aatir's to display.
   - ACCSHOP          Web   Live      Same client, same reason.
   - Phir Milengey Hum Web  Live      Private personal gift site.
   - MentorReach      Web   In build  Real and substantial, at Aatir's request.
   - Systems 10       Web   Live      At Aatir's request.
--------------------------------------------------------------------- */

export const projects: Project[] = projectsSchema.parse(rows);

export const visible = projects.filter((p) => p.visibility !== "hidden");
export const publicProjects = projects.filter((p) => p.visibility === "public");
export const featuredProjects = publicProjects.filter((p) => p.featured);

export function projectBySlug(slug: string): Project | undefined {
  return publicProjects.find((p) => p.slug === slug);
}

/** Shipped means it is out in the world, in some form, right now. */
export const shippedCount = visible.filter((p) =>
  ["App Store", "Live", "TestFlight"].includes(p.status),
).length;
