<script>
	import B2 from "./B2.svelte";

	let a = 0;
</script>

<button on:click={() => a++}>A: {a}</button>

<B2>
	<div slot="header" let:sum>Header from A {sum + a}</div>
</B2>
