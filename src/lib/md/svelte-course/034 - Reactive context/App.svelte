<script>
	import Child from "./Child.svelte";
	import { setContext } from "svelte";

	let count = 10;

	setContext("value", count);
</script>

<div>
	App: {count}
	<button on:click={() => count++}>+</button>
	<button on:click={() => count--}>-</button>
</div>

<Child />
