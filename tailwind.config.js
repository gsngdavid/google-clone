/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        "primary-black": "#171717",
        "primary-gray" : "#202124",
        "secondary-gray" : "#303134",
        "link": "#171717"
      }
    },
  },
  plugins: [],
}

