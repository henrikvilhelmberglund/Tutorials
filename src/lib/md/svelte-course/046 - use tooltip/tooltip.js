export function tooltip(element) {
  let div;
  let title;

	let offset = 5;
	function mouseOver(event) {
		div = document.createElement("div");
		div.textContent = element.getAttribute("title");
		div.classList = "my-tooltip";
		div.style = `top: ${event.pageY + offset}px; left: ${event.pageX + offset}px;`;
    document.body.appendChild(div);
    title = element.getAttribute('title');
		element.removeAttribute('title');
	}
	function mouseMove() {
		div.style.left = `${event.pageX + offset}px`;
		div.style.top = `${event.pageY + offset}px`;
	}
	function mouseLeave() {
    document.body.removeChild(div);
    element.setAttribute('title', title);
	}

	element.addEventListener("mouseover", mouseOver);
	element.addEventListener("mouseleave", mouseLeave);
	element.addEventListener("mousemove", mouseMove);

	return {
		destroy() {
			element.removeEventListener("mouseover", mouseOver);
			element.removeEventListener("mouseleave", mouseLeave);
			element.removeEventListener("mousemove", mouseMove);
		},
	};
}
