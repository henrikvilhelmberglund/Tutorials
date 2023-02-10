<script>
	import Parent3 from "./Parent3.svelte";
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
	setContext("click", onClick);

	function onClick(delta) {
		count += delta;
	}
</script>

<input bind:value={colorObj.color} type="color" />

{colorObj.color}

<Parent3 />

Count: {count}
