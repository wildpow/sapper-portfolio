<script>
  import { fly } from 'svelte/transition';
  import { createEventDispatcher, beforeUpdate, onMount } from 'svelte';
  import { expoInOut, backInOut } from 'svelte/easing';
  import { jsUcfirst } from '../../utils.js';

  export let segment;
  export let open = false;
  const dispatch = createEventDispatcher();
  let y;

  function handleMenuClose() {
    dispatch('closeEvent', { open: false });
  }

  let menuItems = [
    { id: 1, name: 'projects' },
    { id: 2, name: 'about' },
    { id: 3, name: 'services' },
    { id: 4, name: 'contact' },
  ];

  const mediaQueryHandler = e => {
    if (!e.matches) {
      dispatch('message', { open: false });
    }
  };
  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 900px)');
    mediaListener.addListener(mediaQueryHandler);
    return () => removeEventListener(mediaListener);
  });

  beforeUpdate(() => {
    if (y > 0 && open) handleMenuClose();
  });
</script>

<svelte:window bind:scrollY={y} />
{#if open}
  <aside
    class="absolute w-full h-full bg-white"
    transition:fly={{ y: -100, duration: 600, opacity: 0, easing: expoInOut }}>
    <nav class="h-full overflow-y-scroll text-2xl">
      {#each menuItems as { id, name }, i}
        {#if open}
          <a
            class:selected={segment === name}
            aria-current={segment === { name } ? 'page' : undefined}
            on:click={handleMenuClose}
            in:fly={{ y: -100, duration: 600, delay: i * 100, easing: backInOut }}
            out:fly={{ y: -100, duration: 300, delay: i * 25, easing: backInOut }}
            class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
            href={name}
            style="background-color: transparent;">
            {jsUcfirst(name)}
          </a>
        {/if}
      {/each}
    </nav>
  </aside>
{/if}

<style>
  .selected {
    @apply border-blue text-projects;
  }
  aside {
    z-index: 1;
    height: 100vh;
  }
  nav {
    padding: 140px 4% 4%;
  }
  @media screen and (min-width: 768px) and (orientation: portrait) {
    nav {
      height: auto;
    }
    aside {
      height: auto;
    }
    /* nav a {
      font-size: 2rem;
    } */
  }
  @media screen and (orientation: landscape) and (max-width: 800px) {
    nav {
      padding: 110px 4% 4%;
    }
  }
  nav a {
    transition: all 0.2s ease;
  }
  nav a:hover {
    @apply text-blue;
    transform: scale3d(1, 1.05, 1);
  }
  nav a:last-child {
    border-style: none;
  }
</style>
