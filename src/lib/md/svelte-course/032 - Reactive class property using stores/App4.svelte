<script>
	import { onMount } from "svelte";
	import Clock4 from "./clock4";

	const clock = new Clock4();

	onMount(() => {
		let interval = setInterval(() => {
			clock.tick();
		}, 1000);
		return () => clearInterval(interval);
	});

	console.log("time primitive", clock.time);
	const timeStore = clock.time$;
	$: console.log("time:", $timeStore);
</script>

<p>{$timeStore}</p>
