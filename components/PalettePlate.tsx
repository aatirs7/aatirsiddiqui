import { face } from "@/lib/faces";
import type { ProjectIdentity } from "@/lib/schema";
import styles from "./PalettePlate.module.css";

/**
 * The cheapest half of the showcase (spec 7.4, 7.1). Shown on its own for
 * listed projects, and under the frame inside a vitrine for public ones.
 *
 * Everything here is inert markup. The hex is exposed as a title attribute
 * and as visually hidden text so it is reachable without a hover, which a
 * touch device cannot do.
 */
export function PalettePlate({
  identity,
  compact = false,
}: {
  identity: ProjectIdentity;
  compact?: boolean;
}) {
  const swatches = Object.entries(identity.tokens);
  const faces = [
    face(identity.fonts.display),
    face(identity.fonts.body),
    face(identity.fonts.mono),
    face(identity.fonts.arabic),
  ].filter((f): f is NonNullable<typeof f> => Boolean(f));

  /* Dedupe: most projects use one family for display and body both. */
  const shown = faces.filter((f, i) => faces.findIndex((g) => g.name === f.name) === i);

  return (
    <div className={compact ? `${styles.plate} ${styles.compact}` : styles.plate}>
      <ul className={styles.swatches}>
        {swatches.map(([name, hex]) => (
          <li key={name} className={styles.swatchItem}>
            <span
              className={styles.dot}
              style={{ background: hex }}
              title={`${name} ${hex}`}
              aria-hidden="true"
            />
            <span className={styles.hex}>{hex}</span>
            <span className="sr-only">
              {name} {hex}
            </span>
          </li>
        ))}
      </ul>

      <p className={styles.faces}>
        {shown.map((f) => (
          <span key={f.name} className={styles.faceItem}>
            <span style={{ fontFamily: f.css }} className={styles.faceName}>
              {f.name}
            </span>
            {f.substituted ? <span className={styles.sub}>set in a stand-in</span> : null}
          </span>
        ))}
        <span className={styles.faceItem}>
          <span className={styles.meta}>{identity.mode}</span>
          <span className={styles.meta}>radius {identity.radius}</span>
        </span>
      </p>

      {identity.note ? <p className={styles.note}>{identity.note}</p> : null}
    </div>
  );
}
