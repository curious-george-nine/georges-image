<script>
  /**
   * @type {{ data: { themes: any; }; }}
   */
  export let data;
</script>

<ul class="menu gap-y-4 bg-base-100">
  {#each data.data.themes as theme}
    <li data-theme={theme}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        data-set-theme={theme}
        data-act-class="theme-active"
        class="capitalize text-base-content"
      >
        {theme}
        <div class="flex gap-2 ml-auto">
          <div class="w-2 h-4 bg-primary rounded" />
          <div class="w-2 h-4 bg-secondary rounded" />
          <div class="w-2 h-4 bg-accent rounded" />
          <div class="w-2 h-4 bg-info rounded" />
        </div>
      </a>
    </li>
  {/each}
</ul>
