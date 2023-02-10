<script>
	import Child from "./Child.svelte";

	let show = true;
</script>

<label for="">
	<input bind:checked={show} type="checkbox" />Show
</label>

{#if show}
	<Child on:click />
	<Child on:click />
{/if}
