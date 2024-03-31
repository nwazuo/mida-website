
const theme = require('./theme').default

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: theme.screens,
      fontFamily: theme.fontFamily
    },
  },
  plugins: [],
}

