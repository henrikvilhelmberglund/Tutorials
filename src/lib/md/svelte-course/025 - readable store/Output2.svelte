<script>
	import { valueStore } from "./data2";
	import { onMount } from "svelte";

	let _value;
</script>

<!-- this is undefined to make sure we don't have subscribers -->
<h1>value: {_value}</h1>
