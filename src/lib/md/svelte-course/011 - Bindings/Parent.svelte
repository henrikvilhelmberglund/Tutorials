<script>
	let count;
	import Child from "./Child.svelte";
</script>

<Child
	on:countChange={(event) => {
		count = event.detail;
	}}
	{count} />

<button on:click={() => (count = 999)}>Set count to 999</button>

<style>
</style>
