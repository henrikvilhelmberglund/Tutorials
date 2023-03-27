import { spring } from "svelte/motion";
import { readable } from "svelte/store";

export default function (store) {
	const springStore = spring(undefined, {
		stiffness: 0.2,
		damping: 0.1,
	});

	return readable(undefined, (set) => {
		let unsubsubcribeFromStore = store.subscribe(springStore.set);
		let unsubscribeFromSpring = springStore.subscribe(set);
		return () => {
			unsubsubcribeFromStore();
			unsubscribeFromSpring();
		};
	});
}
