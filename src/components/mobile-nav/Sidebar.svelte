<script>
  export let open = false;
  import { fly } from 'svelte/transition';
  import { quintOut, expoInOut, backInOut } from 'svelte/easing';
</script>

<style>
  aside {
    /* top: -200vh;
    transition: all 0.3s ease-in-out; */
    height: 100vh;
    /* opacity: 0; */
  }

  /* .open {
    top: 83px;
    opacity: 1;
  } */
  nav {
    padding: 40px 4% 4%;
  }
</style>

{#if open}
<aside class="absolute w-full h-full bg-white" transition:fly="{{ y: -100, duration: 500, opacity: 0, easing: expoInOut }}">
  <nav class="text-xl ">
    <a in:fly="{{ y: -100, duration: 600, opacity: 0, easing: backInOut }}"
    out:fly="{{ y: -100, duration: 100, opacity: 0, easing: backInOut }}"
      class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
      href="#about">
      About
    </a>
    <a in:fly="{{ y: -100, duration: 700, opacity: 0, easing: backInOut }}"
    out:fly="{{ y: -100, duration: 200, opacity: 0, easing: backInOut }}"
      class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
      href="#contact">
      Contact
    </a>
  </nav>
</aside>
{/if}