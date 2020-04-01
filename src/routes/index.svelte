<script>
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  
  
	let visible = false;
	onMount(()=> {
    visible = true
	});
  import Pen from "../components/icons/Pen_Icon.svelte";

  import Desktop from "../components/icons/Desktop_Icon.svelte";
  import Code from "../components/icons/Code_Icon.svelte";
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
  .esc-project {
    box-shadow: 0 5px 30px rgba(0,0,0,0.2);
  }
  .section__quote {
    clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 100px));
  }
</style>

<svelte:head>
  <title>Aaron Wilder</title>
</svelte:head>

<!--
  
  width: 92%;
    margin-right: auto;
    margin-left: auto;

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
      <h2 class="pb-4 text-2xl font-medium leading-none tracking-wider uppercase border-b-4 text-secondary border-article">Featured Project</h2>
    </div>
    <article class="flex flex-col justify-between mx-auto md:flex-row">
      <div class="max-w-4xl md:w-3/5">
        <figure class="p-10 mb-10 rounded-md bg-figure_projects">
          <a href="projects">
            <img src="esc.png" alt="e.s.c. mattress center" class="rounded-md esc-project"/>
            </a>
        </figure>
      </div>
      <div class="flex flex-col content-center justify-center align-middle md:w-2/6">
        <h3 class="text-5xl font-normal leading-none text-projects" style="line-height: 115%">
          <a href="projects">E.S.C. Mattress</a>
        </h3>
        <p class="mt-5 text-2xl font-light leading-relaxed text-list">A complete online-presents and marketing solution for a local bedding company designed to drive retail business.</p>  
        <div class="pt-10">
          <ul>
            <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4"><Pen width={24}/></span>SEO Champain</li>
            <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4"><Desktop width={24}/></span>Web Design</li>
            <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4"><Code width={24}/></span>Gatsby Development</li>
          </ul>
        </div>
        <div class="pt-10">
          <a href="projects" class="self-start px-12 py-6 mt-8 text-2xl tracking-wider text-white rounded-full hero__button bg-button_blue">View Case Study</a>
        </div>
      </div>
    </article>
    </div>
  </section>
  <section class="py-24 section__quote bg-figure_projects">
    <div class="py-32 mx-auto">
      <blockquote class="text-center ">
        <p>Aaron is an excellent web designer and needs a quote from Will. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.</p>
      </blockquote>

    </div>
  </section>
