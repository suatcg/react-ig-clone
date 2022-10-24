/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      fill: (theme) => ({
        red: theme('colors.red.primary'),
      }),
      white: '#fff',
      blue: {
        medium: '#005c98',
      },
      black: {
        light: '#005c8',
        faded: '#0000059',
      },
      gray: {
        base: '#616161',
        backgroud: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        primary: '#ed4956',
      },
    },
  },
  plugins: [],
};
