import { get } from "svelte/store";
// store a history of store value snapshots

export default function approach2(store) {
	const history = [get(store)];
	let historyIndex = 0;

	const updateStore = () => store.set(history[historyIndex]);

	return {
		subscribe: store.subscribe,
		set(newValue) {
			historyIndex++;
			history[historyIndex] = newValue;
			while (historyIndex < history.length - 1) {
				history.pop();
			}
			updateStore();
		},
		undo() {
			if (historyIndex > 0) {
				historyIndex--;
				updateStore();
			}
		},
		redo() {
			if (historyIndex < history.length - 1) {
				historyIndex++;
				updateStore();
			}
		},
	};
}
