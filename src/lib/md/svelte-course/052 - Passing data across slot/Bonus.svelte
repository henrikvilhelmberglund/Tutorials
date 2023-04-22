<script>
	import Component4 from "./Component4.svelte";

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
<Component4>
	<svelte:fragment let:count={countFromComponent} let:inc={incInComponent}>
		appCount: {count}
		<br />
		componentCount: {countFromComponent}
		<br />
		<button on:click={() => inc(countFromComponent)}>+{countFromComponent} to parent</button>
		<br />
		<button on:click={() => incInComponent(count)}>+{count} to component</button>
	</svelte:fragment>
</Component4>

<style>
</style>
