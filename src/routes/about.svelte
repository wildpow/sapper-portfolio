<script>
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
  class="pt-10 mx-auto sm:pt-20 md:pt-24"
  style="width: 92%; max-width: 925px;">

  <h2 class="text-5xl font-normal leading-tight ">Who I Am</h2>
  <p class="mt-5 text-2xl font-light leading-relaxed lg:mt-8">
    I'm a web developer based in Everett, WA.
  </p>
  <p>
    After over ten years in the sales and customer service industries, I decided
    to make a career change and pursue my dream of becoming a software engineer.
    After completing Lambda School's nine-month computer science program and
    subsequent three months paid team-lead role, I landed at a local mattress
    company designing and implementing their JAMStack application.
  </p>
  <div class="mt-10">
    <div />
    <div />
  </div>
</section>
<Footer />
<Copyright />
