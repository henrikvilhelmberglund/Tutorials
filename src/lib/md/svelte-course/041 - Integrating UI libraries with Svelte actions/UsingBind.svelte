<script>
  import flatpickr from "flatpickr";
	let button;
	$: button && flatpickr(button);
</script>

<button bind:this={button}>Date Picker</button>

<style>
</style>
