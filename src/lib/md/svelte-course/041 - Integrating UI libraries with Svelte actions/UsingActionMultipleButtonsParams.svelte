<script>
	function datepicker(element, config) {
		flatpickr(element, config);
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</svelte:head>

<button use:datepicker={{ showMonths: 3 }}>Date Picker</button>

<button use:datepicker>Date Picker</button>

<style>
</style>
