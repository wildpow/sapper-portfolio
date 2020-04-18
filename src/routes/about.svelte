<script>
  import Headline from '../components/Headline.svelte';
  import Footer from '../components/Footer.svelte';
  import Copyright from '../components/Copyright.svelte';
  let cora = 'new/cora2.jpg';
  let tiffany = 'new/tiffany2.jpg';
  let family = 'new/family.jpg';
  let ninja3 = 'new/ninja3.jpg';
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Headline
  headline="About Me"
  tagline="Find out who I am, where I'm from and what I'm all about." />
<section
  class="pt-10 mx-auto sm:pt-20 md:pt-24"
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
    company designing and implementing their JAMStack application.
  </p>
  <div class="flex justify-between mt-10">
    <div>
      <figure>
        <img src={family} alt="" class="max-w-md" />
        <figcaption
          class="mt-10 text-lg leading-normal text-center text-secondary">
          My favorite people.
        </figcaption>
      </figure>
    </div>
    <div>
      <figure>
        <img src={ninja3} alt="" class="max-w-md" />
        <figcaption
          class="mt-10 text-lg leading-normal text-center text-secondary">
          Mr. Dr. Ninja Tiger
        </figcaption>
      </figure>
    </div>
    <!-- <div class="max-w-sm ">
      <img src={cora} alt="" />
    </div>
    <div class="max-w-sm ">
      <img src={tiffany} alt="" />
    </div> -->
  </div>
  <hr class="h-1 border-none lg:mt-24 bg-figure_projects" />
  <h2 class="font-normal leading-tight  lg:mt-24 lg:text-5xl text-projects">
    Why Work With Me
  </h2>
</section>
<Footer />
<Copyright />
