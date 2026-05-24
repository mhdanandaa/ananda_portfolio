// components/sections/Experience.jsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import RevealWrapper from "../ui/RevealWrapper";
import { experience } from "../../data/portfolio";

export default function Education() {
  return (
    <section
      id="experience"
      className="py-36 px-12"
      style={{
        background:
            "linear-gradient(180deg, #faf8f4 0%, rgba(216,240,232,0.15) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="My Journey"
          title="Experience"
        />

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px timeline-line"
            aria-hidden="true"
          />

          {experience.map((item, i) => (
            <RevealWrapper key={item.id} delay={i * 0.15} className="relative mb-12 last:mb-0">
              {/* Dot */}
              <div
                className="absolute -left-[43px] top-2 w-3.5 h-3.5 rounded-full border-2 border-white shadow"
                style={{
                  background: "linear-gradient(135deg, #7c6bbf, #8ed4b8)",
                  boxShadow: "0 0 0 4px rgba(180,160,230,0.2)",
                }}
              />

              {/* Content */}
              <p className="text-xs font-medium tracking-widest uppercase text-lav-500 mb-2">
                {item.period}
              </p>
              <h3 className="font-display text-2xl font-light text-ink mb-1">
                {item.role}
              </h3>
              <p className="text-sm text-ink-2 mb-3 font-light">{item.company}</p>
              <p className="text-sm leading-relaxed text-ink-2 max-w-xl">
                {item.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
