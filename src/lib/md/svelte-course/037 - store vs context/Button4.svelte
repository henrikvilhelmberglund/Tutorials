<script>
	import { getContext } from "svelte";
	const color = getContext("color");
	export let style = "";
</script>

<button style="{style}; background: {$color}; color:white;" {...$$restProps}>
	<slot />
</button>
