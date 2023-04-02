<script>
	import { onMount } from "svelte";
	let num = 1;

	let button;

	$: increment = num;

	onMount(() => {
		let count = 0;
		updateText();
		function onClick() {
			count += increment;
			updateText();
		}
		function updateText() {
			button.innerHTML = count;
		}
		button.addEventListener("click", onClick);
		return () => {
			button.removeEventListener("click", onClick);
		};
	});
</script>

<input type="number" bind:value={num} id="" />
<button bind:this={button} />

<style>
</style>
