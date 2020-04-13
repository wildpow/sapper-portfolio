<script>
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import Hamburger from './mobile-nav/Hamburger.svelte';
  import Sidebar from './mobile-nav/Sidebar.svelte';
  import Brand from './Brand.svelte';

  export let segment;
  let visible = false;
  let open = false;

  function handleScroll(data) {
    open = data.detail.open;
  }
  function handleClick(data) {
    open = data.detail.open;
  }

  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <header class="absolute z-10 w-full" class:navOpen={open === true}>
    <div
      style="border-color: rgba(255, 255, 255, 0.1)"
      class="flex items-center justify-between py-5 mx-auto border-b-2 border-solid wapper md:py-10 inner-wrapper"
      in:fly={{ y: -100, duration: 1000, opacity: 0.1, easing: quintOut }}>
      <Brand bind:open {segment} />
      <div class="hamburger">
        <Hamburger bind:open />
      </div>
      <nav class="hidden">
        <ul class="flex">
          <li>
            <a
              class:selected={segment === 'projects'}
              aria-current={segment === 'projects' ? 'page' : undefined}
              href="projects">
              Projects
            </a>
          </li>
          <li>
            <a
              class:selected={segment === 'about'}
              aria-current={segment === 'about' ? 'page' : undefined}
              href="about">
              About
            </a>
          </li>
          <li>
            <a
              class:selected={segment === 'services'}
              aria-current={segment === 'services' ? 'page' : undefined}
              href="services">
              Services
            </a>
          </li>
          <li>
            <a
              class:selected={segment === 'contact'}
              aria-current={segment === 'contact' ? 'page' : undefined}
              href="contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
{/if}
<Sidebar
  bind:open
  {segment}
  on:message={handleScroll}
  on:linkClick={handleClick} />

<style>
  @media screen and (orientation: landscape) and (max-width: 800px) {
    .navOpen {
      @apply shadow-md;
    }
  }
  .navOpen {
    background-color: white;
  }
  @media screen and (min-width: 900px) {
    .hamburger {
      display: none;
    }
    nav {
      display: block;
    }
    .wapper {
      @apply pb-12 pt-16 border-none;
    }
  }
  li:not(:last-child) {
    margin-right: 50px;
  }
  nav ul a {
    @apply text-2xl font-light text-primary no-underline tracking-wider;
    transition: all ease 0.3s;
    position: relative;
  }
  nav ul a::before {
    transform: translateX(-50%);
    width: 20%;
    height: 6px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    opacity: 0;
    pointer-events: none;
    content: '';
    border-radius: 6px;
    background: #4b6cc1;
    transition: all ease 0.3s;
  }
  nav ul a:hover {
    color: white;
  }
  nav ul a:hover::before {
    width: 70%;
    opacity: 1;
  }
  header {
    transition: all 600ms linear;
  }
  .selected::before {
    width: 70%;
    opacity: 1;
  }
  .selected {
    color: white;
  }
</style>
