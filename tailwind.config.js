/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: colors.slate,
      accent: '#61c7c9',
    },
    extend: {},
  },
  plugins: [],
}

