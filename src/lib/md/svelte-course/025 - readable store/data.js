import { writable, readable } from "svelte/store";

export let valueStore = readable("Hello", (set) => {
	let timer = setTimeout(() => {
		set("world");
	}, 1000);

	return () => {
		clearTimeout(timer);
	};
});
