<script>
	import Foo from "./Foo.svelte";
	import Bar from "./Bar.svelte";

	let value = 0;
</script>

<input type="number" name="" bind:value id="" />

<!-- "this" takes in the component -->
<svelte:component this={value > 50 ? Foo : Bar} bind:value a="a" b="b" c="c" />

<style>
</style>
