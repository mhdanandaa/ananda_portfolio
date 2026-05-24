// hooks/useTypingEffect.js
// Typing + deleting animation hook

import { useState, useEffect } from "react";

/**
 * @param {string[]} phrases - Array of phrases to type through
 * @param {number} typeSpeed - ms per character when typing (default 90)
 * @param {number} deleteSpeed - ms per character when deleting (default 60)
 * @param {number} pauseMs - ms to pause after fully typing (default 1800)
 * @returns {string} current display text
 */
export function useTypingEffect(
  phrases,
  typeSpeed = 90,
  deleteSpeed = 60,
  pauseMs = 1800
) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, pauseMs);
      return () => clearTimeout(t);
    }

    const current = phrases[phraseIdx];

    if (!deleting) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }
  }, [charIdx, deleting, paused, phraseIdx, phrases, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
