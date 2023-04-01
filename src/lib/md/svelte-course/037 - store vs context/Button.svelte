<script>
	import { color } from "./data";
	export let style = "";
</script>

<button style="{style}; background: {color}; color:white;" {...$$restProps}>
	<slot />
</button>