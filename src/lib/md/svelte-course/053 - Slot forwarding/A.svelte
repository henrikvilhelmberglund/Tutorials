<script>
	import B from "./B.svelte";
</script>

<B>
	<!-- note that we need to specify the slot name if we have a named slot -->
	<div slot="b-header">Header from A</div>
</B>

<style>
</style>
