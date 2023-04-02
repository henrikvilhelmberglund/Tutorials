<script>
	let unlocked = false;
	let SECRET = "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight";

	function onSecretComboAction(element, { secret }) {
		let keys = [];
		let timeoutId = null;
		function onKeydown(event) {
			keys.push(event.key);

			if (keys.join(",") === secret) {
				element.dispatchEvent(new CustomEvent("secretComboAchieved"));
			}

			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				timeoutId = null;
				keys = [];
				unlocked = false;
			}, 2000);
		}
		element.addEventListener("keydown", onKeydown);

		return {
			update() {},
			destroy() {
				element.removeEventListener("keydown", onKeydown);
			},
		};
	}
</script>

<input
	use:onSecretComboAction={{
		secret: SECRET,
	}}
	on:secretComboAchieved={() => (unlocked = true)} />

<hr />

<input
	use:onSecretComboAction={{
		secret: "ArrowUp,ArrowDown,ArrowUp,ArrowDown,ArrowUp,ArrowDown",
	}}
	on:secretComboAchieved={() => (unlocked = true)} />

{#if unlocked}
	<div>Secret unlocked!</div>
{/if}
