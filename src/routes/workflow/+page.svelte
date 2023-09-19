<script>
	import Nav from "$lib/Nav.svelte";
	import PostGrid from "$lib/PostGrid.svelte";

	export let data;
</script>

<div class="flex">
	<Nav {data} subroute={"/workflow"} />
	<PostGrid route="/workflow" posts={data.titles} />
</div>

<style>
</style>
