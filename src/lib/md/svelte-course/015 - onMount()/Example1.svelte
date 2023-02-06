<script>
	import { onMount } from "svelte";
	let count = 0;

	onMount(() => {
		let intervalId = setInterval(() => {
			console.log("count", ++count);
		}, 1000);
	});
</script>

{count}
