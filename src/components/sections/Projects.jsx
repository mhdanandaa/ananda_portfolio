// components/sections/Projects.jsx
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../ui/SectionHeader";
import RevealWrapper from "../ui/RevealWrapper";
import { projects } from "../../data/portfolio";

const GRADIENTS = [
  "linear-gradient(135deg, #d4caf4, #b8d8f4, #b8e4d0)",
  "linear-gradient(135deg, #b8e4d0, #d4eaf8, #d4caf4)",
  "linear-gradient(135deg, #f4dce8, #e8e2f8, #d4eaf8)",
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 1;

  return (
    <RevealWrapper delay={0.1}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${
          isEven ? "md:direction-rtl" : ""
        }`}
      >
        {/* Image */}
        <div className={isEven ? "md:order-2" : ""}>
          <motion.div
            className="relative rounded-[28px] overflow-hidden cursor-pointer"
            style={{
              aspectRatio: "16/10",
              background: GRADIENTS[index % GRADIENTS.length],
              boxShadow: "0 24px 60px rgba(124,107,191,0.14)",
            }}
            whileHover={{ y: -8, scale: 1.012 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            {/* Image or placeholder */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover block"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />

            {/* Placeholder (shown if image fails) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-0">
              <span className="text-5xl">{project.emoji}</span>
              <span
                className="text-xs font-light opacity-60 font-display"
                style={{ color: "rgba(44,40,64,0.6)" }}
              >
                {project.image}
              </span>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 flex items-end justify-center pb-6 z-20"
              style={{
                background:
                  "linear-gradient(to top, rgba(44,40,64,0.55) 0%, transparent 60%)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.35 }}
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 text-ink text-xs font-medium px-6 py-2.5 rounded-full shadow-sm hover:bg-white transition-colors"
              >
                ↗ View Project
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Text */}
        <div className={isEven ? "md:order-1" : ""}>
          <p
            className="font-display leading-none mb-[-10px]"
            style={{ fontSize: "5rem", fontWeight: 300, color: "rgba(180,160,230,0.2)" }}
          >
            {project.number}
          </p>
          <h3 className="font-display text-[2rem] font-light leading-snug text-ink mb-4">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink-2 mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-lav-500 hover:text-lav-600 underline underline-offset-4 transition-colors"
            >
              Live Demo ↗
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-ink-2 hover:text-ink underline underline-offset-4 transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-36 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected <em>Projects</em>"
        />

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
