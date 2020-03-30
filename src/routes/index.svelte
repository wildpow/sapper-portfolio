<style>
  img {
    /* width: 345px;
    height: 510px; */
    max-width: 345px;
    margin-bottom: -80px;
    border-radius: 6px;
  }
  a {
    background: #4b6cc1;
    color: white;
    border-radius: 1000px;
    align-self: start;
    transition: all ease 0.3s;
  }
  a:hover {
    -webkit-transform: scale(1.075);
    transform: scale(1.075);
    -webkit-box-shadow: inset 0 0 0 2px #4b6cc1;
    box-shadow: inset 0 0 0 2px #4b6cc1;
    background: none;
    color: #4b6cc1;
  }
  section {
    padding-top: 211px;
    padding-bottom: 200px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 100px));
  }
  figure {
    background: #121316;
    border-radius: 6px;
    padding: 40px;
    margin-bottom: 40px;
  }
</style>

<svelte:head>
  <title>Aaron Wilder</title>
</svelte:head>

<section class="relative flex bg-primary">
  <div
    class="flex items-center justify-around py-4 pb-16 mx-auto inner-wrapper">
    <div class="flex flex-col pr-8 align-middle">
      <h1 class="text-6xl text-white ">Hey, I'm Aaron.</h1>
      <h2 class="max-w-md mt-8 text-3xl font-light text-primary">
        Web developer from Everett, WA. I create custom websites to help
        businesses do better online.
      </h2>
      <a href="projects" class="px-12 py-6 mt-8 text-2xl tracking-wider">
        My Projects
      </a>
    </div>
    <figure>
      <img src="aaron.jpg" alt="Aaron Wilder smiling in a suit" />
    </figure>

  </div>
</section>
