<script>
	let colors = ["red", "green", "blue"];

	function addColors() {
		colors.push("yellow");
		colors = colors;
	}
</script>

<button on:click={addColors}>Click me</button>

<ul>
	{#each colors as color, i}
		<li>{color}</li>
	{/each}
</ul>
