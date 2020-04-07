<script>
  export let open = false;
  import { fly } from 'svelte/transition';
  import { quintOut, expoInOut, backInOut } from 'svelte/easing';
  export let segment;
</script>

<style>
  aside {
    z-index: 1;
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
    padding: 140px 4% 4%;
  }
</style>

{#if open}
<aside class="absolute w-full h-full bg-white" transition:fly="{{ y: -100, duration: 700, opacity: 0, easing: expoInOut }}">
  <nav class="text-2xl">
    <a aria-current='{segment === "projects" ? "page" : undefined}'
        in:fly="{{ y: -100, duration: 1000, opacity: 0, easing: backInOut }}"
        out:fly="{{ y: -100, duration: 600, opacity: 0, easing: backInOut }}"
        class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
        href="projects"
        style="background-color: transparent;"
    >
      Projects
    </a>
    <a  aria-current='{segment === "about" ? "page" : undefined}'
        in:fly="{{ y: -100, duration: 800, opacity: 0, easing: backInOut }}"
        out:fly="{{ y: -100, duration: 700, opacity: 0, easing: backInOut }}"
        class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
        href="about"
        style="background-color: transparent;"
    >
      About
    </a>
    <a  aria-current='{segment === "services" ? "page" : undefined}'
        in:fly="{{ y: -100, duration: 700, opacity: 0, easing: backInOut }}"
        out:fly="{{ y: -100, duration: 800, opacity: 0, easing: backInOut }}"
        class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
        href='services'
        style="background-color: transparent;"
    >
      Services
    </a>
    <a  aria-current='{segment === "contact" ? "page" : undefined}' 
        in:fly="{{ y: -100, duration: 600, opacity: 0, easing: backInOut }}"
        out:fly="{{ y: -100, duration: 900, opacity: 0, easing: backInOut }}"
        class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
        href='contact'
        style="background-color: transparent;"
    >
      Contact
    </a>
  </nav>
</aside>
{/if}


 

    
 