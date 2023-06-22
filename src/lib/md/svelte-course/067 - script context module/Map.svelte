<script>
	import { mapValue } from "./mapStore";
	import { currentMap, setCurrentMap } from "./mapData";

	let div;

	function setMe() {
		setCurrentMap(div);
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
