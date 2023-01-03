<script>
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
      <h1 class="text-xl py-3">ジャンル: {genre}</h1>
      {#each Object.keys(data.datas[genre]) as advancedGenre}
        <h1 class="text-lg py-2">ジャンル: {advancedGenre}</h1>
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
        >
          {#each data.datas[genre][advancedGenre] as image, i}
            <div class="card !static bg-base-100 shadow-xl image-full">
              <figure>
                <img src={image.imageurl} alt="number {i + 1} in this genre" />
              </figure>
              <div class="card-body !static">
                <h2 class="card-title">{image.title}</h2>
                <p>{image.desc}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary"> 保存 (テスト中) </button>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/each}
    {/each}
  </div>
{:catch error}
  <p>エラー:{error.message}</p>
{/await}
