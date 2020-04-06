<script>
  export let open = false;
</script>

<style>
  aside {
    top: -200vh;
    transition: all 0.3s ease-in-out;
    height: 100vh;
    opacity: 0;
  }

  .open {
    top: 83px;
    opacity: 1;
  }
  nav {
    padding: 40px 4% 4%;
  }
</style>

<aside class="absolute w-full h-full bg-white" class:open>
  <nav class="text-xl ">
    <a
      class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
      href="#about">
      About
    </a>
    <a
      class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
      href="#contact">
      Contact
    </a>
  </nav>
</aside>
