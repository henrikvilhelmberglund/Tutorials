<script>
	function datepicker(element, open) {
		const calender = flatpickr(element);

		return {
			update(open) {
				if (open) {
					calender.open();
				} else {
					calender.close();
				}
			},
			destroy() {
				calender.destroy();
			},
		};
	}
	let checked = false;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</svelte:head>

<input type="checkbox" bind:checked />
<button use:datepicker={checked}>Datepicker</button>

<style>
</style>
