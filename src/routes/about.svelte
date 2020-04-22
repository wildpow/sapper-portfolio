<script>
  import Image from 'svelte-image';

  import Headline from '../components/Headline.svelte';
  import Footer from '../components/Footer.svelte';
  import Copyright from '../components/Copyright.svelte';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Headline
  headline="About Me"
  tagline="Find out who I am, where I'm from and what I'm all about." />
<section
  class="py-10 mx-auto sm:pt-20 md:py-24 "
  style="width: 92%; max-width: 925px;">

  <h2 class="text-5xl font-normal leading-tight ">Who I Am</h2>
  <p class="mt-5 text-2xl font-light leading-relaxed lg:mt-8 text-list">
    I'm a web developer based in Everett, WA.
  </p>
  <p class="mt-5 text-xl font-light leading-relaxed lg:mt-8 text-list">
    After over ten years in the sales and customer service industries, I decided
    to make a career change and pursue my dream of becoming a software engineer.
  </p>
  <p class="mt-5 text-xl font-light leading-relaxed lg:mt-8 text-list">
    After completing Lambda School's nine-month computer science program and
    subsequent three months paid team-lead role, I landed at a local mattress
    company designing and implementing their
    <a
      href="/projects"
      class="transition-all duration-300 ease-in border-b-2 border-transparent border-solid hover:border-blue text-blue">
      JAMStack application
    </a>
    .
  </p>
  <div class="flex flex-col mt-10 md:flex-row md:justify-between">
    <div class="imgWrapper">
      <figure class="w-full ">
        <Image
          src="images/family.jpg"
          alt="My family todether on thanksgiving"
          class="bg-white rounded-md shadow-2xl"
          wrapperClass="rounded-md bg-white shadow-2xl"
          placeholderClass="rounded-md bg-white shadow-2xl" />
        <figcaption
          class="mt-10 text-lg leading-normal text-center text-secondary">
          My favorite people.
        </figcaption>
      </figure>
    </div>
    <div class="imgWrapper">
      <figure class="w-full ">
        <Image
          src="images/ninja3.jpg"
          alt="My cat, Mr. Dr. Ninja Tiger being a lazy stud."
          class="bg-white rounded-md shadow-2xl"
          wrapperClass="rounded-md bg-white shadow-2xl"
          placeholderClass="rounded-md bg-white shadow-2xl" />

        <figcaption
          class="mt-10 text-lg leading-normal text-center text-secondary">
          Mr. Dr. Ninja Tiger
        </figcaption>
      </figure>
    </div>
  </div>
  <hr class="h-1 border-none lg:mt-24 bg-figure_projects md:mt-16" />
  <h2
    class="font-normal leading-tight lg:mt-24 sm:text-5xl text-projects md:mt-16 md:text">
    Why Work With Me
  </h2>
  <p class="mt-5 text-2xl font-light leading-relaxed lg:mt-8 text-list">
    There’s nothing I enjoy more than designing and developing good websites for
    nice people. It really is that simple.
  </p>
  <p class="mt-5 text-2xl font-light leading-relaxed lg:mt-8 text-list">
    I’ve spent many years trying to perfect what I do and while I’ll never be
    perfect, I do my best to come close.
  </p>
  <p class="mt-5 text-2xl font-light leading-relaxed lg:mt-8 text-list">
    If you’ve got a project you’d like to work on with me just get in touch and
    we can get to work!
  </p>
</section>
<Footer />
<Copyright />

<style>
  .imgWrapper {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    .imgWrapper {
      width: 48.5%;
    }
  }
</style>
