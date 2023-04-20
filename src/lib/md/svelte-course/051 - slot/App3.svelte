<script>
	import Component3 from "./Component3.svelte";

	let count = 0;
</script>

<Component3>
	<slot:template slot="header">
		{count}
		<button on:click={() => count--}>-</button>
	</slot:template>
	<div slot="footer">Element for footer</div>
</Component3>

<Component3 />

<style>
	/* styles are still scoped so even if we're adding something to a slot the styles come from this component! */
	button {
		font-size: 48px;
	}
</style>
