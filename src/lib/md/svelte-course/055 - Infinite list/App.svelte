<script>
	import List from "./List.svelte";
	import data from "./data";

	let showList = true;
</script>

<label class="fixed right-4 top-4 rounded-lg bg-blue-300 p-4 text-xl" for="">
	Show list
	<input type="checkbox" bind:checked={showList} />
</label>

{#if showList}
	<List {...$data} key="id" let:item={{ download_url, author }} on:loadMore={data.fetchMore}>
		<img slot="item" class="w-full" src={download_url} alt="stunning photo taken by {author}" />
	</List>
{/if}

<style>
</style>
