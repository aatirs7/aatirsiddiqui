import type { ProjectIdentity } from "@/lib/schema";

/**
 * Every hex here was read out of the project's own source file, not
 * sampled from a screenshot. The source path is named above each entry
 * so the next person can diff it when a project restyles.
 *
 * Font names are the project's real faces. Where the eight-family budget
 * in spec 7.6 forced a substitute, the note says so.
 */
export const identities: Record<string, ProjectIdentity> = {
  /* ILMYIOS/constants/theme.ts + ILMY/app/globals.css */
  ilmy: {
    tokens: {
      background: "#F4F0E6",
      primary: "#065F46",
      primaryLight: "#ECFDF5",
      text: "#1F2937",
      textSecondary: "#6B7280",
      gold: "#C4A35A",
      streak: "#FF9600",
      darkGround: "#0D2818",
    },
    fonts: { display: "Playfair Display", body: "Inter", arabic: "Noto Naskh Arabic" },
    radius: "12px",
    mode: "light",
    note: "Parchment and emerald with a gold seal, so a learning app reads as a book rather than a game. Arabic is set in Amiri here; the app itself uses Noto Naskh Arabic.",
  },

  /* drift/src/theme/{colors,type,layout}.ts */
  drift: {
    tokens: {
      bg: "#0A0A0B",
      bgElevated: "#121214",
      textPrimary: "#F5F5F6",
      textSecondary: "#8A8A8F",
      hairline: "#1E1E20",
      pill: "#2A2A2D",
      scrim: "#060607",
    },
    fonts: { display: "Inter", body: "Inter" },
    radius: "22px",
    mode: "dark",
    note: "Monochrome and chrome free. The hero photograph is the only source of colour anywhere in the app.",
  },

  /* DurusIOS/src/theme/{tokens,typography,layout}.ts */
  durus: {
    tokens: {
      paper: "#f6f4ef",
      surface: "#fcfbf8",
      surfaceSunk: "#eae7df",
      ink: "#1e356f",
      inkSoft: "#56679a",
      rule: "#d7d9e2",
      lapis: "#2a4a8b",
      verdigris: "#34705f",
      clay: "#9c454d",
      saffron: "#9c6f1e",
    },
    fonts: { display: "Satoshi", body: "Satoshi", mono: "IBM Plex Mono", arabic: "Amiri" },
    radius: "16px",
    mode: "light",
    note: "Paper and lapis, the palette of a printed grammar. Satoshi is licensed and cannot ship here, so the plate falls back to Inter and the numerals fall back to Geist Mono.",
  },

  /* cobalt/src/theme/{tokens,typography,layout}.ts */
  cobalt: {
    tokens: {
      bg: "#EDEDEA",
      surface: "#E4E4E0",
      surfaceAlt: "#F2F2EF",
      text: "#26262B",
      textMuted: "#6E6E76",
      line: "#D2D2CD",
      accent: "#4A5D8A",
      accentSoft: "#C4CDE0",
      success: "#6E8C6A",
      error: "#A8706A",
    },
    fonts: { display: "Source Serif 4", body: "Inter" },
    radius: "12px",
    mode: "light",
    note: "Three dimmed palettes rather than a light and dark pair, because a training app should never flash. A contrast test in the repo enforces the harshness ceiling.",
  },

  /* parrot/app/src/theme/theme.tsx */
  parrot: {
    tokens: {
      bg: "#0A0B0D",
      bgSubtle: "#101216",
      card: "#16181D",
      cardAlt: "#1E2127",
      border: "#282C34",
      text: "#F4F6FA",
      textSecondary: "#AAB1BD",
      primary: "#4E97FF",
      accent: "#C08AE6",
      success: "#3FBF8F",
    },
    fonts: { display: "SF Pro", body: "SF Pro", mono: "SF Mono" },
    radius: "14px",
    mode: "dark",
    note: "The only project in the portfolio that loads no web font at all. It uses the iOS system faces on purpose, so it looks like the share sheet it lives next to.",
  },

  /* elysiumintern/src/index.css + tailwind.config.js */
  "elysium-intern": {
    tokens: {
      bgMain: "#fbfbfa",
      bgHover: "#f7f6f3",
      textPrimary: "#37352f",
      textSecondary: "#787774",
      border: "#e9e9e7",
      brand: "#ef4444",
      blue: "#2383e2",
      green: "#0f7b6c",
      yellow: "#dfab01",
      orange: "#d9730d",
    },
    fonts: { display: "Playfair Display", body: "Inter", mono: "IBM Plex Mono" },
    radius: "8px",
    mode: "light",
    note: "A document surface, not a dashboard. Students read a curriculum for hours, so it borrows the quiet of a writing app.",
  },

  /* cybercourse/src/index.css + tailwind.config.js */
  cybercourse: {
    tokens: {
      bgMain: "#fbfbfa",
      bgHover: "#f7f6f3",
      textPrimary: "#37352f",
      textSecondary: "#787774",
      border: "#e9e9e7",
      brand: "#2563eb",
      green: "#0f7b6c",
      red: "#eb5757",
      purple: "#9065b0",
      gradientTo: "#1d4ed8",
    },
    fonts: { display: "Playfair Display", body: "Inter", mono: "IBM Plex Mono" },
    radius: "8px",
    mode: "light",
    note: "The same reading surface as Elysium Intern with the brand hue swapped from red to blue. Two products, one house style, one variable changed.",
  },

  /* elysiumcyberv2/src/app/globals.css */
  "elysium-cyber": {
    tokens: {
      bg: "#0A0A0A",
      card: "#1A1A1A",
      cardHover: "#222222",
      iconBg: "#2A2A2A",
      accent: "#ef4444",
      accentHover: "#dc2626",
      textSecondary: "#a3a3a3",
      textMuted: "#737373",
    },
    fonts: { display: "Playfair Display", body: "Inter" },
    radius: "16px",
    mode: "dark",
    note: "Near black with a single red. A security consultancy selling seriousness, so the page carries almost no colour at all.",
  },

  /* elysiumbuilds/app/globals.css */
  "elysium-builds": {
    tokens: {
      paper: "#0b0c0e",
      surface: "#14161a",
      raise: "#191c21",
      ink: "#e7eaef",
      inkMuted: "#78808d",
      line: "#23272e",
      accent: "#4cc2c4",
      ok: "#4ade80",
      warn: "#f5a524",
      bad: "#f0616d",
    },
    fonts: { display: "Public Sans", body: "Public Sans", mono: "JetBrains Mono" },
    radius: "12px",
    mode: "dark",
    note: "An operations console with a teal signal, built to be read at a glance between client calls. Public Sans and JetBrains Mono fall back to Geist here.",
  },

  /* SiddiquiFamilyTree/src/app/globals.css */
  "siddiqui-family-tree": {
    tokens: {
      background: "#f6f0e7",
      surface: "#fffdfa",
      surface2: "#f0e8dc",
      foreground: "#241c14",
      muted: "#6e6153",
      border: "#e9dfd0",
      primary: "#8a5836",
      accent: "#a56a41",
      primaryTint: "#f3e8d8",
    },
    fonts: { display: "Fraunces", body: "Geist", arabic: "Noto Nastaliq Urdu" },
    radius: "16px",
    mode: "light",
    note: "Warm cream and espresso, sized for readers between eight and eighty. The Urdu face appears on one screen only and is not loaded here.",
  },

  /* elysiumhealth/app/src/theme/tokens.ts */
  "elysium-health": {
    tokens: {
      bg: "#0E0F11",
      text: "#F4F2ED",
      text2: "#A6A39B",
      muted: "#6E6B63",
      accent: "#4FB587",
      ember: "#E0894F",
      glowPink: "#C4708E",
      glowBlue: "#4E6BB0",
      glowGold: "#A8823E",
    },
    fonts: { display: "Fraunces", body: "Inter", mono: "IBM Plex Mono" },
    radius: "16px",
    mode: "dark",
    note: "Warm paper by day, near black by night, with four soft glow lobes behind the card layer. The dark accent is deliberately lighter than the brand green, which measures under 3:1 on this ground.",
  },

  /* elysiumvault/app/constants/theme.ts */
  "elysium-vault": {
    tokens: {
      background: "#0A0A0B",
      surface: "#141416",
      surfaceRaised: "#1A1A1D",
      border: "#232326",
      gold: "#C9A961",
      goldDim: "#8F7A48",
      text: "#F2F2F3",
      textMuted: "#8E8E93",
      negative: "#B3574F",
    },
    fonts: { display: "Fraunces", body: "Inter", mono: "IBM Plex Mono" },
    radius: "20px",
    mode: "dark",
    note: "Heavy, quiet, precise. Money is always set in tabular numerals so columns of figures never shift as they update.",
  },

  /* vega/src/app/globals.css */
  vega: {
    tokens: {
      background: "#0a0a0b",
      panel: "#141416",
      panel2: "#1b1b1f",
      border: "#2a2a30",
      foreground: "#ededed",
      muted: "#9a9aa6",
      accent: "#e5484d",
      up: "#33c27f",
      down: "#e5484d",
    },
    fonts: { display: "System UI", body: "System UI", mono: "SF Mono" },
    radius: "10px",
    mode: "dark",
    note: "A terminal that fits in a hand. Every figure switches to tabular mono so a number never moves while it ticks.",
  },

  /* fashionreps/src/app/globals.css */
  repfeed: {
    tokens: {
      bg: "#121214",
      surface: "#1b1b1f",
      surface2: "#232329",
      line: "#2a2a30",
      ink: "#ededf0",
      inkMuted: "#8a8a94",
      accent: "#e8593f",
      ok: "#4fa87a",
      warn: "#c9922e",
    },
    fonts: { display: "Inter", body: "Inter" },
    radius: "16px",
    mode: "dark",
    note: "Dark only on purpose. It is a lean back app used on a phone at night, and a light theme would double the surface area of every decision for nobody.",
  },

  /* travld/packages/ui/src/tokens.ts */
  travld: {
    tokens: {
      bg: "#000000",
      surface: "#121212",
      surfaceAlt: "#1E1E1E",
      grey: "#303032",
      textPrimary: "#FFFFFF",
      textDim: "#8A8A8E",
      mint: "#00E08F",
      mintDim: "#0A7D52",
      tickEmpty: "#252527",
    },
    fonts: { display: "System Mono", body: "System UI", mono: "System Mono" },
    radius: "16px",
    mode: "dark",
    note: "Mint on true black, and every figure set in the system monospace. The one deliberate exception to this site's no-pure-black rule, applied inside this plate only.",
  },

  /* elysiumse7en/src/app/globals.css (the elysiumhome repo) */
  "elysium-home": {
    tokens: {
      bg: "#0e0f11",
      surface: "#16181b",
      surface2: "#1c1f23",
      text: "#f4f2ed",
      text2: "#a6a39b",
      muted: "#6e6b63",
      accent: "#c9a567",
      accentBright: "#d9b87a",
      pos: "#2e8b6b",
      neg: "#be5a3f",
    },
    fonts: { display: "Fraunces", body: "Geist", mono: "Geist Mono", arabic: "Amiri" },
    radius: "16px",
    mode: "dark",
    note: "The origin of the house style that Health and Vault inherited. One lit pixel along the top edge of a tile is what makes it read as raised without a shadow.",
  },

  /* meridian/apps/mobile/constants/theme.ts */
  meridian: {
    tokens: {
      obsidian: "#0B0E12",
      panel: "#12161C",
      border: "#262E38",
      starlight: "#E9EFF6",
      coolSteel: "#9DBFDC",
      warmBone: "#E7DECB",
      accentRing: "#7FA8C9",
      captionGray: "#8B98A8",
      danger: "#C28A84",
    },
    fonts: { display: "Space Grotesk", body: "Space Grotesk" },
    radius: "16px",
    mode: "dark",
    note: "Two people, two pillars: cool steel for one and warm bone for the other, joined by a single thin arc. Space Grotesk falls back to Geist here.",
  },

  /* bidclone/src/app/globals.css */
  cheapseat: {
    tokens: {
      ground: "#0e1013",
      panel: "#171a1e",
      ink: "#edeae4",
      inkSoft: "#a2a8af",
      rule: "#262b31",
      gain: "#2fbf7e",
      gainWash: "#14231c",
      drop: "#e0594b",
      dropWash: "#2b1512",
    },
    fonts: { display: "Instrument Sans", body: "Instrument Sans", mono: "IBM Plex Mono" },
    radius: "8px",
    mode: "dark",
    note: "A trading floor for one seat. Green for a bid that holds, red for one that gets taken, and a handwriting face for the single human flourish.",
  },

  /* fantasypremierleague/src/app/globals.css */
  "epl-fantasy-draft": {
    tokens: {
      bg: "#17171e",
      bg2: "#0e0e14",
      surface: "#21212a",
      surfaceRaised: "#2b2b35",
      fg: "#f4f4f6",
      muted: "#9b9aa3",
      accent: "#a78bfa",
      gold: "#e3b25f",
      silver: "#c9cbd3",
      live: "#f43f6e",
    },
    fonts: { display: "Inter", body: "Inter" },
    radius: "16px",
    mode: "dark",
    note: "A violet accent with medal metals for the table, and a pink live dot that only appears while matches are actually being played.",
  },

  /* wc26/src/app/globals.css */
  wc26: {
    tokens: {
      bg: "#060a13",
      bg2: "#0a101e",
      surface: "#0f1726",
      surfaceRaised: "#182238",
      fg: "#eef2fb",
      muted: "#8693ad",
      accent: "#1ee6a4",
      gold: "#ffc850",
      live: "#ff5d73",
      pitchGlow: "#1ee6a4",
    },
    fonts: { display: "Bebas Neue", body: "Hanken Grotesk" },
    radius: "16px",
    mode: "dark",
    note: "Deep night blue with a pitch green glow behind the bracket. Bebas Neue and Hanken Grotesk fall back to the site faces here.",
  },
};
