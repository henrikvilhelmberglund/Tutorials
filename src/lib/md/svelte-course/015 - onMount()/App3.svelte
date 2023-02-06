<script>
	import Example1v3 from "./Example1v3.svelte";
	import Example2v3 from "./Example2v3.svelte";

	let show = false;
</script>

<input bind:checked={show} type="checkbox" name="" id="" />

{#if show}
	<Example1v3 />
	<Example2v3 />
{/if}
