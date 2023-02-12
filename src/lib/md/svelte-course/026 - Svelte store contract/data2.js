import { writable, readable } from "svelte/store";

export let store1 = readable(0, (set) => {
	let i = 0;
	let timer = setInterval(() => {
		set(i++);
	}, 1000);

	return () => {
		clearTimeout(timer);
	};
});

export const store2 = writable("");