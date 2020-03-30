<style>
  img {
    /* width: 345px;
    height: 510px; */
    max-width: 345px;
  }
  a {
    background: #4b6cc1;
    color: white;
    border-radius: 1000px;
    align-self: start;
  }
</style>

<svelte:head>
  <title>Aaron Wilder</title>
</svelte:head>

<section class="flex bg-primary">
  <div class="flex items-center justify-around py-16 mx-auto inner-wrapper">
    <div class="flex flex-col align-middle">
      <h1 class="text-6xl text-white ">Hey, I'm Aaron.</h1>
      <h2 class="max-w-md mt-8 text-3xl font-light text-primary">
        Web developer from Everett, WA. I create custom websites to help
        businesses do better online.
      </h2>
      <a href="projects" class="px-12 py-6 mt-8 text-2xl tracking-wider">
        My Projects
      </a>
    </div>
    <img src="aaron.jpg" alt="Aaron Wilder smiling in a suit" />

  </div>
</section>
