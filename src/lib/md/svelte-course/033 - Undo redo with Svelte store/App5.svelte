<script>
	import { writable } from "svelte/store";
	import approach5 from "./approach5";

	const store = writable({ value: 0 });
	let value = 1;

	const undoRedoStore = approach5(store);
	const history = undoRedoStore.history;
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
			$undoRedoStore = {
				...$undoRedoStore,
				value: $undoRedoStore.value + value,
			};
			value = 0;
		}}>Add</button>

	<p>
		{JSON.stringify($undoRedoStore)}
		{$undoRedoStore.value}
	</p>
	<p>{JSON.stringify($history)}</p>
</div>

<style>
</style>
