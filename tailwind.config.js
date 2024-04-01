
const theme = require('./src/styles/theme.chakra').sharedThemeValues

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
  corePlugins: {
    preflight: false
  },
  important: true
}

