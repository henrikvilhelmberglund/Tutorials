<script>
	import mousePosition from "./mousePosition";
	import readonly from "./readonly";
	import { writable } from "svelte/store";

	let value = writable("");
	let readOnlyValue = readonly(value);
</script>

<input bind:value={$value} type="text" />
<input bind:value={$readOnlyValue} type="text" />
