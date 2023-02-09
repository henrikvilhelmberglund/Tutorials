<script>
	let count = 0;
</script>

{#key count}
	<input type="text" />
{/key}

<button on:click={() => count++}>{count}</button>
