<script>
	let input1;
	let input2;
	let input3;

	function nextOnEnterAction(element, nextElementToFocus) {
		function nextOnEnter(event) {
			if (event.key === "Enter") {
				if (nextElementToFocus) {
					nextElementToFocus.focus();
				} else {
					event.currentTarget.blur();
				}
			}
		}
		element.addEventListener("keydown", nextOnEnter);
		return {
			update(nextNextElementToFocus) {
				nextElementToFocus = nextNextElementToFocus;
			},
			destroy() {
				element.removeElementListener("keydown", nextOnEnter);
			},
		};
	}
</script>

<input bind:this={input1} use:nextOnEnterAction={input2} />
<input bind:this={input2} use:nextOnEnterAction={input3} />
<input bind:this={input3} use:nextOnEnterAction />
