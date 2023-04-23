import { writable } from "svelte/store";

let loading = false;
let noMoreData = false;
let page = 1;
let data = [];

const list = writable({
	loading,
	data,
	noMoreData,
});

export default {
	// we only implement subscribe because we don't want the user to use set/update on the store
	subscribe: list.subscribe,
	async fetchMore() {
		if (loading || noMoreData) return;
		loading = true;

		list.set({ loading, data, noMoreData });

		// alternative
		// list.update((currentList) => {
		// 	return { ...currentList, loading };
		// });
		const res = await fetch(`https://picsum.photos/v2/list?page=${page++}&limit=3`);
		const newData = await res.json();
		loading = false;
		noMoreData = newData.length === 0;
		data.push(...newData);
		list.set({ loading, data, noMoreData });
	},
};
