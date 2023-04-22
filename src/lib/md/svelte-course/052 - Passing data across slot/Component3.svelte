<script>
	let count = 0;
</script>

<div>
	Component:
	<button on:click={() => count--}>-</button>
	{count}
	<button on:click={() => count++}>+</button>
</div>

<hr />

<!-- added a prop to the slot here -->
<slot {count} />

<style>
</style>
