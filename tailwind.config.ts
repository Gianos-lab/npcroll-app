import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Clean and Modern" Palette
        npc: {
          dark: "#17252A",      // Blu scuro principale
          teal: {
            dark: "#2B7A78",    // Turchese scuro
            DEFAULT: "#3AAFA9", // Turchese medio (accent)
          },
          light: "#DEF2F1",     // Azzurro chiarissimo
          white: "#FEFFFF",     // Bianco puro
        },
        // Alias per retrocompatibilità
        primary: {
          DEFAULT: "#3AAFA9",
          dark: "#2B7A78",
          light: "#5FC4BE",
        },
        surface: {
          dark: "#17252A",
          DEFAULT: "#FFFFFF",
          elevated: "#FAFBFC",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Germania One', 'system-ui'],
      },
      keyframes: {
        "in": {
          "0%": { transform: "translateY(calc(100% + var(--offset, 0px)))", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "out": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(calc(100% + var(--offset, 0px)))", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        // Shadcn/ui compatibility
        "fade-in-0": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out-0": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "zoom-in-95": {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "zoom-out-95": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
        "slide-in-from-top-2": {
          "0%": { transform: "translateY(-0.5rem)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom-2": {
          "0%": { transform: "translateY(0.5rem)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left-2": {
          "0%": { transform: "translateX(-0.5rem)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right-2": {
          "0%": { transform: "translateX(0.5rem)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "in": "in 0.2s ease-out",
        "out": "out 0.2s ease-in",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-in",
        "zoom-in": "zoom-in 0.2s ease-out",
        "zoom-out": "zoom-out 0.2s ease-in",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.2s ease-out",
        // Shadcn/ui compatibility
        "fade-in-0": "fade-in-0 0.2s ease-out",
        "fade-out-0": "fade-out-0 0.2s ease-in",
        "zoom-in-95": "zoom-in-95 0.2s ease-out",
        "zoom-out-95": "zoom-out-95 0.2s ease-in",
        "slide-in-from-top-2": "slide-in-from-top-2 0.2s ease-out",
        "slide-in-from-bottom-2": "slide-in-from-bottom-2 0.2s ease-out",
        "slide-in-from-left-2": "slide-in-from-left-2 0.2s ease-out",
        "slide-in-from-right-2": "slide-in-from-right-2 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tw-animate-css")
  ],
};
export default config;
