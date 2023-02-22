/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

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
