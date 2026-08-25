/**
 * Maps a project's real typeface name onto one of the eight families this
 * site is allowed to load (spec 7.6). Anything not in the table renders in
 * a generic stack and is reported as substituted, so the palette plate can
 * say so rather than quietly lying about what you are looking at.
 */
const LOADED: Record<string, string> = {
  Inter: "var(--font-p-inter)",
  "Playfair Display": "var(--font-p-playfair)",
  Amiri: "var(--font-p-amiri)",
  Fraunces: "var(--font-p-fraunces)",
  "Source Serif 4": "var(--font-p-source-serif)",
  Geist: "var(--font-geist-sans)",
  "Geist Mono": "var(--font-geist-mono)",
};

/* Families the project genuinely uses that are system faces, not web fonts.
   These are not substitutions, so the plate should not flag them. */
const SYSTEM = new Set([
  "SF Pro",
  "SF Mono",
  "System UI",
  "System Mono",
]);

const GENERIC_SERIF = new Set(["Instrument Serif", "Bebas Neue"]);
const GENERIC_MONO = new Set(["IBM Plex Mono", "JetBrains Mono", "SF Mono", "System Mono"]);

export type Face = {
  /** The project's real family name, always shown as the label. */
  name: string;
  /** A CSS font-family value that is safe to apply. */
  css: string;
  /** True when the real face is not loaded and a stand-in is rendering. */
  substituted: boolean;
};

export function face(name: string | undefined): Face | null {
  if (!name) return null;

  const loaded = LOADED[name];
  if (loaded) {
    return { name, css: `${loaded}, ui-sans-serif, system-ui, sans-serif`, substituted: false };
  }

  if (SYSTEM.has(name)) {
    const mono = name.includes("Mono");
    return {
      name,
      css: mono
        ? "ui-monospace, SFMono-Regular, Menlo, monospace"
        : "ui-sans-serif, system-ui, -apple-system, sans-serif",
      substituted: false,
    };
  }

  if (GENERIC_MONO.has(name)) {
    return { name, css: "var(--font-geist-mono), ui-monospace, monospace", substituted: true };
  }
  if (GENERIC_SERIF.has(name)) {
    return { name, css: "var(--font-p-source-serif), ui-serif, Georgia, serif", substituted: true };
  }

  return { name, css: "var(--font-p-inter), ui-sans-serif, system-ui, sans-serif", substituted: true };
}
