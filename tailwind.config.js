/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
'arise/arise-out/**/*.html'
],
  theme: {
    extend: {},
  },
  plugins: [
require('tailwindcss-animated')
],
}

