"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fade and rise on enter, once. Never on scroll back up (spec 6.5), which
 * is why the observer disconnects on the first intersection rather than
 * toggling. Reduced motion resolves to shown immediately.
 */
export function useReveal<T extends HTMLElement>(rootMargin = "0px 0px -8% 0px") {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, shown };
}
