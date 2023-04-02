<script>
	let button;
	$: button && flatpickr(button);
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</svelte:head>

<button bind:this={button}>Date Picker</button>

<style>
</style>
