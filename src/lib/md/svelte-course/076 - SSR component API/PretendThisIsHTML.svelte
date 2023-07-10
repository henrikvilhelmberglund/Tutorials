<script>
	import { browser } from "$app/environment";
	import Component from "./Component.svelte";

	let code;
	if (!browser) {
		code = Component.render();
	}
</script>

{code}

<style>
</style>
