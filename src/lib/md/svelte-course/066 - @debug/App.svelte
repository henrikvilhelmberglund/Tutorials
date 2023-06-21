<script>
	let array = [{ value: 1 }, { value: 2 }, { value: 3 }];
	let value = "";
</script>

<input bind:value />
value: {value}

{#each array as item, i}
	<li>
		<input type="number" bind:value={item.value} />
	</li>
{/each}

<style>
</style>
