<script>
	import { setContext } from "svelte";

	import GrandChildAv2 from "./GrandChildAv2.svelte";

	// key, value
	setContext("color", "blue");
</script>

<div class="border border-black">
	<GrandChildAv2 />
</div>

<style>
</style>
