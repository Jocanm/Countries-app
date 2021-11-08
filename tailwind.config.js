const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
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