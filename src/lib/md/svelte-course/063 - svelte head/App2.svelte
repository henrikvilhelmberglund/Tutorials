<script>
	let name = "";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Kablammo&display=swap" rel="stylesheet" />
	{@html `<style>:root { --font-color: ${name}}</style>`}
</svelte:head>

<input bind:value={name} placeholder="Try typing a color like red!" />
<p class="fancy-text">This is some fancy text!</p>

<style>
	.fancy-text {
		font-family: "Kablammo", cursive;
		font-size: 3rem;
		color: var(--font-color);
	}
</style>
