<script>
	import { tweened } from "svelte/motion";
	import { cubicInOut } from "svelte/easing";

	const value = tweened(0, { duration: 5000, delay: 2000, easing: cubicInOut });
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
