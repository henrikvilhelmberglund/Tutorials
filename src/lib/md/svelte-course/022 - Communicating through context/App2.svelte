<script>
	import Parent2 from "./Parent2.svelte";
	import { setContext } from "svelte";

	let count = 0;
	const colorListeners = new Set();
	let colorObj = {
		color: "red",
		listenToColorChange(fn) {
			colorListeners.add(fn);
		},
	};
	$: colorListeners.forEach((listener) => listener(colorObj.color));

	setContext("color", colorObj);

	function onClick() {
		count++;
	}
</script>

<input bind:value={colorObj.color} type="color" />

{colorObj.color}

<Parent2 on:click={onClick} />

Count: {count}
