const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { maxWidth } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'google': ['Manrope', 'sans-serif'],
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        orange: colors.orange,
        slate: colors.slate,
        zinc: colors.zinc,
        neutral: colors.neutral,
        stone: colors.stone,
        red: colors.red,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        'voilet':'#6b7a8d',
        'voilet-lighter': '#4C7CB4',
        'voilet-dark': '#2D3A4B',
        'violetwarm': '#C43E77',
        'navy': '#0C2443',
        'greencool': '#61D3C9',
        'greencoollight': '#9de4dd',
        'greencooldark': '#29958b',
        'bluecool': '#172F51',
        'bluecoollight': '#344971',
        'bluecooldark': '#4F6175',
        'bluecoolgreen': '#CCFDF9',
        'cyanblue': '#587192',
        'cyanbluedark': '#133463',
      },
      // borderWidth: {
      //   DEFAULT: '1px',
      //   '0': '0',
      //   '2': '2px',
      //   '3': '3px',
      //   '4': '4px',
      //   '6': '6px',
      //   '8': '8px',
      // },
      maxWidth: {
        '1': '10%',
        '2': '20%',
        '3': '30%',
        '4': '40%',
      },
    },
  },
  variants: {},
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './public/index.html',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
