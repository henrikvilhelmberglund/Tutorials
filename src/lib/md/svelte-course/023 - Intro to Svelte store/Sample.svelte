<script>
	let value = "";

	function update(newValue) {
		value = newValue;
	}
</script>

<input on:input={(e) => update(e.currentTarget.value)} type="text" />

<h1>value: {value}</h1>
