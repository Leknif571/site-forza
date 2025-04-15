const {heroui} = require("@heroui/react");
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
      ".flowbite-react\\class-list.json"
    ],
    theme: {
      extend: {},
      fontFamily : {
        robot : ["Anta", "sans-serif"],
        titlef : ["Jura", "sans-serif"],
        nbold : ["Palanquin Dark"]
      }
    },
    darkMode: "class",
    plugins: [heroui(), flowbiteReact],
  }