<script>
	let element;
	function reset() {
		element.value = "";
	}
</script>

<input bind:this={element} type="text" />

<button on:click={reset}>Reset</button>