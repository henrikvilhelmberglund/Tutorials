<script>
	import Game3 from "./Game3.svelte";
	import { color } from "./data3";
	import Form3 from "./Form3.svelte";
</script>

<Form3 />
<hr />
<input type="color" bind:value={$color} />
<div class="flex">
	<Game3 title="Player 1" />
	<Game3 title="Player 2" />
</div>

<style>
</style>
