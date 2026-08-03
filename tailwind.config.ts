import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          50: "#F7F7F8",
          100: "#EDEDEF",
          200: "#DCDCE0",
          300: "#B8B8C0",
          400: "#8A8A94",
          500: "#63636D",
          600: "#48484F",
          700: "#333338",
          800: "#1E1E21",
          900: "#111113",
          950: "#0A0A0B",
        },
        accent: {
          DEFAULT: "#2563EB",
          50: "#EFF4FF",
          100: "#DBE6FE",
          400: "#5B8DEF",
          500: "#2563EB",
          600: "#1D4FC4",
          700: "#1A3F9E",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 1.875rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, white 90%), linear-gradient(to right, rgba(10,10,11,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,11,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 48px 48px, 48px 48px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
