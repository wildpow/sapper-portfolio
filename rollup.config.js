import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from '@mapgrid/sapper/config/rollup.js'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const tailwind = require('./tailwind.config.js')
// const cssnano = require('cssnano')({
//   preset: 'default',
// })
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.svelte'],
  // Include any special characters you're using in this regular expression
  extractors: [
    {
      extractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],

      // Specify the file extensions to include when scanning for
      // class names.
      extensions: ['svelte'],
    },
  ],
  // Whitelist selectors to stop Purgecss from removing them from your CSS.
  whitelist: ['html', 'body'],
})

const preprocessDev = sveltePreprocess({
  postcss: {
    plugins: [
      require('tailwindcss')(tailwind),
      // require('postcss-import')(),
      // require('postcss-url')(),
      // require('autoprefixer'),
      require('postcss-preset-env')({
        /* use stage 3 features + css nesting rules */
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      }),
    ],
  },
})
const preprocessProd = sveltePreprocess({
  postcss: {
    plugins: [
      require('tailwindcss')(tailwind),
      // require('postcss-import')(),
      // require('postcss-url')(),
      // require('autoprefixer'),
      require('postcss-preset-env'),
      purgecss,
      // cssnano,
    ],
  },
})
let preprocess = dev ? preprocessDev : preprocessProd

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)
// const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        preprocess,
        emitCss: true,
        dev,
        hydratable: true,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        preprocess,
        generate: 'ssr',
        emitCss: true,
        dev,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
}
