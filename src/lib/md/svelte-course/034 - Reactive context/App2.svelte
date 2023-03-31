<script>
	import Child2 from "./Child2.svelte";
  import { writable } from "svelte/store";
	import { setContext } from "svelte";

	let count = writable(10);

	setContext("value", count);
</script>

<div>
	App: {$count}
	<button on:click={() => $count++}>+</button>
	<button on:click={() => $count--}>-</button>
</div>

<Child2 />
