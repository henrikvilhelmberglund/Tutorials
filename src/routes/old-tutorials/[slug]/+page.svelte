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
	<Nav {data} subroute={"/old-tutorials"} />

	<div>
		{#await data.post}
			<p class="text-3xl">Loading...</p>
		{:then post}
			<svelte:component this={post.default} />
		{:catch error}
			{error}
		{/await}
	</div>
</div>
