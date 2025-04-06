/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        transitionProperty: {
          'colors': 'background-color, border-color, color, fill, stroke',
        },
      },
    },
    plugins: [],
  }