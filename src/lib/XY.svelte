<script>
	export let xy;

	let arr = [];

	for (let y of xy.y) {
		for (let x of xy.x) {
			arr.push(`${y} ${x}`);
		}
	}


	export let selected;
</script>

<div class="grid grid-cols-3 grid-rows-3 gap-4">
	<div />
	{#each Object.values(xy) as line, i}
		{#if i === 0}
			<div class="col-span-2 flex items-end">
				{#each line as word}
					<div class="flex w-1/2 items-center justify-center font-bold">
						{word}
					</div>
				{/each}
			</div>
		{:else}
			<div class="row-span-2 flex flex-col items-end">
				{#each line as word}
					<div class="flex h-1/2 items-center justify-center font-bold">
						{word}
					</div>
				{/each}
			</div>
		{/if}
	{/each}
	{#each arr as combination, i}
		<button
			on:click={() => (selected = combination)}
			class:col-start-2={i === 0 || i === 2}
			class:col-start-3={i === 1 || i === 3}
			class:row-start-2={i === 0 || i === 1}
			class:row-start-3={i === 2 || i === 3}
			class:!bg-amber-600={selected === combination}
      class:font-bold={selected === combination}
			class="row-start-2 flex h-16 w-20 justify-center break-normal rounded-lg bg-white p-4 text-black hover:bg-orange-300"
			>{combination}</button>
	{/each}
</div>

<style>
	* {
		font-family: sans-serif;
	}
</style>
