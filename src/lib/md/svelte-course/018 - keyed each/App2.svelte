<script>
	let colors = ["red", "green", "blue"];

	function addColors() {
		colors.splice(2, 0, "yellow");
		colors = colors;
	}
</script>

<button on:click={addColors}>Click me</button>

<ul>
	{#each colors as color, i}
		<li>{color}</li>
	{/each}
</ul>
