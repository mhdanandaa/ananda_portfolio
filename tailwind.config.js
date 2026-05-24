/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        instrument: ["'Instrument Serif'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        lav: {
          50: "#f5f2fd",
          100: "#e8e2f8",
          200: "#d4caf4",
          300: "#b8aae8",
          400: "#9b8ed4",
          500: "#7c6bbf",
          600: "#6355a8",
          700: "#4e4289",
        },
        mint: {
          100: "#d8f0e8",
          200: "#b8e4d0",
          300: "#8ed4b8",
          400: "#5bbfa0",
        },
        sky: {
          100: "#d4eaf8",
          200: "#b8d8f4",
          300: "#8ec4ec",
        },
        rose: {
          100: "#f4dce8",
          200: "#ecc8d8",
        },
        cream: "#faf8f4",
        ink: {
          DEFAULT: "#2c2840",
          2: "#5c546a",
          3: "#8c849a",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-mid": "floatMid 4.5s ease-in-out infinite",
        "morph": "morphShape 8s ease-in-out infinite",
        "blink": "blink 1s infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        floatSlow: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatMid: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        morphShape: {
          "0%,100%": { borderRadius: "40% 60% 50% 70% / 50% 40% 60% 50%" },
          "25%": { borderRadius: "55% 45% 65% 35% / 45% 60% 40% 55%" },
          "50%": { borderRadius: "45% 55% 40% 60% / 60% 45% 55% 40%" },
          "75%": { borderRadius: "60% 40% 55% 45% / 40% 55% 45% 60%" },
        },
        blink: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        fadeUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
