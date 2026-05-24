// hooks/useActiveSection.js
// Tracks which section is currently in view for nav highlighting

import { useState, useEffect } from "react";

/**
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {number} offset - px offset from top (default 120)
 * @returns {string} active section id
 */
export function useActiveSection(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - offset) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return active;
}
