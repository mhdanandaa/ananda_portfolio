// components/ui/SectionHeader.jsx
import React from "react";
import RevealWrapper from "./RevealWrapper";

/**
 * @param {string} eyebrow - small label above title
 * @param {string} title - main title (HTML string for <em> support)
 * @param {string} className - extra classes on the wrapper
 */
export default function SectionHeader({ eyebrow, title, className = "" }) {
  return (
    <RevealWrapper className={className}>
      <p className="section-eyebrow">✦ {eyebrow}</p>
      <h2
        className="section-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </RevealWrapper>
  );
}
