<script>
	let input1;
	let input2;
	let input3;

	function createNextOnEnter(input) {
		return function nextOnEnter1(event) {
			if (event.key === "Enter") {
				if (input) {
					input.focus();
				} else {
					event.currentTarget.blur();
				}
			}
		};
	}
</script>

<input bind:this={input1} on:keydown={createNextOnEnter(input2)} />
<input bind:this={input2} on:keydown={createNextOnEnter(input3)} />
<input bind:this={input3} on:keydown={createNextOnEnter()} />
