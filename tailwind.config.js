const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
      '2xl': {'min': '1535px'},
      // => @media (min-width: 1535px) { ... }

      'xl': {'min': '1279px'},
      // => @media (min-width: 1279px) { ... }

      'lg': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }

      'md': {'min': '767px'},
      // => @media (min-width: 767px) { ... }

      'sm': {'min': '639px'},
      // => @media (min-width: 639px) { ... }

      'pq':{'min':'425px'}
    },
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.gray,
        red: colors.red,
        blue: colors.blue,
        yellow: colors.yellow,
        amber: colors.amber,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        purple: colors.purple,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        // cyan: colors.cyan,
        sky: colors.sky,
        white: colors.white,
        indigo: colors.indigo,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        pink: colors.pink,
        rose: colors.rose,
        ca: {
          dark: "hsl(209, 23%, 22%)",
          verydark: "hsl(207, 26%, 17%)",
          darkest: "hsl(200, 15%, 8%)",
          neutro: "hsl(0, 0%, 52%)",
          light: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)"
        }
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
}