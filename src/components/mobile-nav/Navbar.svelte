<script>
  import Logo from './Logo.svelte';
  import Hamburger from './Hamburger.svelte';
  import Menu from './Menu.svelte';

  export let sidebar = false;
</script>

<header
  class="flex items-center justify-between p-2 bg-gray-200 border-b-2 text-grey-600">
  <nav class="flex">
    <Hamburger bind:open={sidebar} />
    <Logo />
  </nav>
  <Menu />
</header>
