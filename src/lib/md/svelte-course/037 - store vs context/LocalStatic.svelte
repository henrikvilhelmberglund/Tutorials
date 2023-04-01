<script>
	import { setContext } from "svelte";
	import Form2 from "./Form2.svelte";
	import Game2 from "./Game2.svelte";

	setContext("color", "#ff5522");
</script>

<Form2 />

<hr />

<div class="flex">
	<Game2 title="Player 1" color="green" />
	<Game2 title="Player 2" color="blue" />
</div>

<style>
</style>
