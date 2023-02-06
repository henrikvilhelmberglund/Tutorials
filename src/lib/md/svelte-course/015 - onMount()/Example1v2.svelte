<script>
	import { onMount, onDestroy } from "svelte";
	let count = 0;
	let intervalId;

	onMount(() => {
		intervalId = setInterval(() => {
			console.log("count", ++count);
		}, 1000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

{count}
