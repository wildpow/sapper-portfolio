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
  .page-banner {
    padding-top: 90px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
    @apply bg-primary pb-32;
  }
  @media screen and (min-width: 768px) {
    .page-banner {
      padding-top: 180px;
    }
  }
  .heading__tagLine {
    @apply text-4xl text-6xl text-white;
  }
  .heading__desciption {
    @apply mt-5 text-3xl font-light text-primary;
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
