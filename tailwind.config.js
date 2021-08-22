module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'dark': {'raw': '(prefers-color-scheme: dark)'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
