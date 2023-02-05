<script>
	let count = 0;

	// exporting a function as a prop (or, with bind:this, as a method)
	export function reset() {
		count = 0;
	}
	function inc() {
		count++;
	}
</script>

<button on:click={inc}>{count}</button>
