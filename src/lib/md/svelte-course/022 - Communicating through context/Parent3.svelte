<script>
	import Child3 from "./Child3.svelte";

	let show = true;
</script>

<label for="">
	<input bind:checked={show} type="checkbox" />Show
</label>

{#if show}
	<Child3 />
	<Child3 />
{/if}
