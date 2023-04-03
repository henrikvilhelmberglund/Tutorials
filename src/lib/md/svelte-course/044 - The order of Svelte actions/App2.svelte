<script>
	let valueBeforeAction = "";
	let valueAfterAction = "";

	function uppercase(element) {
		function onInput(event) {
			element.value = element.value.toUpperCase();
      event.stopImmediatePropagation()
		}
		element.addEventListener("input", onInput);

		return {
			destroy() {
				element.removeEventListener("input", onInput);
			},
		};
	}
</script>

<input bind:value={valueBeforeAction} use:uppercase />

<input use:uppercase bind:value={valueAfterAction} />

<div>
	{valueBeforeAction}
</div>

<div>
	{valueAfterAction}
</div>
