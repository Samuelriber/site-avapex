/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:   '#0B1121',
          yellow: '#F5C518',
          steel:  '#1E2A3A',
          dust:   '#F0EDE8',
          iron:   '#8A8F98',
        },
      },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        dm:     ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
