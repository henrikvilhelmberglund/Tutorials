<script>
	import { onMount } from "svelte";
	import Clock3 from "./clock3";

	const clock = new Clock3();

	onMount(() => {
		let interval = setInterval(() => {
			clock.tick();
		}, 1000);
		return () => clearInterval(interval);
	});

	let time;

	const timeStore = clock.time;
	$: console.log($timeStore);
</script>

<p>{$timeStore}</p>
