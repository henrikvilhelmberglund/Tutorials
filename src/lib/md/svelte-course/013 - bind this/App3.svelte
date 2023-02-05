<script>
	let myComponent;
	function logCount() {
		console.log(myComponent.count);
	}
	import Component from "./Component.svelte";
</script>

<Component bind:this={myComponent} />

<button on:click={logCount}>Log Component.svelte's Count</button>
