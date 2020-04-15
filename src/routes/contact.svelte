<script>
  import Headline from '../components/Headline.svelte';
  import Copyright from '../components/Copyright.svelte';
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<Headline
  headline="Contact Me"
  tagline=" If you’d like to chat about a project please fill in the form below
  and I’ll get back within 1-2 days." />
<section class="py-12 md:py-24 lg:py-32">
  <div class="mx-auto section--small">
    <div
      style="padding: 8%"
      class="text-center rounded-md border-blue border-t-6 bg-figure_projects">
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

<Copyright />

<style>
  .section--small {
    max-width: 925px;
    width: 92%;
  }
</style>
