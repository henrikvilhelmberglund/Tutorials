<script>
	import { tweened } from "svelte/motion";

	const value = tweened(0, { duration: 5000 });
</script>

<button
	on:click={() => {
		$value--;
	}}>-</button>

<div>{$value}</div>
<button
	on:click={() => {
		$value++;
	}}>+</button>
