<script>
  import BackToTop from "./BackToTop.svelte";
  import Theme from "./Theme.svelte";

  /**
   * @type {{ data: { themes: any; }; }}
   */
  export let data;

  /**
   * @type {HTMLDivElement}
   */
  let scroll;

  let y = 0;

  const handleScroll = () => {
    y = scroll.scrollTop;
  };
</script>

<div class="drawer">
  <input class="drawer-toggle" id="theme-drawer" type="checkbox" />
  <div
    class="drawer-content scroll-smooth"
    bind:this={scroll}
    on:scroll={handleScroll}
  >
    <slot />
    <BackToTop {y} />
  </div>
  <div class="drawer-side">
    <label for="theme-drawer" class="drawer-overlay" />
    <div class="bg-base-100 w-72">
      <Theme {data} />
    </div>
  </div>
</div>
