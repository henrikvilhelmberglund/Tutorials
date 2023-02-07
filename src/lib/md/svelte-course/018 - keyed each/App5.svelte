<script>
	import Component from "./Component.svelte";
	let colors = ["red", "green", "blue"];

	function addColors() {
		colors.splice(2, 0, "yellow");
    colors.reverse();
		colors = colors;
	}
</script>

<button on:click={addColors}>Click me</button>

<ul>
	{#each colors as color (color)}
		<li>{color} (key: {color})</li>
		<Component {color} />
	{/each}
</ul>
