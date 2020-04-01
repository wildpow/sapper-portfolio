<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  body {
    font-family: 'Rubik', 'Arial', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  @media screen and (max-width: 1920px) {
    .inner-wrapper {
      max-width: 1430px;
      width: 92%;
    }
  }
  @media screen and (min-width: 1921px) {
    .inner-wrapper {
      max-width: 1200px;
      max-width: 1430px;
    }
  }
  .page-banner {
    padding-top: 90px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
    @apply bg-primary pb-32;
  }
  @media screen and (min-width: 768px) {
    .page-banner {
      padding-top: 131px;
    }
  }
  .heading__tagLine {
    @apply text-7xl text-white;
  }
  .heading__desciption {
    @apply mt-8 text-3.5xl font-light text-primary;
  }
</style>

<!--  section {
    width: 92%;
    margin-right: auto;
    margin-left: auto;
  }-->
<Nav {segment} />

<main>
  <slot />
</main>
