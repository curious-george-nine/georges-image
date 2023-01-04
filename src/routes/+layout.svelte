<script>
  import "../app.css";

  import Navbar from "../components/Navbar.svelte";

  import { browser } from "$app/environment";

  import { fade } from "svelte/transition";

  /**
   * @type {({ target }: { target: any; }) => void}
   */
  let scrollIntoView;

  /**
   * @type {() => void}
   */
  let handleOnScroll;

  /**
   * @type {boolean}
   */
  let hidden;

  if (browser) {
    scrollIntoView = ({ target }) => {
      const el = document.querySelector(target.getAttribute("href"));
      if (!el) return;
      el.scrollIntoView({
        behavior: "smooth",
      });
    };

    let showOnPx = 150;
    hidden = true;

    function scrollContainer() {
      return document.documentElement || document.body;
    }

    handleOnScroll = () => {
      if (!scrollContainer()) {
        return;
      }

      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    };

    document.body.classList.add("overflow-x-hidden");
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="absolute top-0 left-0" id="top" />

<Navbar />

<section class="py-4">
  <div class="container mx-auto text-center">
    <h1 class="text-4xl font-bold py-2">
      <span
        class="relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:border-b-4 before:border-accent before:w-full"
        >じょーじのえろ画像</span
      >
    </h1>
    <p class="text-xl py-2">
      僕が作った僕のための<span class="underline">エロ画像集</span>です。
      多分ほとんど僕の性癖に刺さるようなやつしかないです。許せカス
    </p>
    <slot />
  </div>
</section>

{#if !hidden}
  <div class="fixed bottom-4 right-6" id="backtotop" in:fade out:fade>
    <a
      href="#top"
      on:click|preventDefault={scrollIntoView}
      class="btn btn-circle btn-info relative"
    >
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
