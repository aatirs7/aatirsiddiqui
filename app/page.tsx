import { featuredProjects, shippedCount, visible } from "@/content/projects";
import { site, buildDate } from "@/lib/site";
import { WorkIndex } from "@/components/WorkIndex";
import { Vitrine } from "@/components/Vitrine";
import styles from "./page.module.css";

/**
 * FILL THIS IN. Left empty on purpose: the build spec asks for
 * certifications as mono chips, but nothing in the repos or on disk records
 * which ones Aatir actually holds, and inventing credentials is the one
 * thing this page must never do. The section renders without them until
 * they are added here.
 */
const CERTS: string[] = [];

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <section className={`${styles.hero} shell`}>
        <p className={`mono enter ${styles.eyebrow}`}>{site.role}</p>
        <h1 className={`${styles.heroLine} enter`}>{site.name}</h1>
        <p className={`${styles.heroBody} enter`}>
          I secure federal cloud infrastructure by day, and build iOS and web products the rest of
          the time. {shippedCount} of the {visible.length} things below are out in the world right
          now; the others are honest about where they are.
        </p>
        <div className={`${styles.actions} enter`}>
          <a href="#work" className={styles.primary}>
            View the work
          </a>
          <a href={`mailto:${site.email}`} className={styles.secondary}>
            Email
          </a>
        </div>
      </section>

      {/* 2. The work */}
      <section id="work" className="shell">
        <h2 className={styles.h2}>The work</h2>
        <p className={styles.lede}>Every project appears once, with the status it actually has.</p>
        <WorkIndex projects={visible} />
      </section>

      {/* 3. Featured, after the index so the volume lands first */}
      <section className="shell">
        <h2 className={styles.h2}>A closer look</h2>
        <p className={styles.lede}>
          Four of them, each rendered in its own design language rather than described in mine.
        </p>
        <div className={styles.vitrines}>
          {featuredProjects.map((p) => (
            <Vitrine key={p.slug} project={p} specimen={p.specimens?.[0]} />
          ))}
        </div>
      </section>

      {/* 4. Background */}
      <section className="shell">
        <h2 className={styles.h2}>Background</h2>
        <p className={styles.prose}>
          Seven years in cloud security, currently working on federal cloud infrastructure. The day
          job is assessment, hardening, and incident response against real environments at real
          scale. Everything on this page was built outside of it, mostly to answer a question about
          whether the thing could work at all.
        </p>
        {CERTS.length > 0 ? (
          <ul className={styles.certs}>
            {CERTS.map((c) => (
              <li key={c} className={styles.cert}>
                {c}
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      {/* 5. Footer */}
      <footer className={`${styles.footer} shell`}>
        <ul className={styles.links}>
          <li>
            <a href={`mailto:${site.email}`} className={styles.link}>
              Email
            </a>
          </li>
          <li>
            <a href={site.github} className={styles.link} rel="me noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          {site.linkedin ? (
            <li>
              <a href={site.linkedin} className={styles.link} rel="me noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
          ) : null}
        </ul>
        <p className="mono">Built {buildDate}</p>
      </footer>
    </main>
  );
}
