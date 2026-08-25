"use client";

import React, { Component, useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { Project, Specimen } from "@/lib/schema";
import { PalettePlate } from "./PalettePlate";
import styles from "./Vitrine.module.css";

/**
 * Specimen registry. Each entry is next/dynamic with ssr false, so none of
 * this reaches the server payload and none of it runs until the vitrine is
 * within 200px of the viewport. Spec 7.6.
 *
 * A specimen must never make a network request and holds all of its data
 * as a local fixture.
 */
const REGISTRY = {
  "ilmy/LessonFlow": dynamic(
    () => import("./specimens/ilmy/LessonFlow").then((m) => m.LessonFlow),
    { ssr: false, loading: () => null },
  ),
} as const;

type SpecimenKey = keyof typeof REGISTRY;

export function Vitrine({ project, specimen }: { project: Project; specimen?: Specimen }) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [failed, setFailed] = useState(false);
  const [touched, setTouched] = useState(false);
  /* Bumping this remounts the specimen, which is how it resets on re-entry. */
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
        } else {
          /* Left the viewport. Reset so it replays on the way back. Spec 7.2. */
          setNear(false);
          setTouched(false);
          setGeneration((g) => g + 1);
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const key = specimen?.component as SpecimenKey | undefined;
  const Specimen = key && key in REGISTRY ? REGISTRY[key] : undefined;
  const showSpecimen = Boolean(Specimen) && near && !failed;
  const frame = specimen?.frame ?? "browser";
  const url = project.links.site?.replace(/^https?:\/\//, "");

  const retireHint = () => {
    if (!touched) setTouched(true);
  };

  return (
    <div
      ref={ref}
      className={`vitrine ${styles.vitrine}`}
      data-project={project.slug}
      style={projectVars(project)}
    >
      <div className={styles.plate}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.caption}>{specimen?.label ?? "Design language"}</p>
      </div>

      {/* A project with no specimen yet shows its design language on its own,
          rather than an empty device frame around nothing. Spec 7.1. */}
      {specimen ? (
        <>
          <div className={styles.stage} onClick={retireHint} onKeyDown={retireHint}>
            <Frame kind={frame} url={url}>
              {/* The fallback is always present as the backdrop, and the
                  specimen paints over it once its chunk arrives. That is what
                  guarantees the frame is never empty, whether the specimen is
                  still loading, has failed, or JS is off. Spec 7.7. */}
              <Fallback project={project} />
              {showSpecimen && Specimen ? (
                <SpecimenBoundary key={generation} onError={() => setFailed(true)}>
                  <Specimen />
                </SpecimenBoundary>
              ) : null}
            </Frame>
          </div>

          {specimen.interactive ? (
            <p className={`${styles.hint} ${touched ? styles.hintGone : ""}`}>Tap to answer</p>
          ) : null}

          <hr className={styles.divider} />
        </>
      ) : null}

      {project.identity ? (
        <PalettePlate identity={project.identity} compact={Boolean(specimen)} />
      ) : null}
    </div>
  );
}

function Frame({
  kind,
  url,
  children,
}: {
  kind: "phone" | "browser" | "bare";
  url?: string;
  children: React.ReactNode;
}) {
  if (kind === "phone") {
    return (
      <div className={styles.phone}>
        <div className={styles.screen}>{children}</div>
      </div>
    );
  }
  if (kind === "bare") {
    return (
      <div className={styles.bare}>
        <div className={styles.screen}>{children}</div>
      </div>
    );
  }
  return (
    <div className={styles.browser}>
      <div className={styles.bar}>
        <span className={styles.url}>{url ?? "localhost"}</span>
      </div>
      <div className={styles.screen}>{children}</div>
    </div>
  );
}

/**
 * Never an empty vitrine. Prefers the project cover; with no cover yet it
 * renders a quiet plate in exactly the same box, so the layout is identical
 * whether the specimen mounts, fails, or JS is off entirely. Spec 7.7.
 */
function Fallback({ project }: { project: Project }) {
  const cover = project.media?.cover;
  const ground = project.identity?.tokens.bg ?? project.identity?.tokens.background;

  return (
    <div className={styles.fallback} style={ground ? { background: ground } : undefined}>
      {cover ? (
        <Image
          src={cover}
          alt={`The ${project.name} interface`}
          fill
          sizes="(max-width: 767px) 100vw, 720px"
          className={styles.fallbackImage}
        />
      ) : (
        <p className={styles.fallbackNote}>{project.name}</p>
      )}
    </div>
  );
}

/** Sets the project's own tokens as --p-* on the wrapper. Spec 7.3. */
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

/** A specimen that throws degrades to the cover rather than taking the page. */
class SpecimenBoundary extends Component<
  { children: React.ReactNode; onError: () => void },
  { crashed: boolean }
> {
  state = { crashed: false };
  static getDerivedStateFromError() {
    return { crashed: true };
  }
  componentDidCatch() {
    this.props.onError();
  }
  render() {
    return this.state.crashed ? null : this.props.children;
  }
}
