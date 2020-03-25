<script>
  import { Link } from "svelte-routing";
</script>

<style>
  @media screen and (max-width: 1920px) {
    .inner-wrapper {
      max-width: 1430px;
      width: 92%;
    }
  }
  li:not(:last-child) {
    margin-right: 50px;
  }
  nav ul :global(a) {
    @apply text-2xl;
  }
  .brand :global(a) {
    @apply text-4xl;
  }
</style>

<header class="bg-primary">
  <div class="flex justify-between mx-auto inner-wrapper">
    <div class="brand">
      <Link class="text-6xl" to="/">AARON WILDER</Link>
    </div>
    <nav>
      <ul class="flex">
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
