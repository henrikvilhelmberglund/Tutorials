<script>
	import { getContext } from "svelte";

	const colorObj = getContext("color");
	let color = colorObj.color;
	colorObj.listenToColorChange((newColor) => (color = newColor));
</script>

<div style="color: {color}">
	Child {color}
	<button on:click>Click me</button>
</div>
