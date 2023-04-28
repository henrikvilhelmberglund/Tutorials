<script>
	export let data = [1, [2, [3], 4], 5];
</script>

<span class="m-1 inline-block border border-solid border-blue-500">
	{#each data as item}
		<span class="m-1 inline-block border border-solid border-red-500">{item}</span>
	{/each}
</span>

<style>
</style>
