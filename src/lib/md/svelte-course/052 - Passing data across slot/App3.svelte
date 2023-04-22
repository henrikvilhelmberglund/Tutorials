<script>
	import Component3 from "./Component3.svelte";

	let count = 0;

	function inc(delta) {
		count += delta;
	}
</script>

<button on:click={() => count--}>-</button>
{count}
<button on:click={() => count++}>+</button>

<!-- the let directive here allows us to use the count variable from the child component in the fragment -->
<!-- by changing the name after ={} we can bind the variable to another name -->
<Component3>
	<svelte:fragment let:count={countFromComponent}>
		appCount: {count}
		<br />
		componentCount: {countFromComponent}
		<br />
		<button on:click={() => inc(5)}>+5</button>
	</svelte:fragment>
</Component3>

<style>
</style>
