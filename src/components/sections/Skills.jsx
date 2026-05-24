// components/sections/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import { skills } from "../../data/portfolio";

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white border border-lav-100 rounded-3xl p-6 text-center cursor-default relative overflow-hidden group"
      style={{ boxShadow: "0 2px 16px rgba(124,107,191,0.04)" }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(232,226,248,0.18), rgba(216,240,232,0.18))",
        }}
      />

      <span className="text-3xl block mb-3 relative z-10">{skill.emoji}</span>
      <p className="text-sm font-medium text-ink relative z-10">{skill.name}</p>
      <p className="text-xs text-ink-3 mt-1 relative z-10">{skill.category}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-36 px-12"
      style={{
        background:
          "linear-gradient(180deg, #faf8f4 0%, rgba(232,226,248,0.15) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="My Toolkit"
          title="Skills & <em>Technologies</em>"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
