<script>
	import Button4 from "./Button4.svelte";
</script>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
	<Button4>Red Button</Button4>
	<Button4>Blue Button</Button4>
	<span style="--button-color: hotpink;">
		<Button4>Yellow Button</Button4>
		<Button4>Red Button</Button4>
	</span>
	<Button4>Blue Button</Button4>
	<Button4>Yellow Button</Button4>
</div>

<style>
</style>
