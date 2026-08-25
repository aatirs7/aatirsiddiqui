import type { Project } from "@/lib/schema";
import { PalettePlate } from "./PalettePlate";
import styles from "./Vitrine.module.css";

/**
 * A vitrine for a project that has no specimen yet.
 *
 * There is nothing to interact with, nothing to mount on intersection, and
 * nothing to reset, so this ships no client JavaScript at all. The moment a
 * project gains a specimen it moves to the client Vitrine instead.
 */
export function StaticVitrine({ project }: { project: Project }) {
  return (
    <div
      className={`vitrine ${styles.vitrine}`}
      data-project={project.slug}
      style={projectVars(project)}
    >
      <div className={styles.plate}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.caption}>Design language</p>
      </div>

      {project.identity ? <PalettePlate identity={project.identity} /> : null}
    </div>
  );
}

function projectVars(project: Project): React.CSSProperties {
  const identity = project.identity;
  if (!identity) return {};
  const vars: Record<string, string> = {};
  for (const [k, v] of Object.entries(identity.tokens)) {
    vars[`--p-${kebab(k)}`] = v;
  }
  vars["--p-radius"] = identity.radius;
  return vars as React.CSSProperties;
}

function kebab(s: string) {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
