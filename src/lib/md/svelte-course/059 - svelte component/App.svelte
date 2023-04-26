<script>
	import Foo from "./Foo.svelte";
	import Bar from "./Bar.svelte";

	let value = 0;
</script>

<input type="number" name="" bind:value id="" />

{#if value > 50}
	<Foo bind:value a="a" b="b" c="c" />
{:else}
	<Bar bind:value a="a" b="b" c="c" />
{/if}

<style>
</style>
