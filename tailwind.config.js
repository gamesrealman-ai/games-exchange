/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#070b14",
        panel: "#101827",
        panelAlt: "#111827",
        accent: "#8b5cf6",
        accent2: "#22d3ee",
        highlight: "#f59e0b",
        success: "#34d399",
        danger: "#f87171",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 92, 246, 0.3), 0 0 35px rgba(139, 92, 246, 0.25)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
