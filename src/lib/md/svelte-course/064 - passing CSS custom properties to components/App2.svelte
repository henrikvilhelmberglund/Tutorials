<script>
	import Button2 from "./Button2.svelte";
</script>

<!-- we can wrap our component in an element and define our custom property there and our component will inherit it -->
<div style="--button-color: red;">
	<Button2 buttonColor="red">Red Button</Button2>
</div>
<Button2 buttonColor="blue">Blue Button</Button2>
<div style="--button-color: yellow;">
	<Button2 buttonColor="yellow" textColor="black">Yellow Button</Button2>
</div>

<style>
</style>
