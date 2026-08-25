import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { publicProjects, projectBySlug } from "@/content/projects";
import { Vitrine } from "@/components/Vitrine";
import { PalettePlate } from "@/components/PalettePlate";
import { SIGNAL_STATUSES } from "@/lib/schema";
import styles from "./work.module.css";

/**
 * Public projects only. A listed or hidden slug is not generated and, with
 * dynamicParams off, is not reachable at runtime either. Spec 5.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return publicProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Aatir Siddiqui`,
    description: project.tagline,
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const links = [
    project.links.site && { label: "Open the site", href: project.links.site },
    project.links.appStore && { label: "App Store", href: project.links.appStore },
    project.links.testFlight && { label: "TestFlight", href: project.links.testFlight },
    ...(project.links.repo ?? []).map((r) => ({ label: "Repository", href: r })),
  ].filter((l): l is { label: string; href: string } => Boolean(l));

  return (
    <main>
      <section className={`${styles.head} shell`}>
        <Link href="/#work" className={styles.back}>
          Back to the index
        </Link>

        <p className={styles.eyebrow}>
          {SIGNAL_STATUSES.has(project.status) ? (
            <span className={styles.dot} aria-hidden="true" />
          ) : null}
          <span>
            {project.category} / {project.status}
            {project.year ? ` / ${project.year}` : ""}
          </span>
        </p>

        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.description}>{project.description}</p>

        {project.highlights?.length ? (
          <ul className={styles.highlights}>
            {project.highlights.map((h) => (
              <li key={h} className={styles.highlight}>
                {h}
              </li>
            ))}
          </ul>
        ) : null}

        {project.stack.length > 0 ? (
          <ul className={styles.stack}>
            {project.stack.map((s) => (
              <li key={s} className={styles.chip}>
                {s}
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {/* Specimens sit directly above the links, so seeing the component and
          opening the real thing is one glance apart. Spec 7.5. */}
      {project.specimens?.length ? (
        <section className="shell">
          <div className={styles.vitrines}>
            {project.specimens.map((s) => (
              <Vitrine key={s.id} project={project} specimen={s} />
            ))}
          </div>
        </section>
      ) : null}

      {/* The full plate, in addition to any specimens. Spec 7.5. */}
      {project.identity ? (
        <section className="shell">
          <h2 className={styles.h2}>Design language</h2>
          <div className={styles.plateBox}>
            <PalettePlate identity={project.identity} />
          </div>
        </section>
      ) : null}

      {links.length > 0 ? (
        <section className="shell">
          <h2 className={styles.h2}>Open it</h2>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="shell">
          <p className={styles.noLinks}>
            Nothing public to open yet. This one is still being built.
          </p>
        </section>
      )}

      <section className={`${styles.foot} shell`}>
        <Link href="/#work" className={styles.back}>
          Back to the index
        </Link>
      </section>
    </main>
  );
}
