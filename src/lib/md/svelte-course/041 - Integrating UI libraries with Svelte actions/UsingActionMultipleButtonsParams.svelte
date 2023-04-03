<script>
  import flatpickr from "flatpickr";
	function datepicker(element, config) {
		flatpickr(element, config);
	}
</script>

<button use:datepicker={{ showMonths: 3 }}>Date Picker</button>

<button use:datepicker>Date Picker</button>

<style>
</style>
