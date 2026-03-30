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
          DEFAULT: "#C9A970",
          light: "#D4B985",
          dark: "#B8956A",
        },
        maroon: {
          DEFAULT: "#4f4e53",
          light: "#59585C",
          dark: "#3D3C40",
        },
        beige: {
          DEFAULT: "#F5F3F0",
          dark: "#E8E6E3",
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
