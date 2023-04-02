<script>
	function tripleClickAction(element) {
		let count = 0;
		let timeoutId;
		function onClick() {
			if (++count === 3) {
				element.dispatchEvent(new CustomEvent("tripleClick"));
			}

			timeoutId && clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				timeoutId = null;
				count = 0;
			}, 800);
		}
		element.addEventListener("click", onClick);
		return {
			destroy() {
				element.removeEventListener("click", onClick);
			},
		};
	}
</script>

<button use:tripleClickAction on:tripleClick={() => console.log("tripleClick!")}>Click me</button>
<button
	use:tripleClickAction
	on:tripleClick={() => console.log("tripleClick from the second button!")}>Or me!</button>
