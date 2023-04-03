<script>
	function clickOutside(element, callbackFunction) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		}
		document.body.addEventListener("click", onClick);
		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener("click", onClick);
			},
		};
	}
</script>

<div
	use:clickOutside={() => {
		console.log("clicked outside of modal 1");
	}}
	class="border-1 border-solid border-black p-4">
	Some modal
</div>

<style>
</style>
