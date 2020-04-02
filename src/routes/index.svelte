<script>
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fly, fade } from 'svelte/transition';
  
  
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
    max-width: 325px;
    max-height: 491px;
  }
  @media screen and (min-width: 768px){
    img {
      margin-bottom: -80px;
    }
    .hero {
      padding-bottom: 100px;
   
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

  @media screen and (max-width: 1920px) {
.inner-wrapper-hero {
    max-width: 1200px;
    width: 92%;
}
  }
@media screen and (min-width: 1921px) {
  .inner-wrapper-hero {
    max-width: 1200px;
    width: 92%;
}
}
  
</style>

<svelte:head>
  <title>Aaron Wilder</title>
</svelte:head>

<section class="relative page-banner hero" style="min-height: 974px;">
  {#if visible}

  <div 
    class="flex flex-col items-center justify-between py-12 mx-auto sm:py-20 md:py-24 inner-wrapper-hero md:flex-row" in:fly="{{ y: 100, duration: 1000 }}">
    <div class="flex flex-col pr-20 " in:fade>
      <h1 class="leading-none heading__tagLine">Hey, I'm Aaron.</h1>
      <h2 class="heading__desciption">
        Web developer from Everett, WA. I create custom websites to help
        businesses do better online.
      </h2>
      <a href="projects" class="self-start px-12 py-6 mt-8 text-2xl leading-none tracking-wider text-white rounded-full md:text-3xl hero__button bg-button_blue">
        My Projects
      </a>
    </div>
    <figure class="p-12 mb-12 rounded-md bg-figure_hero">
      <img class="rounded-md hero__img" src="Portraits-new.jpg" alt="Aaron Wilder smiling in a suit" />
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
            <picture>
              <source 
                type="image/webp" 
                srcset="esc/esc_w200.webp 200w,
                        esc/esc_w241.webp 241w,
                        esc/esc_w276.webp 276w,
                        esc/esc_w346.webp 346w,
                        esc/esc_w355.webp 355w,
                        esc/esc_w766.webp 766w" 
                sizes="(max-width: 766px) 100vw, 766px" />
                <source 
                srcset="esc/esc_w200.png 200w,
                        esc/esc_w241.png 241w,
                        esc/esc_w276.png 276w,
                        esc/esc_w346.png 346w,
                        esc/esc_w355.png 355w,
                        esc/esc_w766.png 766w" 
                sizes="(max-width: 766px) 100vw, 766px" />
              <img
                src="esc/esc_w766.png"
                alt="e.s.c. mattress center"
                class="rounded-md esc-project"
              >
              </picture>
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
          <a href="projects" class="self-start px-8 py-6 mt-8 text-2xl tracking-wider text-white rounded-full hero__button bg-button_blue">View Case Study</a>
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
