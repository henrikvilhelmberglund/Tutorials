<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	import Form4 from "./Form4.svelte";
	import Game4 from "./Game4.svelte";

	const color = writable("#ff5522");
	const game1Color = writable("#0f7f12");
	const game2Color = writable("#0b24fb");
	setContext("color", color);
</script>

<input type="color" bind:value={$color} />
<input type="color" bind:value={$game1Color} />
<input type="color" bind:value={$game2Color} />

<Form4 />

<hr />

<div class="flex">
	<Game4 title="Player 1" color={game1Color} />
	<Game4 title="Player 2" color={game2Color} />
</div>

<style>
</style>
