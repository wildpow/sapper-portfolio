<script>
  export let headline = 'Test Test Test';
  export let tagline = 'Short description of this page.';
</script>

<section class="page-banner md:pt-32 md:pb-24">
  <div
    class="flex flex-col justify-center py-12 mx-auto text-center sm:py-24 lg:py-32 fadeIn section--small">
    <div>
      <h1
        class="text-4xl font-normal leading-none text-center text-white md:text-6xl lg:text-7xl ">
        {headline}
      </h1>
      <h2
        class="mt-6 text-xl font-light leading-snug text-primary sm:mt-8 sm:text-3xl md:text-4xl">
        {tagline}
      </h2>
    </div>
  </div>
</section>

<style>
  .section--small {
    max-width: 925px;
    width: 92%;
  }
</style>
