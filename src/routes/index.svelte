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
    .hero {
      padding-bottom: 200px;
    height: 105vh;
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
      <a href="projects" class="px-12 py-6 mt-8 text-2xl tracking-wider">
        My Projects
      </a>
    </div>
    <figure>
      <img src="Portraits16-9.jpg" alt="Aaron Wilder smiling in a suit" />
    </figure>

  </div>

  {/if}
</section>
<section class="py-32">
  <div class="pb-20 mx-auto inner-wrapper">
    <h2 class="pb-3 text-2xl font-medium uppercase border-b-4 text-secondary border-article">Featured Project</h2>
    <article class="flex">
      <figure>
        <img src="esc.png" alt="e.s.c. mattress center"/>
      </figure>
      <div>
        <h3>E.S.C. Mattress Center</h3>
        <p>A local bedding company's web site designed to help customers find information on sleep health and find the best sleep solutions for their needs</p>  
      </div>
    </article>
    </div>
  </section>
