/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {
    keyframes: {
      title: {
        '0%': {display: 'hidden'},
        '100%': {display: 'block'}
      }
    },
    animation: {
      title: 'title 1s ease-in-out forwards'
    }
  },
  plugins: [],
}

