<!-- we also need this to create getters and setters for the component's props -->
<svelte:options accessors />

<script>
	export let count = 0;

	// exporting a function as a prop
	export function reset() {
		count = 0;
	}
	function inc() {
		count++;
	}
</script>

<button on:click={inc}>{count}</button>
