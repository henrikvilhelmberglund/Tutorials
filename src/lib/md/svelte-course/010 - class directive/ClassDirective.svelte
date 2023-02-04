<script>
	let profit = 0;
</script>

<div class:negative={profit < 0} class:positive={profit > 0}>
	<span class="p-4 font-serif text-2xl">{profit}</span>
	<button class="p-4" on:click={() => profit++}>++</button>
	<button class="p-4" on:click={() => profit--}>--</button>
</div>

<style>
	.negative {
		color: red;
		font-weight: bold;
	}
	.positive {
		color: limegreen;
		font-weight: bold;
	}
</style>
