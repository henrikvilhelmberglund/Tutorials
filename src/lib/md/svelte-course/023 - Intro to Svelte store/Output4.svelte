<script>
	import { value, subscribe } from "./data3";
	import { onMount } from "svelte";

	let _value = value;

  // whenever the component is unmounted the returned unsubscribe function in
  // data3.js is run so the function is removed from the subscribers list
	onMount(() => {
		return subscribe(() => {
			_value = value;
		});
	});
</script>

<h1>value: {_value}</h1>
