<script>
	import { getContext } from "svelte";

	const color = getContext("color");
</script>

<div style="color: {color}">GrandChild A</div>
