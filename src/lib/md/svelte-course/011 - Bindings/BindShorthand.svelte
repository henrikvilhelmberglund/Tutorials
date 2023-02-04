<script>
	let value = "";
</script>

<input bind:value type="text" />

<button on:click={() => (value = "hello")}>Set value to "hello"</button>

<div>value: {value}</div>
