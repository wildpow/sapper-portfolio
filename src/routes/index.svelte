<script>
  import { onMount,onDestroy} from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fly, fade, slide } from 'svelte/transition';
  import {flown} from '../components/store.js';
  import Pen from "../components/icons/Pen_Icon.svelte";
  import Desktop from "../components/icons/Desktop_Icon.svelte";
  import Code from "../components/icons/Code_Icon.svelte";
  import Footer from '../components/Footer.svelte';
  import Quote from '../components/Quote.svelte';

  let visible = false;
	onMount(() => visible = true);

onDestroy(() => flown.set(true))

function flyOnce(node,...params) {
    if($flown === true) {
      return
    } else {
      return fly(node, ...params)
    }
  }
</script>

<style>
  .hero__img {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: -30px;
  }
  .hero {
    min-height: 932px;
  }
  @media screen and (min-width: 768px){
    .hero__img {
    max-width: 325px;
    max-height: 491px;
  }
    img {
      margin-bottom: -80px;
    }
    .hero {
      min-height: 974px;
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
.icon-span {
  transform: rotate(50%);
}
.icon-span::after {
  margin: 40px auto;
  width: 100%;
  height: 6px;
  display: block;
  content: " ";
  border-radius: 1000px;
  background-color: #4b6cc1;
  max-width: 30px;
}
.services {
  width: 48.1%;
}
@media screen and (max-width: 640px){
  .services {
    width: 100%;
  }
}
</style>

<svelte:head>
  <title>Aaron Wilder</title>
</svelte:head>

<section class="relative page-banner hero">
  {#if visible}
  <div 
    class="flex flex-col items-center justify-between py-12 mx-auto sm:py-20 md:py-24 inner-wrapper-hero lg:flex-row" in:flyOnce="{{ y: 100, duration: 1000 }}">
    <div class="flex flex-col lg:pr-20 "in:fade="{{duration: 150}}" out:fade="{{duration: 150}}">
      <h1 class="leading-none heading__tagLine sm:text-6xl lg:text-7xl">Hey, I'm Aaron.</h1>
      <h2 class="heading__desciption sm:text-3xl md:3.5xl">
        Web developer from Everett, WA. I create custom websites to help
        businesses do better online.
      </h2>
      <a href="projects" class="self-start px-8 py-5 mt-8 text-2xl leading-none tracking-wider text-white rounded-full md:px-12 md:py-6 md:text-3xl hero__button bg-button_blue">
        My Projects
      </a>
    </div>
    <figure class="p-4 mt-0 mt-10 mb-4 rounded-md md: md:mb-12 md:p-12 bg-figure_hero" transition:fade="{{duration: 150}}">
      <picture>
        <source type="image/jpeg" srcset="newPort/aaron-w404.jpg 1x, newPort/aaron-w808.jpg 2x" media="(min-width: 901px)">
        <source type="image/webp" srcset="newPort/aaron-w404.webp 1x, newPort/aaron-w808.webp 2x" media="(min-width: 901px)">
        
          <source type="image/jpeg" srcset="newPort/aaron-mobile_w315_1x.jpg 1x, newPort/aaron-mobile_w630_2x.jpg 2x" media="(max-width: 375px)">
          <source type="image/webp" srcset="newPort/aaron-mobile_w315_1x.webp 1x, newPort/aaron-mobile_w630_2x.webp 2x" media="(max-width: 375px)">
            
            <source type="image/jpeg" srcset="newPort/aaron-tablet_1x_w_768.jpg 1x, newPort/aaron-tablet_2x_w_1536.jpg 2x" media="(max-width: 900px) and (min-width: 376px)">
              <source type="image/webp" srcset="newPort/aaron-tablet_1x_w_768.webp 1x, newPort/aaron-tablet_2x_w_1536.webp 2x" media="(max-width: 900px) and (min-width: 376px)">
        
          <img
            src="newPort/aaron-w404.jpg"
            alt="e.s.c. mattress center"
            class="rounded-md hero__img"
          >
        </picture>
    </figure>

  </div>

  {/if}
</section>
<section class="py-12 md:py-24">
  <div class="pb-5 mx-auto  sm:pb-20 inner-wrapper">
    <div class="pb-8 sm:pb-12">
      <h2 class="pb-4 text-xl font-medium leading-none tracking-wider uppercase border-b-4 sm:text-2xl text-secondary border-article">Featured Project</h2>
    </div>
    <article class="flex flex-col justify-between mx-auto md:flex-row">
      <div class="max-w-4xl md:w-3/5">
        <figure class="p-4 mb-4 rounded-md sm:mb-10 sm:p-10 bg-figure_projects">
          <a href="projects">
            <picture>
              <source type="image/webp" srcset="new_esc.webp" media="(min-width: 276px)">
                <img
                  src="new_esc.png"
                  alt="e.s.c. mattress center"
                  class="-mb-8 rounded-md esc-project"
                >
              </picture>
          </a>
        </figure>
      </div>
      <div class="flex flex-col content-center justify-center pl-4 pr-4 mt-8 align-middle md:w-2/6">
        <h3 class="text-3xl font-normal leading-none sm:text-5xl text-projects" style="line-height: 115%">
          <a href="projects">E.S.C. Mattress</a>
        </h3>
        <p class="mt-5 text-xl font-light leading-relaxed sm:text-2xl text-list">A complete online-presents and marketing solution for a local bedding company designed to drive retail business.</p>  
        <div class="pt-6 sm:pt-10">
          <ul>
            <li class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase sm:text-xl text-secondary" style="margin-bottom: 30px"><span class="mr-4"><Pen width={24}/></span>SEO Champain</li>
            <li class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase sm:text-xl text-secondary" style="margin-bottom: 30px"><span class="mr-4"><Desktop width={24}/></span>Web Design</li>
            <li class="flex items-center font-medium leading-none tracking-wide uppercase sm:text-xl text-secondary" style="margin-bottom: 30px"><span class="mr-4"><Code width={24}/></span>Gatsby Development</li>
          </ul>
        </div>
        <div class="pt-6 sm:pt-10">
          <a href="projects" class="self-start px-6 py-5 text-lg tracking-wider text-white rounded-full sm:text-2xl sm:px-8 sm:py-6 sm:mt-8 hero__button bg-button_blue">View Case Study</a>
        </div>
      </div>
    </article>
    </div>
  </section>

<Quote />
<section class="py-12 md:py-24">
  <div class="pb-20 mx-auto inner-wrapper">
    <div class="pb-12">
      <h2 class="pb-4 text-2xl font-medium leading-none tracking-wider uppercase border-b-4 text-secondary border-article">My Services</h2>
    </div>
      <div class="flex flex-col justify-between w-full md:flex-row">
        <div class="services">
          <div class="min-h-full text-center rounded-md bg-figure_projects border-t-6 border-blue" style="padding: 10%">
            <span class="icon-span text-blue"><Pen width={52} styles="margin:auto;"/></span>
            <div class="text-center ">
              <h3 class="text-4xl font-normal leading-tight text-projects">Web Design</h3>
              <h4 class="mt-5 text-2xl leading-relaxed text-projects">User Focused</h4>
              <p class="mt-5 text-2xl leading-relaxed ">
				A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.
              </p>
            </div>
          </div>
        </div>
        <div class="services">
          <div class="min-h-full text-center rounded-md bg-figure_projects border-t-6 border-blue" style="padding: 10%">
            <span class="icon-span text-blue"><Desktop width={52} styles="margin:auto;"/></span>
            <div class="text-center ">
              <h3 class="text-4xl font-normal leading-tight text-projects">Web Development </h3>
              <h4 class="mt-5 text-2xl leading-relaxed text-projects">Responsive and Fast</h4>
              <p class="mt-5 text-2xl leading-relaxed ">Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
<Footer />