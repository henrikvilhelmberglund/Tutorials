<script>
	import { setContext } from "svelte";
	import Controller4 from "./Controller4.svelte";
	export let title;
	export let color;

	setContext("color", color);
</script>

<div style="border: 1px solid {$color}; padding: 10px;">
	{title}
	<Controller4 />
</div>
