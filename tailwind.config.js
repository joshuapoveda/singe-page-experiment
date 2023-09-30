/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandLightYellow:"#FCFCF4",
        brandBrightYellow:"#F1DB5F",
        brandDarkYellow:"#E2CD79",
        brandLavender:"#C8BEF9",
        brandNavy:"#040B2F"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}