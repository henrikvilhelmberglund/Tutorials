<script>
	let myValue = "";
</script>

<input bind:value={myValue} type="text" />

<button on:click={() => (myValue = "hello")}>Set myValue to "hello"</button>

<div>value: {myValue}</div>
