module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#191a1d',
      secondary: '#5e5e5e',
      figure_hero: '#121316',
      figure_projects: '#f6f6f6',
      button_blue: '#4b6cc1',
    }),
    fontFamily: {
      body: ['Rubik', 'Arial', 'sans-serif'],
    },
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#ababab',
      secondary: '#919191',
      list: '#5e5e5e',
      projects: '#191a1d',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      article: '#f6f6f6',
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
