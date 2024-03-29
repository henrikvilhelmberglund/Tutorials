import { readable } from "svelte/store";

export default readable({ x: 0, y: 0 }, (set) => {
	try {
		document.body.addEventListener("mousemove", move);

		function move(event) {
			set({
				x: event.clientX,
				y: event.clientY,
			});
		}

		return () => {
			document.body.removeEventListener("mousemove", move);
		};
	} catch (error) {
		console.log("this doesn't work in SSR");
		console.log(error);
	}
});
