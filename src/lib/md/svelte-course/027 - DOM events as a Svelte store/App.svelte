<script>
	import { onMount } from "svelte";
	let x = 0;
	let y = 0;
	onMount(() => {
		function move(event) {
			x = event.clientX;
			y = event.clientY;
		}
		document.body.addEventListener("mousemove", move);
		return () => {
			document.body.removeEventListener("mousemove", move);
		};
	});
</script>

Mouse position: {x}, {y}

<style>
</style>
