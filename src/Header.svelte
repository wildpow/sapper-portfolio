<script>
  import { Link } from "svelte-routing";
</script>

<style>
  @media screen and (max-width: 1920px) {
    header {
      max-width: 1430px;
    }
  }
</style>

<header class="flex justify-between bg-primary mx-auto">
  <Link to="/">AARON WILDER</Link>
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
</header>
