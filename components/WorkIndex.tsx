"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES, SIGNAL_STATUSES, STATUSES, type Project } from "@/lib/schema";
import { useReveal } from "./useReveal";
import styles from "./Spine.module.css";
import filters from "./Filters.module.css";

const ALL = "All";

export function WorkIndex({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<string>(ALL);
  const [status, setStatus] = useState<string>(ALL);

  /* Only offer a chip if something behind it exists. */
  const categoryOptions = useMemo(
    () => [ALL, ...CATEGORIES.filter((c) => projects.some((p) => p.category === c))],
    [projects],
  );
  const statusOptions = useMemo(
    () => [ALL, ...STATUSES.filter((s) => projects.some((p) => p.status === s))],
    [projects],
  );

  const shown = useMemo(
    () =>
      projects.filter(
        (p) =>
          (category === ALL || p.category === category) &&
          (status === ALL || p.status === status),
      ),
    [projects, category, status],
  );

  /* Group by year, newest first. Undated projects fall into their own group. */
  const groups = useMemo(() => {
    const by = new Map<number | "undated", Project[]>();
    for (const p of shown) {
      const key = p.year ?? ("undated" as const);
      if (!by.has(key)) by.set(key, []);
      by.get(key)!.push(p);
    }
    return [...by.entries()].sort((a, b) => {
      if (a[0] === "undated") return 1;
      if (b[0] === "undated") return -1;
      return b[0] - a[0];
    });
  }, [shown]);

  return (
    <>
      <div className={filters.groups}>
        <ChipRow
          legend="Category"
          options={categoryOptions}
          value={category}
          onChange={setCategory}
        />
        <ChipRow legend="Status" options={statusOptions} value={status} onChange={setStatus} />
      </div>

      <div className={styles.wrap}>
        <div className={styles.rule} aria-hidden="true" />
        {shown.length === 0 ? (
          <p className={styles.empty}>Nothing matches those two filters together.</p>
        ) : (
          <ol className={styles.list}>
            {groups.map(([year, items]) => (
              <li key={String(year)}>
                <div className={styles.year}>
                  <span className={styles.yearLabel}>
                    {year === "undated" ? "Not started" : year}
                  </span>
                </div>
                <ol className={styles.list}>
                  {items.map((p, i) => (
                    <SpineRow key={p.slug} project={p} side={i % 2 === 0 ? "left" : "right"} />
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}

function SpineRow({ project, side }: { project: Project; side: "left" | "right" }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  const linked = project.visibility === "public";

  const body = (
    <>
      <p className={styles.eyebrow}>
        {SIGNAL_STATUSES.has(project.status) ? (
          <span className={styles.dot} aria-hidden="true" />
        ) : null}
        <span>
          {project.category} / {project.status}
        </span>
      </p>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      {project.stack.length > 0 ? (
        <ul className={styles.stack}>
          {project.stack.map((s) => (
            <li key={s} className={styles.chip}>
              {s}
            </li>
          ))}
        </ul>
      ) : null}
      {linked ? <span className={styles.more}>Open</span> : null}
    </>
  );

  return (
    <li
      ref={ref}
      data-shown={shown}
      className={`${styles.row} ${styles[side]} rise`}
    >
      {linked ? (
        <Link href={`/work/${project.slug}`} className={styles.card}>
          {body}
        </Link>
      ) : (
        <div className={styles.card}>{body}</div>
      )}
    </li>
  );
}

function ChipRow({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className={filters.set}>
      <legend className={filters.legend}>{legend}</legend>
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={filters.chip}
        >
          {o}
        </button>
      ))}
    </fieldset>
  );
}
