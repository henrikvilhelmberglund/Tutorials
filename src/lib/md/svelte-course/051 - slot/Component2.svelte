<script>
	let show = false;
</script>

<input type="checkbox" bind:checked={show} />

{#if show}
	<!-- we can have a fallback inside of the slot -->
	<slot>This is a fallback for when nothing was passed into the slot from the parent</slot>
{/if}

<style>
</style>
