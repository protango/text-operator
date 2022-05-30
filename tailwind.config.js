module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
