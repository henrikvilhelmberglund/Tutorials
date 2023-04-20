<script>
	import Component2 from "./Component2.svelte";

  let count = 0;
</script>

<div>
	{count}
	<button on:click={() => count++}>+</button>
</div>

<Component2>
	{count}
	<button on:click={() => count--}>-</button>
</Component2>

<Component2></Component2>

<style>
</style>
