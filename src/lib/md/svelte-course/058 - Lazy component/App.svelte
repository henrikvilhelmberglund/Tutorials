<script>
	import viewport from "./useViewportAction";
	// When using import here, the component will be loaded at the same time as App.svelte which is not what we want.
	// import Component from "./Component.svelte";

	// This will return a promise that will be resolved when this file is fetched and ready to use
	let componentPromise;
	let isLoaded = false;
</script>

<div class="h-screen bg-blue-500" />

<div
	use:viewport
	on:enterViewport={() => {
		if (!isLoaded) {
			componentPromise = import("./Component.svelte");
		}
		isLoaded = true;
	}} />

{#if componentPromise}
	{#await componentPromise}
		Loading...
	{:then { default: Component }}
		<Component foo="123" bar={456} on:click={() => console.log("From App.svelte!")} />
	{:catch error}
		{error}
	{/await}
{/if}


<style>
</style>
