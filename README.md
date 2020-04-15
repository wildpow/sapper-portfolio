# My Portfolio

Made with [Sapper](https://github.com/sveltejs/sapper) and exported as a static site.

- CSS: [Tailwind css](https://tailwindcss.com/).
- CSS compiler: [PostCSS](https://postcss.org/).
- CSS linting: [Stylelint](https://stylelint.io/).
- Code linting: [Eslint](https://eslint.org/).
- Formatting: [Prettier](https://prettier.io/).
- Images processing: [Svelte-image](https://github.com/matyunya/svelte-image).
- Based on [sapper-template-rollup](https://github.com/sveltejs/sapper-template-rollup) templete.

### Running the project

```bash
git clone https://github.com/wildpow/sapper-portfolio.git
cd sapper-portfolio
npm install
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## Structure

Sapper expects to find two directories in the root of your project — `src` and `static`.

### src

The [src](src) directory contains the entry points for your app — `client.js`, `server.js` and (optionally) a `service-worker.js` — along with a `template.html` file and a `routes` directory.
