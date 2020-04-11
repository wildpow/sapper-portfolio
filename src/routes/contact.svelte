<svelte:head>
  <title>Contact</title>
</svelte:head>
<section class="page-banner md:pt-32 md:pb-24">
  <div
    class="flex flex-col justify-center py-12 mx-auto text-center sm:py-24 lg:py-32 fadeIn inner-wrapper section--small">
    <div>
      <h1
        class="text-4xl font-normal leading-none text-center text-white md:text-6xl lg:text-7xl ">
        Contact Me
      </h1>
      <h2
        class="mt-6 text-xl font-light leading-snug text-primary sm:mt-8 sm:text-3xl md:text-4xl">
        If you’d like to chat about a project please fill in the form below and
        I’ll get back within 1-2 days.
      </h2>
    </div>
  </div>
</section>
<section class="py-12 md:py-24 lg:py-32">
  <div class="mx-auto section--small">
    <div
      style="padding: 8%"
      class="text-center rounded-lg border-blue border-t-6 bg-figure_projects">
      <div>
        <h2>
          <span class="text-xl leading-none md:text-3xl lg:text-4xl">
            Status
          </span>
          <br />
          <span class="mt-5 text-blue lg:mt-6 lg:text-5xl">Available</span>
        </h2>
        <p class="mt-5 text-2xl font-light leading-none lg:mt-6">
          I'm currently looking for new projects from
          <strong>January 2019</strong>
        </p>
      </div>
    </div>
  </div>
  <div class="mx-auto section--small">
    <form action="">
      <div>
        <div>
          <label for="">Name</label>
        </div>
        <div>
          <label for="">email</label>
        </div>
        <div>
          <label for="">How can I help?</label>
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </div>
    </form>
  </div>
</section>

<footer
  class="flex justify-center bg-primary"
  style="background-color: #101114;">
  <div class="max-w-4xl py-5 text-center md:py-10 ">
    <p class="font-light leading-none tracking-normal md:text-lg text-list">
      © 2020 Aaron Wilder. All rights reserved.
    </p>
  </div>
</footer>

<style>
  .section--small {
    max-width: 925px;
    width: 92%;
  }
</style>
