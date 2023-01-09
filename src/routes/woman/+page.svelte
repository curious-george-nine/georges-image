<script>
  import ListGrid from "../../components/ListGrid.svelte";
  import ImageCard from "../../components/ImageCard.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>女性 - じょーじのえろ画像</title>
</svelte:head>

<div class="text-left mt-12">
  <p class="text-2xl">画像リスト 女性</p>
  {#each Object.keys(data.data.datas["女性"]) as genreInWoman}
    <h1 class="text-xl py-3">ジャンル: {genreInWoman}</h1>
    <ListGrid>
      {#each data.data.datas["女性"][genreInWoman] as image, i}
        <ImageCard
          title={image.title}
          desc={image.desc}
          url={image.imageurl}
          index={i}
        />
      {/each}
    </ListGrid>
  {/each}
</div>
