<script>
	function datepicker(element) {
		flatpickr(element);
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</svelte:head>

<button use:datepicker>Date Picker</button>

<style>
</style>
