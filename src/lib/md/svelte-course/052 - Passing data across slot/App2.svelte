<script>
	import Component2 from "./Component2.svelte";

	let count = 0;
</script>

<button on:click={() => count--}>-</button>
{count}
<button on:click={() => count++}>+</button>

<!-- the let directive here allows us to use the count variable from the child component in the fragment -->
<!-- by changing the name after ={} we can bind the variable to another name -->
<Component2>
	<svelte:fragment let:count={countFromComponent}>
		appCount: {count}
		<br />
		componentCount: {countFromComponent}
	</svelte:fragment>
</Component2>

<style>
</style>
