<script>
  import Nav from '../components/Nav.svelte';
  export let segment;
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  /* rubik-300 - latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local('Rubik Light'), local('Rubik-Light'),
       url('../fonts/rubik-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/rubik-v9-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* rubik-regular - latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), local('Rubik-Regular'),
       url('../fonts/rubik-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/rubik-v9-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* rubik-500 - latin */
@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Rubik Medium'), local('Rubik-Medium'),
       url('../fonts/rubik-v9-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/rubik-v9-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}




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
