// hooks/useScrollReveal.js
// Reusable scroll-triggered reveal hook menggunakan IntersectionObserver

import { useEffect, useRef } from "react";

/**
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - 0-1, default 0.15
 * @param {string} options.rootMargin - default "0px 0px -60px 0px"
 * @returns {{ ref, inView }}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el); // animate sekali saja
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? "0px 0px -60px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
