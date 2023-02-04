<script>
	let myValue = "";
	function onInput(event) {
		myValue = this.value;
	}
</script>

<input on:input={onInput} value={myValue} type="text" />

<button on:click={() => (myValue = "hello")}>Set myValue to "hello"</button>

<div>value: {myValue}</div>
