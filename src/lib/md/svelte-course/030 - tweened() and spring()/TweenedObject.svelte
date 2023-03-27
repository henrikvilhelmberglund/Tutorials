<script>
	import { tweened } from "svelte/motion";
	const value = tweened({ a: 0, b: 50, c: 40 }, { duration: 4000 });
</script>

<pre>{JSON.stringify($value, null, 2)}</pre>

<div class="buttons">
	<button
		on:click={() => {
			$value = 0;
		}}>0</button>
	<button
		on:click={() => {
			$value = { a: 100, b: 0, c: 30 };
		}}>{@html "{a: 100, b: 0, c: 30}"}</button>
</div>

<style>
	.buttons {
		margin: 18px 0;
	}
</style>
