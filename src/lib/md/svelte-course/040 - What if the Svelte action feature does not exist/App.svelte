<script>
	let num = 1;

  
	function counter(element, increment = 1) {
		let count = 0;
		updateText();

		function updateText() {
			element.innerHTML = count;
		}
		function onClick() {
			count += increment;
			updateText();
		}

		element.addEventListener("click", onClick);

		return {
			update(newIncrement) {
				increment = newIncrement;
			},
			destroy() {
				element.removeEventListener("click", onClick);
			},
		};
	}
</script>

<input type="number" bind:value={num} id="" />
<button use:counter={num} />

<style>
</style>
