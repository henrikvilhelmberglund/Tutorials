<script>
	import CountComponent2 from "./CountComponent2.svelte";

	let instances = 2;
</script>

<button on:click={() => instances++}>Add instance</button>
<button on:click={() => instances--}>Remove instance</button>

{#each Array.from({ length: instances }) as _}
	<CountComponent2 />
{/each}

<style>
</style>
