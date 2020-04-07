<script>
  export let open = false;
  let y;
  import { fly } from 'svelte/transition';
  import {createEventDispatcher, beforeUpdate} from 'svelte'
  import { quintOut, expoInOut, backInOut } from 'svelte/easing';
  export let segment;
  const dispatch = createEventDispatcher()
  function handleClick() {
    dispatch('message', {open: false})
  }
  let menuItems = [
    {id: 1, name: "projects"},
    {id: 2, name: "about"},
    {id: 3, name: "services"},
    {id: 4, name: "contact"},
  ];

  function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

beforeUpdate(()=> {
  if(y >0 && open) handleClick()
})
</script>

<style>
  aside {
    z-index: 1;
    height: 100vh;
  }
  nav {
    padding: 140px 4% 4%;
  }
</style>

<svelte:window bind:scrollY={y}/>
{#if open}
<aside class="absolute w-full h-full bg-white" transition:fly="{{ y: -100, duration: 600, opacity: 0, easing: expoInOut }}">
  <nav class="text-2xl">{y}
    {#each menuItems as {id, name}, i}
      {#if open}
    <a aria-current='{segment === {name} ? "page" : undefined}'
        in:fly="{{ y: -100, duration: 600, delay: i*100, easing: backInOut }}"
        out:fly="{{ y: -100, duration: 300, delay: i*25, easing: backInOut }}"
        class="block pb-5 mb-5 font-light leading-tight border-b-2 text-list border-nav"
        href={name}
        style="background-color: transparent;"
    >
      {jsUcfirst(name)}
    </a>
    {/if}
    {/each}

  </nav>
</aside>
{/if}


 

    
 