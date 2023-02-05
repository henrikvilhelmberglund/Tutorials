<script>
	import { onDestroy, beforeUpdate, afterUpdate } from "svelte";
	import markUpdate from "./markUpdate";
	let count = 0;

	const action = markUpdate();

	onDestroy(() => {
		console.log("onDestroy");
	});
	beforeUpdate(() => {
		console.log("beforeUpdate");
	});
	afterUpdate(() => {
		console.log("afterUpdate");
	});

	function update() {
		count++;
	}
</script>

<button use:action on:click={() => update()}>Click me</button>
{count}
