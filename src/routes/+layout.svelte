<script>
  import "../app.css";

  import Navbar from "../components/Navbar.svelte";
  import Drawer from "../components/Drawer.svelte";

  import { onMount } from "svelte";

  import { themeChange } from "theme-change";

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // ๐ false parameter is required for svelte
  });

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<Drawer {data}>
  <div id="top">
    <Navbar {data} />
  </div>

  <section class="py-4">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold py-2">
        <span
          class="inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:border-b-4 before:border-accent before:rounded before:-rotate-2 before:w-full w-72"
          >ใใใผใใฎใใ็ปๅ</span
        >
      </h1>
      <p class="text-xl py-2">
        ๅใไฝใฃใๅใฎใใใฎ<span class="underline">ใจใญ็ปๅ้</span>ใงใใ
        ๅคๅใปใจใใฉๅใฎๆง็ใซๅบใใใใใชใใคใใใชใใงใใ่จฑใใซใน
      </p>
      <slot />
    </div>
  </section>
</Drawer>
