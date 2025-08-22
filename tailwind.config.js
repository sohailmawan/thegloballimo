/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'dark-orange': '#F15A29',
        'light-orange': '#F7941D',
        'dark-grey': '#4A4A4A',
        'med-grey': '#8C8C8C',
        'black': '#0D0D0D',
        'white': '#FFFFFF',
        // Secondary Colors
        'ivory-white': '#F9F7F2',
        'beige': '#E6D8C3',
        'light-grey': '#DDDDDD'
      },
      fontFamily: {
        'heading': ['Poppins', 'system-ui', 'sans-serif'],
        'body': ['Lato', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}