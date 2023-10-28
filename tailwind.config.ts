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
        lightColor: "#F6F1F4",
        darkColor: "#333333",
        primary: "#333333",
        hoverColor: "#00000024",
        secondary: "rgb(201 185 143 / <alpha-value>)",
        terniary: "rgb(180 165 127 / <alpha-value>)",
        neutral: "#FFFFFF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
