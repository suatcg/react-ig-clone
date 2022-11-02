/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
    }),
    extend: {},
    colors: {
      white: '#fff',
      blue: {
        medium: '#005c98',
      },
      black: {
        light: '#262626',
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
