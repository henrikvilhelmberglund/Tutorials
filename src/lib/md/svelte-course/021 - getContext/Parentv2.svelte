<script>
	import { setContext } from "svelte";

	import Childv2 from "./Childv2.svelte";
	import Child2v2 from "./Child2v2.svelte";

	// key, value
	setContext("color", "red");
</script>

<div class="border border-black">
	Parent A
	<Childv2 />
	<Child2v2 />
</div>

<style>
</style>
