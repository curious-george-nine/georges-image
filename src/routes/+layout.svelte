<script>
  import { fade } from "svelte/transition";
  import "../app.css";

  import Navbar from "../components/Navbar.svelte";
</script>

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
