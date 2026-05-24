// components/ui/RevealWrapper.jsx
// Wraps any element with a scroll-triggered fade-up animation using Framer Motion

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * @param {React.ReactNode} children
 * @param {number} delay - animation delay in seconds (default 0)
 * @param {string} className - extra classes
 * @param {string} as - HTML tag (default "div")
 */
export default function RevealWrapper({
  children,
  delay = 0,
  className = "",
  as = "div",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  const Tag = as;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
