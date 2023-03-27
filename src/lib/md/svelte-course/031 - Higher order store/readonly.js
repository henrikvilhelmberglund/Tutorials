export default function readonly(store) {
	return {
		subscribe: store.subscribe,
		set() {
			throw new Error("Unable to set the value of a readonly store");
		},
	};
}
