<script>
	import { onDestroy, beforeUpdate, afterUpdate } from "svelte";
	import { foo } from "./foo";
	let count = 0;

	// this will run onMount() from foo.js
	foo();

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

<button on:click={() => update()}>Click me</button>
{count}
