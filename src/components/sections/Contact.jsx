// components/sections/Contact.jsx
import React from "react";
import RevealWrapper from "../ui/RevealWrapper";
import { personal } from "../../data/portfolio";

const LINKS = [
  { label: "Email Me", icon: "✉️", href: `mailto:${personal.email}` },
  { label: "LinkedIn", icon: "💼", href: personal.linkedin },
  { label: "GitHub", icon: "🐙", href: personal.github },
];

export default function Contact() {
  return (
    <section id="contact" className="py-36 px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <RevealWrapper>
          <div
            className="rounded-[2.5rem] p-20 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #e8e2f8 0%, #d4eaf8 50%, #d8f0e8 100%)",
            }}
          >
            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Glow blobs */}
            <div
              className="absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(180,160,230,0.5), transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-40"
              style={{
                background:
                  "radial-gradient(circle, rgba(140,212,184,0.45), transparent 70%)",
                filter: "blur(40px)",
              }}
            />

            <div className="relative z-10">
              <p className="section-eyebrow">✦ Let's Connect</p>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-ink leading-tight mb-5">
                Let's build something{" "}
                <em className="italic text-lav-500">beautiful</em> together
              </h2>
              <p className="text-sm text-ink-2 mb-12 max-w-md mx-auto leading-relaxed">
                Terbuka untuk project baru dan kolaborasi soal web development.
                Feel free to reach out!
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-ink transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.8)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.97)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px rgba(124,107,191,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.85)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
