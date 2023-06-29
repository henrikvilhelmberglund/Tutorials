<script context="module">
	import { writable } from "svelte/store";
	import { get } from "svelte/store";

	// Create a module-level store to hold the combined count value
	let totalCount = writable(0);
	// Create a module level id variable
	let id = 0;

	// Function to update the totalCount based on the individual counts of all components
	function updateTotalCount() {
		const counts = [...components].map(([_, store]) => get(store));
		totalCount.set(counts.reduce((sum, count) => sum + count, 0));
		if (components.size === 0) id = 0;
	}

	// Create a map to store component instances and their individual count stores
	let components = new Map();
</script>

<script>
	import { onDestroy } from "svelte";
	// Create a writable store for the individual count value of the component
	let count = writable(0);
	// Add the count store to the components map when the component is created
	components.set(id, count);
	// Save a local ID reference for use with onDestroy later
	let localID = id;
	// Increment the module level id variable so the next component gets a new id
	id++;

	// when the component is destroyed, delete the component and its value from the map, then update the total value
	onDestroy(() => {
		components.delete(localID);
		updateTotalCount();
	});
</script>

<!-- only show the total value if it's the first component instance -->
{#if localID === 0}
	<p>
		Total value: {$totalCount}
	</p>
{/if}
<p>
	Value: {$count}
</p>
<button
	on:click={() => {
		// When clicked, increment the count value in the store and run the function to update the total value
		$count++;
		updateTotalCount();
	}}>Increment</button>

<style>
</style>
