<script>
	import { fade } from "svelte/transition";
	let count = 0;
</script>

<input type="text" />

<button on:click={() => count++}>
	{count}
</button>

<div in:fade>
	{count}
</div>
