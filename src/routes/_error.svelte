<script>
  import Copyright from '../components/Copyright.svelte';
  export let status;
  export let error;
  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>
<section class="flex h-screen">
  <div
    class="flex flex-col justify-center py-12 mx-auto text-center sm:py-24 lg:py-32 fadeIn wrapper__large section--small">
    <div>
      <h1 class="leading-none error">{status}</h1>
      <h2 class="mt-6 leading-none error sm:mt-8">{error.message}</h2>
      {#if dev && error.stack}
        <pre>{error.stack}</pre>
      {/if}
    </div>
  </div>
</section>

<Copyright />

<style>
  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
  .error {
    font-size: 5rem;
    color: transparent;
    /* font-variant: small-caps; */
    background: radial-gradient(
      circle,
      #f48fb1 0%,
      #ce93d8 20%,
      #b2ebf2 40%,
      #a5d6a7 60%,
      #b39ddb 100%
    );
    background-size: 400%;
    -webkit-background-clip: text;
    animation: gradient 10s linear infinite alternate;
  }
  @media screen and (min-width: 670px) {
    .error {
      font-size: 10rem;
    }
  }
  .section--small {
    max-width: 925px;
    width: 92%;
  }
  section {
    @apply bg-primary;
  }
</style>
