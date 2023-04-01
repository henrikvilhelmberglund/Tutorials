<script>
	import Controller3 from "./Controller3.svelte";
	export let title;
	import { color } from "./data3";
</script>

<div style="border: 1px solid {$color}; padding: 10px;">
	{title}
	<Controller3 />
</div>
