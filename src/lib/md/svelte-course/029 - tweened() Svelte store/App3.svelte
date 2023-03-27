<script>
	import { tweened } from "svelte/motion";

	const value = tweened(0);
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
