<script>
	import C2 from "./C2.svelte";
	// needed for SSR apparently
	let count = 0;

	let b = 0;
</script>

<button on:click={() => b++}>B: {b}</button>

<C2>
	<slot name="header" slot="header" let:count sum={count + b}>fallback: {count}</slot>
</C2>
