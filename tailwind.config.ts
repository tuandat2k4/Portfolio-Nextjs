import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: { DEFAULT: "1rem", md: "2rem" },
    },
    extend: {
      boxShadow: {
        'primary': '0 0 20px 1px rgba(0, 122, 255, 0.3)',
      }, 
      colors: {
        primary: "#007AFF",
        secondary: "#6B7280",
        dark: "#1F2937",
        light: "#F9FAFB",
        text: "#000000",
        bg: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"], // <-- THAY FONT
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
