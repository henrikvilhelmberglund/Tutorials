<script>
	import C from "./C.svelte";
</script>

B header: <slot name="b-header" />
<br />

<C>
	<svelte:fragment slot="header">
		<div>Header from B</div>
		<div>Header from B</div>
	</svelte:fragment>
</C>

<style>
</style>
