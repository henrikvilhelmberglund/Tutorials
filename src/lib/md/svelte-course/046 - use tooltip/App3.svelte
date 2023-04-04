<script>
	import { tooltip } from "./tooltip.js";
</script>

<h1 title="This is a greeting" use:tooltip>Hello world!</h1>

<!-- adding some room to display the tooltip -->
<div class="pt-12" />

<!-- no idea how to add the UnoCSS classes in the .js file itself -->
<style>
	:global(.my-tooltip) {
		@apply "border-1 shadow-2xl" absolute rounded-lg border-solid border-slate-300 bg-white p-4 shadow-lg;
	}
</style>
