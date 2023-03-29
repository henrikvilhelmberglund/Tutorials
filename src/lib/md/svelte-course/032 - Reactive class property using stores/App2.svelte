<script>
	import { onMount } from "svelte";
	import Clock2 from "./clock2";

	const clock = new Clock2();

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
