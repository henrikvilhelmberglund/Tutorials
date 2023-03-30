import { get } from "svelte/store";
// store a history of actions applied to the store

export default function approach1(store) {
	const history = [];
	let historyIndex = -1;
	return {
		subscribe: store.subscribe,
		doAction(action) {
			historyIndex++;
			history[historyIndex] = action;
      let i = historyIndex + 1;
      while (historyIndex < history.length - 1) {
        history.pop();
      }
			store.update((value) => history[historyIndex].apply(value));
		},
		undo() {
			if (historyIndex >= 0) {
				store.update((value) => history[historyIndex].reverse(value));
				historyIndex--;
			}
		},
		redo() {
			if (historyIndex < history.length - 1) {
				historyIndex++;
				store.update((value) => history[historyIndex].apply(value));
			}
		},
	};
}
