<script>
	import { base } from "$app/paths";
	export let data;
	//const { title, date, thumbnail } = data.meta;
	import Nav from "$lib/Nav.svelte";
</script>

<div class="flex">
	<Nav {data} subroute={"/svelte-course"} />

	<!-- TODO this doesn't really work... hmm -->
	{#await data.post}
		<p class="fixed left-[50%] top-[50%] text-3xl">Loading...</p>
	{:then post}
		<svelte:component this={post.default} />
	{:catch error}
		{error}
	{/await}
</div>
<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->
