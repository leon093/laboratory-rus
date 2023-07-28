/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./src/pages/*.html", "./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ristretto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
