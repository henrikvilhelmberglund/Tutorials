<script>
	let colors = [
		{ name: "red", hex: "#f00" },
		{ name: "green", hex: "#0f0" },
		{ name: "blue", hex: "#00f" },
	];
</script>

<ul>
	{#each colors as color}
		<li style="color: {color.hex};">{color.name}</li>
	{/each}
</ul>
