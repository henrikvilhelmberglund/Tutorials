<script>
	import { onMount } from "svelte";
	let element;
	function reset() {
		element.value = "";
	}
	onMount(() => {
		console.log(element);
	});
</script>

<input bind:this={element} type="text" />

<button on:click={reset}>Reset</button>
