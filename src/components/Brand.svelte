<script>
  import { createEventDispatcher } from 'svelte';
  export let open = false;
  export let segment;

  const dispatch = createEventDispatcher();

  function handleMenuClose() {
    dispatch('closeEvent', { open: false });
  }
</script>

<div class="brand">
  <a
    class="text-2xl font-medium leading-none tracking-wider text-white no-underline md:text-3xl"
    aria-current={segment === undefined ? 'page' : undefined}
    href="."
    on:click={handleMenuClose}
    class:open>
    AARON WILDER
  </a>
</div>

<style>
  .brand a:after {
    transition: max-width ease 0.3s;
    margin-top: 10px;
    width: 100%;
    max-width: 38px;
    height: 6px;
    display: block;
    content: '';
    border-radius: 1000px;
    background: #4b6cc1;
  }
  .brand a:hover:after {
    max-width: 22px;
  }
  .open {
    color: #191a1d;
    /* background-color: white; */
  }
  .brand a {
    transition: all 0.3s ease-in-out;
  }
</style>
