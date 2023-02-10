<script>
	import Parent from "./Parent.svelte";
	import { setContext } from "svelte";

	let color = "red";
	let count = 0;

	setContext("color", color);

	function onClick() {
		count++;
	}
</script>

<input bind:value={color} type="color" />

{color}

<Parent on:click={onClick} />

Count: {count}
