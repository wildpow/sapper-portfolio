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
  img {
    /* width: 345px;
    height: 510px; */
    max-width: 345px;
    border-radius: 6px;
  }
  @media screen and (min-width: 768px){
    img {
      margin-bottom: -80px;
    }
    section {
      padding-bottom: 200px;
    height: 107vh;
    }
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

<section class="relative page-banner">
  {#if visible}

  <div
    class="flex flex-col items-center justify-around py-4 pb-16 mx-auto inner-wrapper md:flex-row" in:fly="{{ y: 100, duration: 1000, opacity: 0.1, easing: quintOut }}">
    <div class="flex flex-col align-middle">
      <h1 class="heading__tagLine">Hey, I'm Aaron.</h1>
      <h2 class="max-w-md pr-8 heading__desciption">
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

  {/if}
</section>
