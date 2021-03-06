<script>
  import { onMount, onDestroy } from 'svelte';
  import Image from 'svelte-image';
  import { fly, fade } from 'svelte/transition';
  import { flown } from '../components/store.js';
  import Pen from '../components/icons/Pen_Icon.svelte';
  import Desktop from '../components/icons/Desktop_Icon.svelte';
  import Code from '../components/icons/Code_Icon.svelte';
  import Footer from '../components/Footer.svelte';
  import Copyright from '../components/Copyright.svelte';
  import Quote from '../components/Quote.svelte';

  let visible = false;

  onMount(() => (visible = true));
  onDestroy(() => flown.set(true));

  function flyOnce(node, ...params) {
    if ($flown === true) {
      return;
    } else {
      return fly(node, ...params);
    }
  }
</script>

<svelte:head>
  <title>Aaron Wilder</title>
  <meta
    name="description"
    content="Aaron Wilder's portfolio for web development." />
  <meta
    name="keywords"
    content="Svelte, Sapper, Javascript, React, Gatsby, CSS, HTML, Web
    Developer, Front-end developer" />
</svelte:head>

<section class="relative page-banner hero">
  {#if visible}
    <div
      class="flex flex-col items-center justify-between py-12 mx-auto md:py-20 wrapper-md md:flex-row lg:py-24"
      in:flyOnce={{ y: 100, duration: 1000 }}>
      <div
        class="flex flex-col w-full md:pr-4 bg-primary lg:pt-10"
        in:fade={{ duration: 150 }}
        out:fade={{ duration: 150 }}>
        <h1
          class="text-4xl leading-none text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Hey, I'm Aaron.
        </h1>
        <h2
          class="mt-4 text-2xl font-light md:mt-8 text-primary md:text-3xl lg:text-35xl">
          Web developer from Everett, WA. I create custom websites to help
          businesses do better online.
        </h2>
        <a
          href="projects"
          class="self-start px-8 py-5 mt-8 text-2xl leading-none tracking-wider text-white rounded-full md:px-12 md:py-6 md:text-3xl hero__button bg-button_blue">
          My Projects
        </a>
      </div>
      <div class="w-full">
        <figure
          class="p-4 mt-0 mt-10 mb-4 rounded-md md:mb-12 md:p-10 bg-figure_hero hero__img"
          transition:fade={{ duration: 150 }}>
          <div class="-mb-10 rounded-md md:-mb-20 lg:-mb-24">
            <Image
              wrapperClass="rounded-md"
              placeholderClass="rounded-md"
              src="images/new.jpg"
              alt="Aaron in smiling in a suit"
              class="rounded-md" />
          </div>
        </figure>
      </div>
    </div>
  {/if}
</section>
<section class="py-12 lg:py-24">
  <div class="pb-5 mx-auto sm:pb-20 wrapper-lg">
    <div class="pb-8 md:pb-12">
      <h2
        class="pb-4 text-xl font-medium leading-none tracking-wider uppercase border-b-4 md:text-2xl text-secondary border-article">
        Featured Project
      </h2>
    </div>
    <article class="flex flex-col justify-between mx-auto lg:flex-row">
      <div class="max-w-4xl lg:w-3/5">
        <figure
          class="p-4 mt-0 mb-4 rounded-md md:mt-10 md:mb-12 md:p-10 bg-figure_projects">
          <a href="projects" aria-label="Link to featured project">
            <div class="-mb-10 rounded-md md:-mb-20 lg:-mb-24 esc-project">
              <Image
                src="images/new_esc.png"
                alt="e.s.c. mattress center"
                class="rounded-md esc-project"
                wrapperClass="rounded-md"
                placeholderClass="rounded-md" />
            </div>
          </a>
        </figure>
      </div>
      <div
        class="flex flex-col content-center justify-center px-4 mt-10 align-middle lg:w-2/6">
        <h3
          class="text-3xl font-normal leading-none md:text-5xl text-projects"
          style="line-height: 115%">
          <a class="project__link" href="projects">E.S.C. Mattress</a>
        </h3>
        <p
          class="mt-5 text-xl font-light leading-relaxed md:text-2xl lg:mt-8 text-list">
          A complete online-presents and marketing solution for a local bedding
          company designed to drive retail business.
        </p>
        <div class="pt-6 md:pt-10">
          <ul>
            <li
              class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase md:text-xl text-secondary"
              style="margin-bottom: 30px">
              <span class="mr-3 md:mr-4">
                <Pen width={24} />
              </span>
              SEO Champain
            </li>
            <li
              class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase md:text-xl text-secondary"
              style="margin-bottom: 30px">
              <span class="mr-3 md:mr-4">
                <Desktop width={24} />
              </span>
              Web Design
            </li>
            <li
              class="flex items-center font-medium leading-none tracking-wide uppercase md:text-xl text-secondary"
              style="margin-bottom: 30px">
              <span class="mr-3 md:mr-4">
                <Code width={24} />
              </span>
              Gatsby Development
            </li>
          </ul>
        </div>
        <div class="pt-6 md:pt-10">
          <a
            href="projects"
            class="self-start px-6 py-5 text-lg tracking-wider text-white rounded-full md:text-2xl md:px-8 md:py-6 md:mt-8 hero__button bg-button_blue">
            View Case Study
          </a>
        </div>
      </div>
    </article>
  </div>
</section>
<Quote />
<section class="flex flex-col py-12 md:py-24">
  <div class="pb-5 mx-auto sm:pb-20 wrapper-lg">
    <div class="pb-8 sm:pb-12">
      <h2
        class="pb-4 text-xl font-medium leading-none tracking-wider uppercase border-b-4 md:text-2xl text-secondary border-article">
        My Skills
      </h2>
    </div>
    <div class="flex flex-col justify-between w-full md:flex-row">
      <div class="mb-8 skills md:mb-0">
        <div
          class="min-h-full text-center rounded-md bg-figure_projects border-t-6 border-blue"
          style="padding: 10%">
          <span class="icon-span text-blue">
            <Pen width={52} styles="margin:auto;" />
          </span>
          <div class="text-center ">
            <h3
              class="text-2xl font-normal leading-tight md:text-4xl text-projects">
              Web Design
            </h3>
            <h4
              class="mt-4 text-xl font-light leading-relaxed md:mt-5 md:text-2xl text-projects">
              User Focused
            </h4>
            <p
              class="mt-4 text-lg font-light leading-relaxed md:mt-5 md:text-2xl text-list">
              A website should be designed for the people who will use it, so
              that's exactly what I do. User focused design should be the
              primary goal of any website.
            </p>
          </div>
        </div>
      </div>
      <div class="h-full skills">
        <div
          class="min-h-full text-center rounded-md bg-figure_projects border-t-6 border-blue"
          style="padding: 10%">
          <span class="icon-span text-blue">
            <Desktop width={52} styles="margin:auto;" />
          </span>
          <div class="text-center ">
            <h3
              class="text-2xl font-normal leading-tight md:text-4xl text-projects">
              Web Development
            </h3>
            <h4
              class="mt-4 text-xl font-light leading-relaxed md:mt-5 md:text-2xl text-projects">
              Responsive and Fast
            </h4>
            <p
              class="mt-4 text-lg font-light leading-relaxed md:mt-5 md:text-2xl text-list">
              Every website should be built with two primary goals: Firstly, it
              needs to work across all devices. Secondly, it needs to be fast as
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-10 mx-auto ">
    <a
      href="skills"
      class="self-start px-6 py-5 text-lg tracking-wider text-white rounded-full md:text-2xl md:px-8 md:py-6 md:mt-8 hero__button bg-button_blue">
      View All Skills
    </a>
  </div>
</section>
<Footer />
<Copyright />

<style>
  .project__link {
    transition: opacity 0.3s ease;
  }
  .project__link:hover {
    opacity: 0.5;
  }
  .hero__img {
    max-width: 100%;
    max-height: 100%;
  }
  .hero {
    min-height: 932px;
  }
  @media screen and (min-width: 768px) {
    .hero {
      min-height: 974px;
      padding-bottom: 100px;
    }
    .hero__img {
      margin-left: auto;
      max-width: 421px;
    }
  }
  @media screen and (min-width: 1024px) {
    .hero {
      min-height: 1010px;
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
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }

  .icon-span {
    transform: rotate(50%);
  }
  .icon-span::after {
    margin: 40px auto;
    width: 100%;
    height: 6px;
    display: block;
    content: ' ';
    border-radius: 1000px;
    background-color: #4b6cc1;
    max-width: 30px;
  }
  @media screen and (min-width: 640px) {
    .icon-span::after {
      margin: 30px auto;
    }
  }
  .skills {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .skills {
      width: 48.1%;
    }
  }
</style>
