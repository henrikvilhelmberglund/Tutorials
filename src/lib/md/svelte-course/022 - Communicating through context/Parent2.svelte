<script>
	import Child2 from "./Child2.svelte";

	let show = true;
</script>

<label for="">
	<input bind:checked={show} type="checkbox" />Show
</label>

{#if show}
	<Child2 on:click />
	<Child2 on:click />
{/if}
