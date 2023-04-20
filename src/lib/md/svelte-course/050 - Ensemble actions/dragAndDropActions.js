export function getDragAndDropActions() {
  let canDrop = false;
  
	function drag(element, data) {
		element.draggable = true;

		function onDragStart(event) {
			event.dataTransfer.setData("text", data);
			canDrop = true;
		}

		function onDragEnd(event) {
			canDrop = false;
		}

		element.addEventListener("dragstart", onDragStart);
		element.addEventListener("dragend", onDragEnd);

		return {
			update(newData) {
				data = newData;
			},
			destroy() {
				element.removeEventListener("dragstart", onDragStart);
				element.removeEventListener("dragend", onDragEnd);
			},
		};
	}

	function drop(element, params) {
		function onDrop(event) {
			event.preventDefault();
			const data = event.dataTransfer.getData("text");
			element.dispatchEvent(new CustomEvent("receivedDragData", { detail: data }));
		}

		function onDragOver(event) {
			if (canDrop) {
				event.preventDefault();
			}
		}

		element.addEventListener("drop", onDrop);
		element.addEventListener("dragover", onDragOver);

		return {
			update(newParams) {
				params = newParams;
			},
			destroy() {
				element.removeEventListener("drop", onDrop);
				element.removeEventListener("dragover", onDragOver);
			},
		};
	}

	return [drag, drop];
}
