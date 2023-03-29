<script>
	import { onMount } from "svelte";
	import Clock from "./clock";

	const clock = new Clock();

	onMount(() => {
		let interval = setInterval(() => {
			clock.tick();
		}, 1000);
		return () => clearInterval(interval);
	});

	let time;

	$: {
		time = $clock.time;
		console.log("time", time);
	}
</script>

<p>{time}</p>