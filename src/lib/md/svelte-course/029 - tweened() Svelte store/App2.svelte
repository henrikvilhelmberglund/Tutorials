<script>
	import { writable } from "svelte/store";

	function tweened(initialValue, duration = 1000) {
		const store = writable(initialValue);
		let intervalId;
		let valueToSet;

		function set(newValue) {
			if (intervalId) {
				clearInterval(intervalId);
				intervalId = null;
				initialValue = valueToSet;
			}

			const startTime = Date.now();
			const endTime = startTime + duration;

			intervalId = setInterval(() => {
				let currentTime = Date.now();
				if (currentTime > endTime) {
					initialValue = newValue;
					store.set(newValue);
					clearInterval(intervalId);
					intervalId = null;
					return;
				}

				valueToSet =
					((currentTime - startTime) / duration) * (newValue - initialValue) + initialValue;
				store.set(valueToSet);
			}, 100);
		}

		return {
			subscribe: store.subscribe,
			set,
		};
	}

	const value = tweened(0);
</script>

<button
	on:click={() => {
		$value--;
	}}>-</button>

<div>{$value}</div>
<button
	on:click={() => {
		$value++;
	}}>+</button>
