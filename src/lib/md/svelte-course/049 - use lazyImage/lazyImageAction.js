import viewport from "./useViewportAction";

export default function lazyImage(element) {
	const viewportActionMethods = viewport(element);
	element.addEventListener("enterViewport", enterViewport);

	function enterViewport() {
		element.src = element.dataset.src;
		element.removeEventListener("enterViewport", enterViewport);
	}

	return {
		// if we wanted to have update
		// update(newParams) {
		// 	viewportActionMethods.update(newParams);
		// },
		destroy() {
			viewportActionMethods.destroy();
			element.removeEventListener("enterViewport", enterViewport);
		},
	};
}
