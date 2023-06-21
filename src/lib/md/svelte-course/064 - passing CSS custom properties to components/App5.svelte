<script>
	import Button5 from "./Button5.svelte";
</script>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
	<Button5>Red Button</Button5>
	<Button5>Blue Button</Button5>
	<span style="display: contents; --button-color: hotpink;">
		<Button5>Yellow Button</Button5>
		<Button5>Red Button</Button5>
	</span>
	<Button5>Blue Button</Button5>
	<Button5>Yellow Button</Button5>
</div>

<style>
</style>
