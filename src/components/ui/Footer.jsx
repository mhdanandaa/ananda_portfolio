// components/ui/Footer.jsx
import React from "react";
import { personal } from "../../data/portfolio";

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="py-10 px-12 bg-cream border-t border-lav-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-light text-lav-600">
          {personal.name}.
        </div>

        <p className="text-xs text-ink-3">
          © {new Date().getFullYear()} — Crafted with 🌸🌸🌸
        </p>

        <div className="flex gap-6">
          {["hero", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-xs text-ink-3 hover:text-lav-500 transition-colors capitalize"
            >
              {id === "hero" ? "Top" : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
