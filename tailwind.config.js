/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'home-pattern': "url('Data/img/HomeBg.jpg')"
      },
      colors: {
           'greener': '#38d552',
        }
    },
  },
  plugins: [],
}