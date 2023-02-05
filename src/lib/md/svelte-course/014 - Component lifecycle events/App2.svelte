<script>
	import Component2 from "./Component2.svelte";
	let condition;
</script>

<input type="checkbox" bind:checked={condition} name="" id="" />

{#if condition}
	<Component2 />
{/if}
