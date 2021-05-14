const tailwindcssTextshadow = require('tailwindcss-textshadow');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fateBlue: {
          DEFAULT: '#1B75BC',
          dark: '#15598F',
          darker: '#0D436D',
          darkest: '#063255',
        },
        fateGray: {
          light: '#ccc',
        },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindcssTextshadow],
};
