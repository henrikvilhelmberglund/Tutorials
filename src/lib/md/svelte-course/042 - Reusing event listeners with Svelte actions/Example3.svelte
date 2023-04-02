<script>
	let unlocked = false;
	let keys = [];
	let timeoutId = null;
	let SECRET = "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";
	function onKeydown(event) {
		keys.push(event.key);

		if (keys.join(",") === SECRET) {
			unlocked = true;
		}

		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId = null;
			keys = [];
      unlocked = false;
		}, 2000);
	}
</script>

{keys}
<input on:keydown={onKeydown} />

{#if unlocked}
	<div>Secret unlocked!</div>
{/if}
