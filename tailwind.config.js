module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#191a1d',
      secondary: '#5e5e5e',
    }),
    fontFamily: {
      body: ['Rubik', 'Arial', 'sans-serif'],
    },
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#ababab',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
