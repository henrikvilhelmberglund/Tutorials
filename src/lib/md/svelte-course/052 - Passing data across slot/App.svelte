<script>
	import Component from "./Component.svelte";

	let appCount = 0;
</script>

<button on:click={() => appCount--}>-</button>
{appCount}
<button on:click={() => appCount++}>+</button>

<!-- the let directive here allows us to use the count variable from the child component in the fragment -->
<Component>
	<svelte:fragment let:count>
		appCount: {appCount} 
    <br>
    componentCount: {count}
	</svelte:fragment>
</Component>

<style>
</style>
