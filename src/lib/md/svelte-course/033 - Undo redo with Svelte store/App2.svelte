<script>
	import { writable } from "svelte/store";
	import approach2 from "./approach2";

	const store = writable(0);
	let value = 1;

	const undoRedoStore = approach2(store);
</script>

<div class="p-4">
	<button
		on:click={() => {
			undoRedoStore.undo();
		}}>Undo</button>
	<button
		on:click={() => {
			undoRedoStore.redo();
		}}>Redo</button>

	<input bind:value type="number" />
	<button
		on:click={() => {
			$undoRedoStore += value;
			value = 0;
		}}>Add</button>

	<p>
		{$undoRedoStore}
	</p>
</div>

<style>
</style>
