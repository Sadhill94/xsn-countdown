const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      'heading-xxl': '4.5rem', // 45px,
      'sm-heading-xxl': '3.3rem', // 33px

      'heading-xl': '3.3rem', // 33px
      'sm-heading-xl': '2.8rem', // 28px

      'heading-lg': '2.5rem', // 25px
      'sm-heading-lg': '2.3rem', // 23px

      'heading-md': '2rem', // 20px
      'sm-heading-md': '1.8rem', // 18px

      'heading-sm': '1.8rem', // 18px
      'sm-heading-sm': '1.6rem', // 16px

      'body-lg': '1.6rem', // 16px
      'body-md': '1.4rem', // 14px
      'body-sm': '1.2rem', // 12px
      'body-xs': '1rem', // 10px
    },
    fontFamily: {
      heading: ['Rubik', 'sans-serif'],
      body: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1366px',
      xxl: '1920px',
    },
    extend: {
      colors: {
        primary: '#090d1c', // darker
        secondary: '#0f1223', // lighter
        tertiary: '#989dcc',
      },
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.vue'],
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
