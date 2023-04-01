<script>
	import Controller from "./Controller.svelte";
	import { color } from "./data";
	export let title;
</script>

<div style="border: 1px solid {color}; padding: 10px;">
	{title}
	<Controller />
</div>
