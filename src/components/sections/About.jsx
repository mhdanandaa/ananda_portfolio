// components/sections/About.jsx
import React from "react";
import { motion } from "framer-motion";
import RevealWrapper from "../ui/RevealWrapper";
import SectionHeader from "../ui/SectionHeader";
import { personal } from "../../data/portfolio";

const details = [
  {
    icon: "🎓",
    title: "Pendidikan",
    text: `${personal.degree} — ${personal.university}. Memiliki minat pada pengembangan front-end modern dan data visualization. Aktif mengembangkan proyek berbasis web untuk menciptakan pengalaman pengguna yang interaktif, responsif, dan informatif.`,
  },
  {
    icon: "🎨",
    title: "Front-End Development",
    text: "Berfokus pada pengembangan antarmuka web yang modern, responsif, dan user-friendly menggunakan React.js dan Tailwind CSS.",
  },
  {
    icon: "📊",
    title: "Data Visualization",
    text: "Tertarik mengolah data menjadi visualisasi yang informatif dan mudah dipahami menggunakan Chart.js dan berbagai library visualisasi modern.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-36 px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Who I Am"
          title="A little bit about <em>me</em>"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Profile Card */}
          <RevealWrapper>
            <div
              className="rounded-5xl p-12 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #e8e2f8, #d4eaf8)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.6), transparent)",
                  filter: "blur(30px)",
                }}
              />

              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lav-400 to-lav-600 flex items-center justify-center text-3xl mb-6 shadow-md">
                🌸
              </div>
              <h3 className="font-display text-3xl font-light text-ink mb-1">
                {personal.name}
              </h3>
              <p className="text-sm text-ink-2 mb-6 tracking-wide">
                Front-End Developer · {personal.degree.split(" ")[0]} Student
              </p>
              <p className="text-sm leading-relaxed text-ink-2">{personal.bio}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="tech-badge">📍 {personal.location}</span>
                <span className="tech-badge">🎓 {personal.degree}</span>
                <span className="tech-badge">💡 Creative Problem Solver</span>
              </div>
            </div>
          </RevealWrapper>

          {/* Detail Blocks */}
          <div className="flex flex-col gap-6">
            {details.map((d, i) => (
              <RevealWrapper key={d.title} delay={0.15 * (i + 1)}>
                <div className="card-soft group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lav-200 to-mint-200 flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform">
                    {d.icon}
                  </div>
                  <h4 className="text-base font-medium text-ink mb-2">{d.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-2">{d.text}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
