/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./src/pages/*.html",
    "./src/index.html",
    "./src/public/assets/map.js",
  ],
  theme: {
    listStyleType: {
      none: "none",
      decimal: "decimal",
      square: "square",
    },
    screens: {
      "3xl": "1920px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["ristretto", ...defaultTheme.fontFamily.sans],
        copy: ["Arial, Helvetica, sans-serif"],
      },
    },
  },
  safelist: ["ya-gray-pane"],
  plugins: [],
};
