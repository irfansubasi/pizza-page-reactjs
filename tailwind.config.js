/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellowC: 'var(--yellow-color)',
        greyDarkC: 'var(--grey-dark-color)',
        greyLightC: 'var(--grey-light-color)',
        redC: 'var(--red-color)',
        beigeC: 'var(--beige-color)',
        whiteC: 'var(--white-color)',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        satisfy: ['Satisfy', 'sans-serif'],
        quattrocento: ['Quattrocento', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
