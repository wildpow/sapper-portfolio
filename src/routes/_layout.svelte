<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<Nav {segment} />

<main>
  <slot />
</main>
