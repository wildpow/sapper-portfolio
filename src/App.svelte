<script>
  import { Router, Link, Route } from "svelte-routing";
  import Tailwindcss from "./Tailwindcss.svelte";
  import Header from "./Header.svelte";
  import Hero from "./routes//Hero.svelte";
  import Projects from "./routes/Projects.svelte";
  import About from "./routes/About.svelte";
  import Services from "./routes/Services.svelte";
  import Contact from "./routes/Contact.svelte";
  import Footer from "./Footer.svelte";
  export let name;
  export let url = "";
</script>

<style>
  main {
    margin: 0 auto;
  }
</style>

<!-- // #191a1d -->
<Tailwindcss />
<Router {url}>
  <main>
    <Header />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={About} />
    <Route path="/">
      <Hero />
    </Route>

    <!-- <About />
    <Services />
    <Contact />
    <Footer /> -->
  </main>
</Router>
