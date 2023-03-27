import { derived } from "svelte/store";

export default function debounce(store) {
	let initialized = false;
	return derived(store, ($value, set) => {
		if (!initialized) {
			set($value);
			initialized = true;
			return;
		}
		const timeout = setTimeout(() => {
			set($value);
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	});
}
