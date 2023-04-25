<script>
	// When using import here, the component will be loaded at the same time as App.svelte which is not what we want.
	// import Component from "./Component.svelte";

	// This will return a promise that will be resolved when this file is fetched and ready to use
	const componentPromise = import("./Component.svelte");
</script>

{#await componentPromise}
	Loading...
{:then { default: Component }}
	<Component foo="123" bar={456} />
{:catch error}
	{error}
{/await}

<style>
</style>
