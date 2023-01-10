<script>
  /**
   * @type {string}
   */
  export let title;

  export let desc = "特にないです";

  /**
   * @type {string}
   */
  export let url;

  /**
   * @type {number}
   */
  export let index;
</script>

<div class="card bg-base-100 shadow-xl image-full">
  <figure>
    <img src={url} alt="number {index + 1} in this genre" class="blur-md" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{@html desc}</p>
    <div class="card-actions justify-end">
      <a href={url} target="_blank" rel="noreferrer" class="btn btn-primary">
        拡大
      </a>
    </div>
  </div>
</div>
