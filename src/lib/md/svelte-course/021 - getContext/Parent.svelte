<script>
	import Child from "./Child.svelte";
	import Child2 from "./Child2.svelte";
	let color = "red";
</script>

<div class="border border-black">
	Parent A
	<Child {color} />
	<Child2 {color} />
</div>

<style>
</style>
