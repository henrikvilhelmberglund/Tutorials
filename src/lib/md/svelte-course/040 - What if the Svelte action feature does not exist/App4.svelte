<script>
	import { onMount } from "svelte";
	let num = 1;

	let button;
	let button2;

	$: increment = num;

	onMount(() => {
		let count = 0;
		let count2 = 0;
		updateText();
		updateText2();
		function onClick() {
			count += increment;
			updateText();
		}
		function onClick2() {
			count2 += increment;
			updateText2();
		}
		function updateText() {
			button.innerHTML = count;
		}
		function updateText2() {
			button2.innerHTML = count2;
		}
		button.addEventListener("click", onClick);
		button2.addEventListener("click", onClick2);
		return () => {
			button.removeEventListener("click", onClick);
			button2.removeEventListener("click", onClick2);
		};
	});
</script>

<input type="number" bind:value={num} id="" />
<button bind:this={button} />
<button bind:this={button2}  />

<style>
</style>
