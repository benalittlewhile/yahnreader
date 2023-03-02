/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

// tailwind includes these color names for backward compatibility, but they can
// be deleted to stop warnings
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      white: "#f2f2f2",
      black: "#222222",
      hnTopOrange: "#ff6600",
    },
    extend: {},
  },
  plugins: [],
};
