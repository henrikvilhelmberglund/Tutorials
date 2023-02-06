<script>
	import Example1v2 from "./Example1v2.svelte";
	import Example2 from "./Example2.svelte";

	let show = false;
</script>

<input bind:checked={show} type="checkbox" name="" id="" />

{#if show}
	<Example1v2 />
	<Example2 />
{/if}