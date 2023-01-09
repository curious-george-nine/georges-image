<script>
  import { browser } from "$app/environment";
  import { fade } from "svelte/transition";

  let showOnPx = 150;

  if (browser) {
    document.body.classList.add("overflow-x-hidden");
    document.body.classList.add("scroll-smooth");
    document.documentElement.classList.add("scroll-smooth");
  }

  /**
   * @type {number}
   */
  export let y;
</script>

{#if !(y < showOnPx)}
  <div class="fixed bottom-4 right-6" in:fade out:fade>
    <a href="#top" class="btn btn-circle btn-info relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"
        /></svg
      >
    </a>
  </div>
{/if}
