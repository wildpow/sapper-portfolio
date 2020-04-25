<script>
  import Headline from '../components/Headline.svelte';
  import Footer from '../components/Footer.svelte';
  import Copyright from '../components/Copyright.svelte';

  import Pen from '../components/icons/Pen_Icon.svelte';
  import Desktop from '../components/icons/Desktop_Icon.svelte';
  import Code from '../components/icons/Code_Icon.svelte';
</script>

<svelte:head>
  <title>Skills</title>
</svelte:head>

<Headline
  headline="My Skills"
  tagline="Everything I offer with a detailed overview of each." />
<section class="flex flex-col py-12 md:py-24">
  <div class="pb-5 mx-auto sm:pb-20 inner-wrapper">
    <div class="flex flex-col justify-between w-full">
      <div class="h-full skills">
        <div
          class="flex flex-col rounded-md md:flex-row md:justify-between bg-figure_projects border-t-6 border-blue"
          style="padding: 10%">
          <span class="icon-span text-blue">
            <Desktop width={200} styles="max-width: 128px;" />
          </span>

          <div class=" md:max-w-lg">
            <h3
              class="text-2xl font-normal leading-tight md:text-5xl text-projects">
              Web Development
            </h3>
            <div class="mt-4 md:mt-8">
              <h4
                class="text-xl font-normal leading-5 md:text-3xl text-projects">
                HTML / CSS
              </h4>
              <p
                class="mt-4 text-lg font-light leading-relaxed md:text-xl text-list">
                Creating a strong foundation for a website means getting the
                HTML and CSS architecture right. If you've got a design I can
                create the front-end code for it.
              </p>
            </div>
            <div class="mt-4 md:mt-8">
              <h4
                class="text-xl font-normal leading-5  md:text-3xl text-projects">
                React
              </h4>
              <p
                class="mt-4 text-lg font-light leading-relaxed md:text-xl text-list">
                bla bla bla
              </p>
            </div>
            <div class="mt-4 md:mt-8">
              <h4
                class="text-xl font-normal leading-5 md:text-3xl text-projects">
                Performance
              </h4>
              <p
                class="mt-4 text-lg font-light leading-relaxed md:text-xl text-list">
                Having a fast website is key to keeping people around which
                ultimately converts them into customers. There are a myriad of
                techniques involved in making a fast website, all of which I've
                spent years learning. I build these techniques into every site I
                code and can also offer this as a standalone service for
                existing websites.
              </p>
            </div>
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
