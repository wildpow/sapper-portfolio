<script>
  import Mail from './icons/Mail_Icon.svelte';
  import Git from './icons/Github_Icon.svelte';
  import LinkedIn from './icons/LinkedIn_Icon.svelte';
  import Twitter from './icons/Twitter.svelte';
</script>

<style>
  section {
    clip-path: polygon(0 0, 100% 100px, 100% 100%, 0 100%);
  }
  .inner-box {
    max-width: 1200px;
    width: 92%;
  }
</style>

<section class="pt-40 bg-primary">
  <div class="py-40 mx-auto leading-none inner-box">
    <div class="flex flex-wrap">
      <div class="flex flex-col w-2/3">
        <div class="pb-10 ">
          <h2 class="text-5xl font-normal leading-tight text-white">
            Let's work Together
          </h2>
          <p class="mt-5 text-2xl leading-relaxed text-white opacity-50">
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
      <div class="w-1/3">
        <ul class="font-light leading-none">
          <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4 text-blue"><Mail width={24}/></span><a href="mailto:aaron.s.wilder@gmail.com?subject=Let's work together.">aaron@gmail.com</a></li>
            <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4 text-blue"><Git width={24}/></span><a href="https://github.com/wildpow">on Github</a></li>
            <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4 text-blue "><LinkedIn width={24}/></span><a href="https://www.linkedin.com/in/aaronswilder/">on LinkedIn</a></li>
            <li class="flex items-center mb-8 text-xl font-medium leading-none tracking-wide uppercase text-secondary" style="margin-bottom: 30px"><span class="mr-4 text-blue"><Twitter width={24}/></span><a href="https://twitter.com/awildair">on twitter</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<footer class="flex justify-center bg-primary" style="background-color: #101114;">
  <div class="max-w-4xl py-10 my-auto text-center ">
    <p class="text-lg leading-none text-list">© 2020 Aaron Wilder. All rights reserved. </p>
  </div>
</footer>