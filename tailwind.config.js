/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
      },
      colors: {
        'Yellow': '#FFD676',
      },
    },
  },
  plugins: [],
}
