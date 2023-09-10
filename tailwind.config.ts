import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(255 247 236 / <alpha-value>)",
        secondary: "rgb(201 185 143 / <alpha-value>)",
        terniary: "rgb(180 165 127 / <alpha-value>)",
        neutral: "rgb(34 39 40 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
