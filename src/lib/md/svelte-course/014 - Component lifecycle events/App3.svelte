<script>
	import Component3 from "./Component3.svelte";
	let condition;
</script>

<input type="checkbox" bind:checked={condition} name="" id="" />

{#if condition}
	<Component3 />
{/if}
