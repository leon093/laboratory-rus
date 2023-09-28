/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/pages/*.html", "./src/index.html"],
  theme: {
    listStyleType: {
      none: "none",
      decimal: "decimal",
      square: "square",
    },
    extend: {
      fontFamily: {
        sans: ["ristretto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
