<script>
	let show = false;
</script>

<input type="checkbox" bind:checked={show} />

{#if show}
	Component: <slot />
{/if}

<style>
</style>
