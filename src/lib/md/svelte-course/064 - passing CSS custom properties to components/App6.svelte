<script>
	import Button6 from "./Button6.svelte";
</script>

<div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
	<Button6>Red Button</Button6>
	<Button6>Blue Button</Button6>

	<Button6 --button-color="hotpink" --text-color="blue">Yellow Button</Button6>
	<Button6 --button-color="hotpink" --text-color="slateblue">Red Button</Button6>

	<Button6>Blue Button</Button6>
	<Button6>Yellow Button</Button6>
</div>

<style>
</style>
