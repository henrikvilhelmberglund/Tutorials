<script>
	import { writable } from "svelte/store";
	// import { produce } from "immer";
	import approach5 from "./approach5";

	const store = writable({ value: 0 });
	let value = 1;

	const undoRedoStore = approach5(store);
	const history = undoRedoStore.history;
</script>

<svelte:head>
	<script src="https://unpkg.com/immer"></script>
</svelte:head>

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
			$undoRedoStore = immer.produce($undoRedoStore, (draft) => {
				draft.value += value;
			});
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
