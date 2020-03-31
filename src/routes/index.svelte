<script>
  	import { onMount } from 'svelte';
    import { quintOut } from 'svelte/easing';

	import { fly } from 'svelte/transition';
	let visible = false;
	onMount(()=> {
		visible = true
	})

</script>

<style>
  .hero__img {
    /* width: 345px;
    height: 510px; */
    max-width: 345px;
  }
  @media screen and (min-width: 768px){
    img {
      margin-bottom: -80px;
    }
    .hero {
      padding-bottom: 200px;
    height: 105vh;
    }
  }
  .hero__button {
    transition: all ease 0.3s;
  }
  .hero__button:hover {
    transform: scale(1.075);
    box-shadow: inset 0 0 0 2px #4b6cc1;
    background: none;
    color: #4b6cc1;
  }

</style>

<svelte:head>
  <title>Aaron Wilder</title>
</svelte:head>

<!--
  
  figure {
    background: #121316;
  }
  border-radius: 1000px;

--> 

<section class="relative page-banner hero">
  {#if visible}

  <div
    class="flex flex-col items-center justify-around py-4 pb-16 mx-auto inner-wrapper md:flex-row" in:fly="{{ y: 100, duration: 1000, opacity: 0.1, easing: quintOut }}">
    <div class="flex flex-col align-middle">
      <h1 class="heading__tagLine">Hey, I'm Aaron.</h1>
      <h2 class="max-w-md pr-8 heading__desciption">
        Web developer from Everett, WA. I create custom websites to help
        businesses do better online.
      </h2>
      <a href="projects" class="self-start px-12 py-6 mt-8 text-2xl tracking-wider text-white rounded-full hero__button bg-button_blue">
        My Projects
      </a>
    </div>
    <figure class="p-10 mb-10 rounded-md bg-figure_hero">
      <img class="rounded-md hero__img" src="Portraits16-9.jpg" alt="Aaron Wilder smiling in a suit" />
    </figure>

  </div>

  {/if}
</section>
<section class="py-24">
  <div class="pb-20 mx-auto inner-wrapper">
    <div class="pb-12">
      <h2 class="pb-3 text-2xl font-medium uppercase border-b-4 text-secondary border-article">Featured Project</h2>
    </div>
    <article class="flex mx-auto justify-evenly">
      <div class="w-3/5 max-w-3xl">
        <figure class="p-10 mb-10 rounded-md bg-figure_projects">
          <a href="projects">
            <img src="esc.png" alt="e.s.c. mattress center" class="w-full h-auto rounded-md"/>
            </a>
        </figure>
      </div>
      <div class="flex flex-col justify-center w-2/5 align-middle">
        <h3 class="text-5xl font-normal text-projects">
          <a href="projects">E.S.C. Mattress Center</a>
        </h3>
        <p class="pt-4 text-3xl font-light text-secondary">A local bedding company's web site designed to help customers find information on sleep health and find the best sleep solutions for their needs</p>  
      </div>
    </article>
    </div>
  </section>
