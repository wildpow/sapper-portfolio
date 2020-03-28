<script>
	export let segment;
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
    transition: color ease 0.3s;
    position: relitive;
    @apply text-xl font-light text-primary no-underline;
    /* color: #ababab; */
  }
  nav ul :global(a)::after {
    transform: translateX(-50%);
    width: 20%;
    height: 6px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    border-radius: 6px;
    background: #4b6cc1;
  }
  nav ul :global(a):hover {
    color: white;
  }
  .brand :global(a) {
    @apply text-2xl font-medium text-white no-underline tracking-wider;
  }
</style>

<header class="bg-primary">
  <div class="flex items-center justify-between py-20 mx-auto inner-wrapper">
    <div class="brand">
      <a class="text-6xl" aria-current='{segment === undefined ? "page" : undefined}' href=".">AARON WILDER</a>
    </div>
    <nav>
      <ul class="flex">
        <li>
					<a aria-current='{segment === "projects" ? "page" : undefined}' href='projects'>projects</a>
        </li>
        <li>
          <a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a>
        </li>
        <li>
					<a aria-current='{segment === "services" ? "page" : undefined}' href='services'>services</a>
        </li>
        <li>
					<a aria-current='{segment === "contact" ? "page" : undefined}' href='contact'>contact</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

