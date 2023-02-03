<script>
	import Parent from "./Parent.svelte";
	function onElementButtonClick(event) {
		console.log("onElementButtonClick", event.target.dataset.value);
	}
	function onComponentButtonClick(event) {
		console.log("onComponentButtonClick", event.detail);
	}
</script>

<Parent on:componentButtonClick={onComponentButtonClick} />

<hr />

Element:

<div on:click={onElementButtonClick} on:keydown={onElementButtonClick}>
	<div>
		<button data-value="button1">Click me 1</button>
		<button data-value="button2">Click me 2</button>
	</div>
</div>

<style>
</style>
