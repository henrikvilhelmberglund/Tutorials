<script>
	import mousePosition from "./mousePosition";
	import Child from "./Child.svelte";
</script>

Mouse position: {$mousePosition.x}, {$mousePosition.y}

<div>
	<Child />
</div>
