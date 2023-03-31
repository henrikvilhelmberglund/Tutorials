<script>
	import { getContext } from "svelte";

	let count = getContext("value");
</script>

<div>
	Grandchildren: {count}
	<button on:click={() => count++}>+</button>
	<button on:click={() => count--}>-</button>
</div>
