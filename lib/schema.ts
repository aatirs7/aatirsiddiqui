import { z } from "zod";

export const CATEGORIES = ["iOS", "Web", "Platform", "Internal", "Venture"] as const;
export const STATUSES = ["App Store", "Live", "TestFlight", "In build", "Specced", "Shelved"] as const;
export const VISIBILITIES = ["public", "listed", "hidden"] as const;

/* A status that earns a --signal dot on the spine. Spec 6.4. */
export const SIGNAL_STATUSES: ReadonlySet<string> = new Set(["App Store", "Live"]);

export const projectIdentitySchema = z.object({
  tokens: z.record(z.string(), z.string()),
  fonts: z.object({
    display: z.string().optional(),
    body: z.string().optional(),
    mono: z.string().optional(),
    arabic: z.string().optional(),
  }),
  radius: z.string(),
  mode: z.enum(["light", "dark"]),
  note: z.string().optional(),
});

export const specimenSchema = z.object({
  id: z.string(),
  label: z.string(),
  frame: z.enum(["phone", "browser", "bare"]),
  component: z.string(),
  interactive: z.boolean(),
});

export const projectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  tagline: z.string().max(90),
  description: z.string(),
  category: z.enum(CATEGORIES),
  status: z.enum(STATUSES),
  visibility: z.enum(VISIBILITIES),
  year: z.number().int().min(2000).max(2100).optional(),
  /* Absent only for a project that was specced and never built. */
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  /* Empty only for a project that was specced and never built. */
  stack: z.array(z.string()).max(6),
  links: z.object({
    site: z.string().url().optional(),
    appStore: z.string().url().optional(),
    testFlight: z.string().url().optional(),
    repo: z.array(z.string().url()).optional(),
  }),
  highlights: z.array(z.string()).max(3).optional(),
  media: z
    .object({ cover: z.string().optional(), shots: z.array(z.string()).optional() })
    .optional(),
  identity: projectIdentitySchema.optional(),
  specimens: z.array(specimenSchema).optional(),
  featured: z.boolean().optional(),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectIdentity = z.infer<typeof projectIdentitySchema>;
export type Specimen = z.infer<typeof specimenSchema>;
export type Category = (typeof CATEGORIES)[number];
export type Status = (typeof STATUSES)[number];

/* Visibility is the one rule a bug here would actually leak, so it is
   enforced structurally rather than by convention. A listed or hidden
   project cannot carry a link, a screenshot, or a specimen. */
export const projectsSchema = z.array(projectSchema).superRefine((rows, ctx) => {
  const seen = new Set<string>();
  rows.forEach((p, i) => {
    if (seen.has(p.slug)) {
      ctx.addIssue({ code: "custom", path: [i, "slug"], message: `duplicate slug ${p.slug}` });
    }
    seen.add(p.slug);

    if (p.visibility !== "public") {
      const hasLink = Object.values(p.links).some((v) =>
        Array.isArray(v) ? v.length > 0 : Boolean(v),
      );
      if (hasLink) {
        ctx.addIssue({
          code: "custom",
          path: [i, "links"],
          message: `${p.slug} is ${p.visibility} and must not carry links`,
        });
      }
      if (p.media?.cover || p.media?.shots?.length) {
        ctx.addIssue({
          code: "custom",
          path: [i, "media"],
          message: `${p.slug} is ${p.visibility} and must not carry screenshots`,
        });
      }
      if (p.specimens?.length) {
        ctx.addIssue({
          code: "custom",
          path: [i, "specimens"],
          message: `${p.slug} is ${p.visibility} and must not carry specimens`,
        });
      }
      if (p.featured) {
        ctx.addIssue({
          code: "custom",
          path: [i, "featured"],
          message: `${p.slug} is ${p.visibility} and cannot be featured`,
        });
      }
    }
  });

  const featured = rows.filter((p) => p.featured).length;
  if (featured > 4) {
    ctx.addIssue({ code: "custom", message: `at most 4 featured projects, found ${featured}` });
  }
});
