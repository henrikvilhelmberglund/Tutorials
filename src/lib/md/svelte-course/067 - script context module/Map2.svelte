<script context="module">
	import { writable } from "svelte/store";
	export const mapValue = writable(1);

	let currentMap;
</script>

<script>
	let div;

	function setMe() {
		if (currentMap) currentMap.style.border = "none";
		currentMap = div;
		currentMap.style.border = "1px solid black";
	}

	function whosSet() {
		console.log(currentMap);
	}
</script>

<div bind:this={div}>
	{$mapValue}
	<button on:click={setMe}>Set me</button>
	<button on:click={whosSet}>Who's set?</button>
</div>

<style>
</style>
