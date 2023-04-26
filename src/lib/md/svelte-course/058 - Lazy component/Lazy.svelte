<script>
	import viewport from "./useViewportAction";
	export { loadComponent as this };

	let loadComponent;
	let componentPromise;
	let isShowingComponent = false;
	export let bar = "567";
</script>

{#if !isShowingComponent}
	<div
		use:viewport
		on:enterViewport={() => {
			componentPromise = loadComponent();
			isShowingComponent = true;
		}} />
{:else}
	{#await componentPromise}
		<slot name="loading">Loading...</slot>
	{:then { default: Component }}
		<!-- since we use let:Component  in App2.svelte we need to have our component as a prop here -->
		<!-- this allows us to use things like bind and events in App2.svelte without having to forward them from Lazy.svelte -->
		<slot name="component" {Component} />
	{:catch error}
		{error}
	{/await}
{/if}

<style>
</style>
