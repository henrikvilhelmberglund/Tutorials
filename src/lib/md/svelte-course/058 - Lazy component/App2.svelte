<script>
	import Lazy from "./Lazy.svelte";
	let bar = "789";
</script>

Bar in App2: {bar}

<Lazy this={() => import("./Component.svelte")}>
	<div class="text-blue-500" slot="loading">Loading...</div>
	<!-- we use a slot to be able to use bind, events like if it was a normal component -->
	<svelte:fragment slot="component" let:Component>
		<Component foo="123" bind:bar on:click={() => console.log("I am an event in App2.svelte!")} />
	</svelte:fragment>
</Lazy>

<style>
</style>
