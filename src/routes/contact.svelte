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
      class="mb-20 text-center rounded-md border-blue border-t-6 bg-figure_projects">
      <div>
        <h2>
          <span class="text-xl leading-none md:text-3xl lg:text-4xl">
            Status
          </span>
          <br />
          <span class="mt-5 text-blue md:text-5xl lg:mt-6">Available</span>
        </h2>
        <p class="mt-5 text-2xl font-light leading-none lg:mt-6 text-list">
          I'm currently looking for new projects from
          <strong class="font-medium ">April 2020</strong>
        </p>
      </div>
    </div>
  </div>
  <div class="mx-auto section--small">
    <form method="POST" name="contact" data-netlify="true">
      <div class="flex flex-col">
        <div class="flex flex-col sm:flex-row sm:justify-between">

          <div class="flex flex-col w-full input__wrapper">
            <label
              class="text-lg font-medium uppercase text-secondary sm:pb-4"
              for="">
              Name
            </label>
            <input
              class="h-16 p-6 text-lg rounded-md text-projects"
              style="background-color: #f9f9f9; border: 2px solid #e2e2e2;"
              type="text"
              name="name"
              required />
          </div>
          <div class="flex flex-col w-full input__wrapper">
            <label
              class="text-lg font-medium uppercase text-secondary sm:pb-4"
              for="">
              email
            </label>
            <input
              class="h-16 p-6 text-lg rounded-md text-projects"
              style="background-color: #f9f9f9; border: 2px solid #e2e2e2;"
              type="email"
              name="email"
              required />
          </div>
        </div>
        <div class="flex flex-col w-full sm:mt-10">
          <label
            class="text-lg font-medium uppercase text-secondary sm:pb-4"
            for="">
            How can I help?
          </label>
          <textarea
            class="w-full h-16 p-6 text-lg rounded-md text-projects text-area"
            style="background-color: #f9f9f9; border: 2px solid #e2e2e2;"
            name="message"
            required />
        </div>
        <div class="mx-auto sm:mt-10">
          <button
            type="submit"
            class="self-start px-6 py-5 text-lg tracking-wider text-white rounded-full sm:text-2xl sm:px-8 sm:py-6 sm:mt-8 hero__button bg-button_blue">
            Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
</section>

<Copyright />

<style>
  .hero__button {
    transition: all ease 0.3s;
  }
  .hero__button:hover {
    transform: scale(1.075);
    box-shadow: inset 0 0 0 2px #4b6cc1;
    background: none;
    color: #4b6cc1;
  }
  .section--small {
    max-width: 925px;
    width: 92%;
  }
  @media screen and (min-width: 640px) {
    .text-area {
      min-height: 240px;
    }
    .input__wrapper {
      width: 48.1%;
    }
  }
</style>
