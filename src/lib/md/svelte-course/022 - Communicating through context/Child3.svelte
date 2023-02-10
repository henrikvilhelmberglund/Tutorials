<script>
	import { getContext } from "svelte";

	const colorObj = getContext("color");
	let color = colorObj.color;
	colorObj.listenToColorChange((newColor) => (color = newColor));

	const onClick = getContext("click");
</script>

<div style="color: {color}">
	Child {color}
	<button on:click={() => onClick(1)}>Click me +1</button>
	<button on:click={() => onClick(2)}>Click me +2</button>
</div>
