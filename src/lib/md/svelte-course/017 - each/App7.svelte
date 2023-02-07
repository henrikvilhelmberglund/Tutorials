<script>
	let colors = [
		{ name: "red", hex: "#f00" },
		{ name: "green", hex: "#0f0" },
		{ name: "blue", hex: "#00f" },
		{ name: "mysterious" },
	];
</script>

<ul>
	{#each colors as { name, hex = "purple" }, i}
		<li style="color: {hex};">{name} - {i}</li>
    {#each hex as character}
      <li class="list-none">{character}</li>
    {/each}
	{/each}
</ul>
