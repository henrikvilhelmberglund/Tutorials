<script>
	import { getContext } from "svelte";

	const color = getContext("color");
</script>

<div style="color: {color}">
	Child {color}
	<button on:click>Click me</button>
</div>