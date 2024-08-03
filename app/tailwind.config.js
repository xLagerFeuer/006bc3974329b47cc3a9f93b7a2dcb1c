/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // Optionally use just in time engine
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      colors: {
        'bg': "#F3F5F4"
      }
    },
  },
  plugins: [],
}