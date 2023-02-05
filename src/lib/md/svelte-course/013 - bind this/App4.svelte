<script>
	let myComponent;
	function reset() {
		myComponent.reset();
	}
	import Component2 from "./Component2.svelte";
</script>

<Component2 bind:this={myComponent} />

<button on:click={reset}>Reset Component2.svelte's Count</button>
