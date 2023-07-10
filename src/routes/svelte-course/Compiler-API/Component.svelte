<script>
	import { createEventDispatcher } from "svelte";
	import { getContext } from "svelte";
	import { fade } from "svelte/transition";

	const dispatch = createEventDispatcher();

	export let a = 1;
	export let b = 1;
	$: product = a * b;
	$: dispatch("product", { product, a, b });

	const c = getContext("c");

	export function reset() {
		a = 1;
		b = 1;
	}
</script>

<button id="random">Randomize</button>
<button id="reset">Reset</button>
<button id="destroy">Destroy</button>
<!--                                                               ? spicy selectors -->
<div
	transition:fade|global
	class="grid grid-cols-[10px_230px] items-baseline gap-[5px] [&_*]:!m-0 [&_*]:p-0">
	<div class="col-[2/3]">
		<button on:click={() => (a -= 5)}>-</button>
		<input type="number" name="" bind:value={a} id="" />
		<button on:click={() => (a += 5)}>+</button>
	</div>
	<div>X</div>
	<div>
		<button on:click={() => (b -= 5)}>-</button>
		<input type="number" name="" bind:value={b} id="" />
		<button on:click={() => (b += 5)}>+</button>
	</div>

	<div>=</div>
	<div class="text-right">{product}</div>
</div>

c: {c}

<style>
</style>
