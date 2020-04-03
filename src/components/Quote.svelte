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
  .section__quote {
    clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 calc(100% - 100px));
    background-size: 600px;
    background-image: url('bg-stripes.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(246, 246, 246);
  }
</style>

<section class="py-24 section__quote bg-figure_projects">
  <div class="py-32 mx-auto" style="max-width: 925px;">
    <blockquote class="flex flex-col leading-none text-center">
      <div class="relative py-16 inner__quote">
        <p
          class="text-5xl font-light leading-snug text-center text-projects quotes">
          Aaron was instrumental in the development and deployment of our web
          services. We couldn’t have asked for a more professional, friendly, or
          competent developer.
        </p>
      </div>
      <cite class="mt-20 text-3xl leading-none text-list">
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
