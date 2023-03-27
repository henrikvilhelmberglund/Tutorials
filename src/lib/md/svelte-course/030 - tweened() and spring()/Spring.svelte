<script>
	import { spring } from "svelte/motion";

	const value = spring(1, { stiffness: 0.5, damping: 0.2 });
</script>

<div
	style="
height: 50px;
width: 5px;
background: red;
transform-origin: left center;
transform: scaleX({$value});
" />
<div class="buttons">
	<button on:click={() => value.set(0, { hard: true })}>0</button>
	<button on:click={() => ($value = 20)}>20</button>
	<button on:click={() => ($value = 40)}>40</button>
	<button on:click={() => ($value = 60)}>60</button>
	<button on:click={() => ($value = 80)}>80</button>
	<button on:click={() => ($value = 100)}>100</button>
</div>

<style>
	.buttons {
		margin: 18px 0;
	}
</style>
