<script>
  import flatpickr from "flatpickr";
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

<input type="checkbox" bind:checked />
<button use:datepicker={checked}>Datepicker</button>

<style>
</style>
