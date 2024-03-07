const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    plugins: [nextui()],
  }