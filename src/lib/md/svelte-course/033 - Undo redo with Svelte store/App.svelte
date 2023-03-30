<script>
	import { writable } from "svelte/store";
	import approach1 from "./approach1";

	const store = writable(0);
	let value = 1;

	// action creator
	function sum(value) {
		return {
			apply(_value) {
				return _value + value;
			},
			reverse(_value) {
				return _value - value;
			},
		};
	}

	const undoRedoStore = approach1(store);
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
			// $undoRedoStore += value;
			undoRedoStore.doAction(sum(value));
			value = 0;
		}}>Add</button>

	<p>
		{$undoRedoStore}
	</p>
</div>

<style>
</style>
