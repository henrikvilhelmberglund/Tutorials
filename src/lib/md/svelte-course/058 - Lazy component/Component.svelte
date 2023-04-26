<script>
	export let foo;
	export let bar;

	console.log("lazy component initialized!");
</script>

Foo: {foo}
Bar: {bar}

<input type="text" bind:value={bar} />

<button on:click>A button to click</button>

<style>
</style>
