<script context="module">
	import { writable } from "svelte/store";

	let count = writable(0);
</script>

<script>
</script>

Value: {$count}
<button on:click={() => $count++}>Increment</button>

<style>
</style>
