const tailwindcssTextshadow = require('tailwindcss-textshadow');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        fateBlue: {
          DEFAULT: '#1B75BC',
          dark: '#15598F',
          darker: '#0D436D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindcssTextshadow],
};
