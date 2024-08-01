/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/main.js",
    "./src/App.vue",
    "./src/components/GithubCard.vue",
    "./postcss.config.js",
    "./vite.config.js",
    "./src/style.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
