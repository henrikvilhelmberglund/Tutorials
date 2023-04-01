<script>
	import { setContext } from "svelte";
	import Controller2 from "./Controller2.svelte";
	export let title;
	export let color;

	setContext("color", color);
</script>

<div style="border: 1px solid {color}; padding: 10px;">
	{title}
	<Controller2 />
</div>