<script>
  import ListGrid from "../components/ListGrid.svelte";
  import ImageCard from "../components/ImageCard.svelte";

  async function getData() {
    const res = await fetch("https://georges-image-datas.vercel.app/");
    const data = await res.json();

    if (res.ok) return data;
    else throw new Error(data);
  }

  let promise = getData();
</script>

{#await promise}
  <div class="grid place-items-center min-h-[50vh]">
    <span class="text-4xl">ロード中...</span>
  </div>
{:then data}
  <div class="text-left mt-12">
    <p class="text-2xl">画像リスト 全て</p>
    {#each Object.keys(data.datas) as genre}
      <h1 class="text-xl py-3" id={genre}>ジャンル: {genre}</h1>
      {#each Object.keys(data.datas[genre]) as advancedGenre}
        <h1 class="text-lg py-2" id={advancedGenre}>
          ジャンル: {advancedGenre}
        </h1>
        <ListGrid>
          {#each data.datas[genre][advancedGenre] as image, i}
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
{:catch error}
  <p>エラー:{error.message}</p>
{/await}
