const tailwindcss = require('tailwindcss')
const atImport = require('postcss-import')
const autoprefixer = require('autoprefixer')

const cssnano = require('cssnano')({
  preset: 'default',
})

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
  plugins: [
    atImport,
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
  ],
}
