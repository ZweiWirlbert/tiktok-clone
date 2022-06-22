/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      pink: 'rgba(254, 44, 85, 1.0)',
      lightGrey: 'rgba(22,24,35,0.12)',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
