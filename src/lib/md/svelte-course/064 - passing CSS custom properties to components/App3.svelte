<script>
	import Button3 from "./Button3.svelte";
</script>

<!-- we can wrap our component in an element and define our custom property there and our component will inherit it -->
<div style="--button-color: red;">
	<Button3>Red Button</Button3>
</div>
<Button3>Blue Button</Button3>
<div style="--button-color: yellow; --text-color: black">
	<Button3>Yellow Button</Button3>
</div>

<style>
</style>
