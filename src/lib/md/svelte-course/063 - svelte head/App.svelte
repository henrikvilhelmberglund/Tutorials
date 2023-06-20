<script>
	let name = "world";
</script>

<input bind:value={name} />
<svelte:head>
	<title>{name}</title>
	<meta name="description" content={name} />
</svelte:head>

<style>
</style>
