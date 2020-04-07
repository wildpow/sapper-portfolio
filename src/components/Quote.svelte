<script>

</script>

<style>
  .inner__quote::before,
  .inner__quote::after {
    position: absolute;
    content: ' ';
    border-radius: 1000px;
    background-color: #4b6cc1;
    left: 50%;
    width: 60px;
    height: 6px;
    transform: translateX(-50%);
  }
  .inner__quote::before {
    top: 0;
  }
  .inner__quote::after {
    bottom: 0;
  }
  .quotes::before {
    content: open-quote;
  }
  .quotes::after {
    content: close-quote;
  }
  section {
    clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 100px));
    background-size: 600px;
    background-image: url('bg-stripes.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(246, 246, 246);
  }
  @media screen and (max-width: 670px) {
    section {
      background-size: 400px;
      padding-top: 50px;
      padding-bottom: 100px;
      clip-path: polygon(0 0, 100% 50px, 100% 100%, 0 calc(100% - 50px));
    }
  }
</style>

<section class="px-4 sm:px-10 sm:py-24 md:py-24 bg-figure_projects">
  <div class="py-12 mx-auto md:py-32" style="max-width: 925px;">
    <blockquote class="flex flex-col leading-none text-center">
      <div class="relative py-16 inner__quote">
        <p
          class="text-2xl font-light leading-snug text-center sm:text-4xl md:text-5xl text-projects quotes">
          Aaron was instrumental in the development and deployment of our web
          services. We couldn’t have asked for a more professional, friendly, or
          competent developer.
        </p>
      </div>
      <cite class="mt-20 text-lg leading-none sm:text-3xl text-list">
        <img
          style="max-width: 80px;"
          class="mx-auto mb-5 rounded-full"
          src="will.jpg"
          alt="William Wellauer E.S.C. Mattress Center Owner" />

        <strong class="mb-2 not-italic font-medium ">William Wellauer</strong>
        <div class="pt-1 not-italic font-light">
          Owner of
          <a class="text-blue" href="https://www.escmattresscenter.com/">
            E.S.C. Mattress Center
          </a>
        </div>

      </cite>
    </blockquote>

  </div>
</section>
