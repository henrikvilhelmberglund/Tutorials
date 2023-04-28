<script>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	let mousePosition = { x: 0, y: 0 };
	let xPercentage = 0;
	let yPercentage = 0;

	$: if (browser) {
		// added some offsets because of this not being the only thing in the body
		yPercentage = (mousePosition.y * 100 * 10) / document.body.clientHeight;
		xPercentage = (mousePosition.x * 100 * 2) / document.body.clientWidth -40;
	}

	onMount(() => {
		function mouseMove(event) {
			mousePosition.x = event.clientX;
			mousePosition.y = event.clientY;
		}
		if (browser) {
			document.body.addEventListener("mousemove", mouseMove);
		}
		return () => document.body.removeEventListener("mousemove", mouseMove);
	});
</script>

<div
	class="grid h-[300px] w-[50%] place-items-center text-2xl"
	style="background: linear-gradient(to bottom, transparent {yPercentage}%, {yPercentage}%, rgba(255, 0, 0, 0.5) 100%), 
  linear-gradient(to right, transparent {xPercentage}%, {xPercentage}%, rgba(0,0,255, 0.5) 100%);
">
	{mousePosition.x}, {mousePosition.y}
</div>

<style>
</style>
