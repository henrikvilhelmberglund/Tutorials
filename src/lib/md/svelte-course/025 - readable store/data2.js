import { writable, readable } from "svelte/store";

export let valueStore = readable("Hello", (set) => {
	console.log("Start (someone subscribed!)");
	let timer = setTimeout(() => {
		set("world");
	}, 1000);

	return () => {
		console.log("Stop (everyone unsubscribed!)");
		clearTimeout(timer);
	};
});

const unsub = valueStore.subscribe(function () {});

setTimeout(() => {
	unsub();
}, 5000);
