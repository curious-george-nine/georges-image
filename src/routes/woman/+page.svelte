<script>
  import ListGrid from "../../components/ListGrid.svelte";
  import ImageCard from "../../components/ImageCard.svelte";

  // async function getData() {
  //   const res = await fetch("https://georges-image-datas.vercel.app/");
  //   const data = await res.json();

  //   if (res.ok) return data;
  //   else throw new Error(data);
  // }

  // let promise = getData();

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<!-- {#await promise}
  <div class="grid place-items-center min-h-[50vh]">
    <span class="text-4xl">ロード中...</span>
  </div>
{:then data}
  <div class="text-left mt-12">
    <p class="text-2xl">画像リスト 女性</p>
    {#each Object.keys(data.datas["女性"]) as genreInWoman}
      <h1 class="text-xl py-3">ジャンル: {genreInWoman}</h1>
      <ListGrid>
        {#each data.datas["女性"][genreInWoman] as image, i}
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
{:catch error}
  <p>エラー:{error.message}</p>
{/await} -->

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
