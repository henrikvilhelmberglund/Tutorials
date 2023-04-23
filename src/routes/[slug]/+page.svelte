<script>
	import Nav from "$lib/Nav.svelte";
	export let data;
	//const { title, date, thumbnail } = data.meta;
</script>

<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->

<div class="flex">
	<Nav {data} />

	<div>
		<svelte:component this={data.body.postContent} />
	</div>
</div>
