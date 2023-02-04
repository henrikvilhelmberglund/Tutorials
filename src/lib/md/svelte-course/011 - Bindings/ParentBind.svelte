<script>
	let count;
	import Child from "./Child.svelte";
</script>

<Child bind:count />

<button on:click={() => (count = 999)}>Set count to 999</button>

<style>
</style>
