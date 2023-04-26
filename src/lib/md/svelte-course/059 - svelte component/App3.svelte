<script>
	import Foo from "./Foo.svelte";
	import Bar from "./Bar.svelte";

	let value = 0;

	$: component = value > 210 ? null : value > 50 ? Foo : Bar;
</script>

<input type="number" name="" bind:value id="" />

<!-- "this" takes in the component -->
<svelte:component this={component} bind:value a="a" b="b" c="c" />

<style>
</style>
