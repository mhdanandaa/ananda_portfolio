// components/sections/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import { personal, typingPhrases } from "../../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const typed = useTypingEffect(typingPhrases);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-12 relative overflow-hidden hero-gradient"
    >
      {/* Background Orbs */}
      <div
        className="orb w-[600px] h-[600px] -top-32 -right-40"
        style={{
          background:
            "radial-gradient(circle, rgba(180,160,235,0.45), transparent 70%)",
        }}
      />
      <div
        className="orb w-96 h-96 -bottom-24 -left-20"
        style={{
          background:
            "radial-gradient(circle, rgba(140,212,184,0.38), transparent 70%)",
        }}
      />
      <div
        className="orb w-72 h-72 top-1/3 left-1/3"
        style={{
          background:
            "radial-gradient(circle, rgba(142,196,236,0.28), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div className="z-10 order-2 md:order-1">
          <motion.p {...fadeUp(0.2)} className="section-eyebrow">
            ✦ Welcome to my portfolio
          </motion.p>

          <motion.h1
            {...fadeUp(0.4)}
            className="font-display text-6xl font-light leading-[1.05] text-ink mb-6"
          >
            {personal.nameFirst}{" "}
            <em className="italic text-lav-500">{personal.nameLast}</em>
          </motion.h1>

          <motion.p {...fadeUp(0.6)} className="text-lg font-light text-ink-2 mb-2 h-7">
            <span>{typed}</span>
            <span className="cursor-blink" aria-hidden="true" />
          </motion.p>

          <motion.p
            {...fadeUp(0.75)}
            className="text-sm leading-relaxed text-ink-2 max-w-md mb-12 mt-4"
          >
            {personal.bio}
          </motion.p>

          <motion.div {...fadeUp(0.9)} className="flex gap-4 flex-wrap">
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </button>
            <a
              href={personal.cvUrl}
              download
              className="btn-outline"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex justify-center items-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Morphing blob */}
            <div
              className="w-[320px] h-[400px] md:w-[380px] md:h-[480px] animate-morph relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #d4caf4, #b8d8f4, #b8e4d0)",
                boxShadow: "0 30px 80px rgba(124,107,191,0.22)",
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.4) 0%, transparent 55%)",
                }}
              />

              {/* Photo or placeholder */}
              {personal.photo ? (
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="w-full h-full object-cover relative z-10"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-3">
                  <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center text-4xl shadow-sm">
                    🧑‍💻
                  </div>
                  <span className="text-xs text-ink-2 opacity-70 tracking-wide">
                    Your Photo Here
                  </span>
                </div>
              )}
            </div>

            {/* Floating Badge — Open to work */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 glass rounded-2xl px-4 py-2.5 flex items-center gap-2 text-xs font-medium text-ink shadow-sm z-20"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-lav-400 to-mint-300 inline-block" />
              Open to work
            </motion.div>

            {/* Floating Badge — Projects */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 glass rounded-2xl px-4 py-2.5 text-xs font-medium text-ink shadow-sm z-20"
            >
              🗃️ 3+ Projects
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
