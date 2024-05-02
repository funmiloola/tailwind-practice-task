/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['roboto']
      },
      colors: {
        primary: ' #316FF6',
        secondary:'#13cf13'
      }
    },
  },
  plugins: [],
}

