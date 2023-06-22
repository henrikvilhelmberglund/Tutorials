<script>
	import Map from "./Map.svelte";

	import { mapValue } from "./mapStore";
</script>

<input bind:value={$mapValue} type="number" />

<Map />
<Map />

<style>
</style>
