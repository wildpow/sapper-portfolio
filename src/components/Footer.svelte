<script>
  import Mail from './icons/Mail_Icon.svelte';
  import Git from './icons/Github_Icon.svelte';
  import LinkedIn from './icons/LinkedIn_Icon.svelte';
  import Twitter from './icons/Twitter.svelte';
</script>

<section class="pt-12 md:pt-40 bg-primary">
  <div class="pt-12 pb-12 mx-auto leading-none md:py-40 inner-box">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col md:w-2/3">
        <div class="pb-6 md:pb-10">
          <h2 class="text-3xl font-normal leading-tight text-white md:text-5xl">
            Let's work Together
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-light md:text-2xl">
            Have a project you'd like to discuss?
          </p>
        </div>
        <a
          href="/contact"
          class="self-start px-8 py-6 text-2xl tracking-wider text-white rounded-full hero__button bg-button_blue">
          Get in Touch
        </a>
        <div />
      </div>
      <div class="mt-8 md:w-1/3 md:mt-0">
        <ul class="font-light leading-none">
          <li
            class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase md:text-xl text-light"
            style="margin-bottom: 30px">
            <span class="mr-4 text-blue">
              <Mail width={24} />
            </span>
            <a
              class="footer__link"
              href="mailto:aaron.s.wilder@gmail.com?subject=Let's work together.">
              aaron@gmail.com
            </a>
          </li>
          <li
            class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase md:text-xl text-light"
            style="margin-bottom: 30px">
            <span class="mr-4 text-blue">
              <Git width={24} />
            </span>
            <a class="footer__link" href="https://github.com/wildpow">
              on Github
            </a>
          </li>
          <li
            class="flex items-center mb-8 font-medium leading-none tracking-wide uppercase md:text-xl text-light"
            style="margin-bottom: 30px">
            <span class="mr-4 text-blue ">
              <LinkedIn width={24} />
            </span>
            <a
              class="footer__link"
              href="https://www.linkedin.com/in/aaronswilder/">
              on LinkedIn
            </a>
          </li>
          <li
            class="flex items-center font-medium leading-none tracking-wide uppercase md:text-xl text-light">
            <span class="mr-4 text-blue">
              <Twitter width={24} />
            </span>
            <a class="footer__link" href="https://twitter.com/awildair">
              on twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .footer__link {
    transition: color 0.3s ease;
  }
  .footer__link:hover {
    color: white;
  }
  section {
    clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  }
  @media screen and (max-width: 670px) {
    section {
      clip-path: polygon(0 0, 100% 50px, 100% 100%, 0 100%);
    }
  }
  .inner-box {
    max-width: 1200px;
    width: 92%;
  }
  .hero__button {
    transition: all ease 0.3s;
  }
  .hero__button:hover {
    transform: scale(1.075);
    box-shadow: inset 0 0 0 2px #4b6cc1;
    background: none;
    color: #4b6cc1;
  }
</style>
