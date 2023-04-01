<script>
	import { getContext } from "svelte";
	import { data as storeData } from "./store";

	const contextData = getContext("data");
</script>

<div>
	Context: {$contextData}, Store: {$storeData}
</div>

<style>
</style>
