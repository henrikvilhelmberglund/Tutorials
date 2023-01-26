<script>
  export let data;
  //const { title, date, thumbnail } = data.meta;
</script>
<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->

<svelte:component this={data.body.postContent} />
