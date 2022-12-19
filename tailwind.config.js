/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'sans' : "Montserrat",
        'outfit' : "Outfit"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
