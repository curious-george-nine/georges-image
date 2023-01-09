<script>
  import ListGrid from "../components/ListGrid.svelte";
  import ImageCard from "../components/ImageCard.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="text-left mt-12">
  <p class="text-2xl">画像リスト 全て</p>
  {#each Object.keys(data.data.datas) as genre}
    <h1 class="text-xl py-3" id={genre}>ジャンル: {genre}</h1>
    {#each Object.keys(data.data.datas[genre]) as advancedGenre}
      <h1 class="text-lg py-2" id={advancedGenre}>
        ジャンル: {advancedGenre}
      </h1>
      <ListGrid>
        {#each data.data.datas[genre][advancedGenre] as image, i}
          <ImageCard
            title={image.title}
            desc={image.desc}
            url={image.imageurl}
            index={i}
          />
        {/each}
      </ListGrid>
    {/each}
  {/each}
</div>
