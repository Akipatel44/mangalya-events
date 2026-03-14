import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A227",
          light: "#D4B44A",
          dark: "#A8861E",
        },
        maroon: {
          DEFAULT: "#5A0F1C",
          light: "#7A1F2E",
          dark: "#3E0A13",
        },
        beige: {
          DEFAULT: "#FFF8F0",
          dark: "#F5EDE0",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
