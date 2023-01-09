<script>
  // async function getData() {
  //   const res = await fetch("https://georges-image-datas.vercel.app/");
  //   const data = await res.json();

  //   if (res.ok) return data;
  //   else throw new Error(data);
  // }

  // let promise = getData();

  /**
   * @type {{ data: { datas: { [x: string]: {}; }; }; }}
   */
  export let data;
</script>

<!-- {#await promise}
  ジャンルをロード中...
{:then data}
  <div
    class="hidden md:flex sticky top-0 left-0 z-50 backdrop-blur-md navbar bg-base-200 bg-opacity-70 px-8"
  >
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-2xl font-bold">じょーじのえろ画像</a
      >
    </div>
    <div class="flex-none">
      <a href="/" class="btn btn-ghost">全て</a> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- <div class="dropdown dropdown-end"> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- <label tabindex="0" class="btn btn-ghost m-1">女性</label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/woman">トップ</a></li>
          {#each Object.keys(data.datas["女性"]) as genre}
            <li><a href="#{genre}">{genre}</a></li>
          {/each}
        </ul>
      </div> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- <div class="dropdown dropdown-end"> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- <label tabindex="0" class="btn btn-ghost m-1">男性</label>
        <ul
          tabindex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a href="/man">トップ</a></li>
          {#each Object.keys(data.datas["男性"]) as genre}
            <li><a href="#{genre}">{genre}</a></li>
          {/each}
        </ul>
      </div>
      <label for="theme-drawer" class="btn btn-primary drawer-button"
        >テーマを変える</label
      >
    </div>
  </div>
  <div
    class="md:hidden sticky top-0 left-0 z-50 backdrop-blur-md navbar bg-base-200 bg-opacity-70 pl-8"
  >
    <div class="flex-1">
      <div class="dropdown"> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<!-- <label class="btn btn-ghost btn-circle m-1" tabindex="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
            class="scale-150"
            ><path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
            /></svg
          >
        </label>
        <div class="dropdown-content">
          <ul class="menu rounded-box bg-base-300 p-2 w-32">
            <li><a href="/">全て</a></li> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- <li tabindex="0">
              <span>女性</span>
              <ul class="rounded-box p-2 bg-base-200">
                <li><a href="/">トップ</a></li>
                {#each Object.keys(data.datas["女性"]) as genre}
                  <li><a href="#{genre}">{genre}</a></li>
                {/each}
              </ul>
            </li> -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- <li tabindex="0">
              <span>男性</span>
              <ul class="rounded-box p-2 bg-base-200">
                <li><a href="/">トップ</a></li>
                {#each Object.keys(data.datas["男性"]) as genre}
                  <li><a href="#{genre}">{genre}</a></li>
                {/each}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex-none">
      <a href="/" class="btn btn-ghost text-2xl font-bold">じょーじのえろ画像</a
      >
    </div>
  </div>
{:catch error}
  エラー:{error}
{/await} -->

<div
  class="hidden md:flex sticky top-0 left-0 z-50 backdrop-blur-md navbar bg-base-200 bg-opacity-70 px-8"
>
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-2xl font-bold">じょーじのえろ画像</a>
  </div>
  <div class="flex-none">
    <a href="/" class="btn btn-ghost">全て</a>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost m-1">女性</label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/woman">トップ</a></li>
        {#each Object.keys(data.data.datas["女性"]) as genre}
          <li><a href="#{genre}">{genre}</a></li>
        {/each}
      </ul>
    </div>
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div class="dropdown dropdown-end">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost m-1">男性</label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/man">トップ</a></li>
        {#each Object.keys(data.data.datas["男性"]) as genre}
          <li><a href="#{genre}">{genre}</a></li>
        {/each}
      </ul>
    </div>
    <label for="theme-drawer" class="btn btn-primary drawer-button"
      >テーマを変える</label
    >
  </div>
</div>
<div
  class="md:hidden sticky top-0 left-0 z-50 backdrop-blur-md navbar bg-base-200 bg-opacity-70 pl-8"
>
  <div class="flex-1">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="btn btn-ghost btn-circle m-1" tabindex="0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
          class="scale-150"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
          /></svg
        >
      </label>
      <div class="dropdown-content">
        <ul class="menu rounded-box bg-base-300 p-2 w-32">
          <li><a href="/">全て</a></li>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <li tabindex="0">
            <span>女性</span>
            <ul class="rounded-box p-2 bg-base-200">
              <li><a href="/">トップ</a></li>
              {#each Object.keys(data.data.datas["女性"]) as genre}
                <li><a href="#{genre}">{genre}</a></li>
              {/each}
            </ul>
          </li>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <li tabindex="0">
            <span>男性</span>
            <ul class="rounded-box p-2 bg-base-200">
              <li><a href="/">トップ</a></li>
              {#each Object.keys(data.data.datas["男性"]) as genre}
                <li><a href="#{genre}">{genre}</a></li>
              {/each}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="flex-none">
    <a href="/" class="btn btn-ghost text-2xl font-bold">じょーじのえろ画像</a>
  </div>
</div>
