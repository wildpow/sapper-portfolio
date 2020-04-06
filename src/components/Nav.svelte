<script>
  import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import Hamburger from './mobile-nav/Hamburger.svelte';
  import Sidebar from './mobile-nav/Sidebar.svelte';
  import Brand from './Brand.svelte';
  
	export let segment;
  let visible = false;
  let open = false;
	onMount(()=> {
		visible = true
	});
</script>

<style>
  li:not(:last-child) {
    margin-right: 50px;
  }
  nav ul a {
    @apply text-2xl font-light text-primary no-underline tracking-wider;
    transition: all ease 0.3s;
    position: relative;
  }
  nav ul a::before {
    transform: translateX(-50%);
    width: 20%;
    height: 6px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    opacity: 0;
    pointer-events: none;
    content: "";
    border-radius: 6px;
		background: #4b6cc1;
		transition: all ease 0.3s;  }
  nav ul :global(a):hover {
    color: white;
	}
	nav ul :global(a):hover::before{
  width: 70%;
  opacity: 1;
}

</style>

{#if visible}
<header class="absolute z-10 w-full" style={`background-color: ${open ? '#fff' : '#191a1d'}`}>
  <div style="border-color: rgba(255, 255, 255, 0.1)" class="flex items-center justify-between pt-5 pb-5 mx-auto border-b-2 border-solid md:pb-12 md:pt-16 inner-wrapper md:border-none" in:fly="{{ y: -100, duration: 1000, opacity: 0.1, easing: quintOut }}">
   <Brand bind:open {segment}/>
    <Hamburger bind:open={open}/>
    <nav class="hidden lg:block">
      <ul class="flex">
        <li>
					<a aria-current='{segment === "projects" ? "page" : undefined}' href='projects'>Projects</a>
        </li>
        <li>
          <a aria-current='{segment === "about" ? "page" : undefined}' href='about'>About</a>
        </li>
        <li>
          <a aria-current='{segment === "services" ? "page" : undefined}' href='services'>Services</a>
        </li>
        <li>
          <a aria-current='{segment === "contact" ? "page" : undefined}' href='contact'>Contact</a>
        </li>
      </ul>
    </nav>
  </div>
  <Sidebar bind:open/>
</header>
{/if}
