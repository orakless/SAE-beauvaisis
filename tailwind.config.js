/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "src/*.{html}",
      "src/scripts/*.{ts,js}",
      "./templates/*.html"
  ],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Inria Sans', 'ui-sans-serif', 'sans-serif']
        },
        width: {
            'fullWmargin': "calc(100% - 16px)"
        }
    },
  },
  plugins: [],
}

