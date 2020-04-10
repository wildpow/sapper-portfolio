<script>
  import Nav from '../components/Nav.svelte';
  export let segment;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  /* h1,h2,h3,h4,h6 {
    @apply leading-none;
  } */
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fadeIn {
    animation-name: fadeIn;
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-delay: 150ms;
  }
  .page-banner {
    padding-top: 84px;
    padding-bottom: 50px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 50px));
    @apply bg-primary;
  }
  @media screen and (min-width: 640px) {
    .page-banner {
      /* padding-top: 126px; */
      padding-bottom: 100px;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
    }
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
