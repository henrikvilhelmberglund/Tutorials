<script>
	export let count = 0;
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	$: dispatch("countChange", count);
</script>

count: {count}

<button on:click={() => count++}>Increment</button>
