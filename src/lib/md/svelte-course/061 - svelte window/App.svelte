<script>
	import { browser } from "$app/environment";
	let innerWidth = 0;
	import { onMount } from "svelte";

	let searchBar;

	onMount(() => {
		innerWidth = window.innerWidth;
		function onResize() {
			innerWidth = window.innerWidth;
		}
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	});

	onMount(() => {
		function onKeydown(event) {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {
				searchBar.focus();
				event.preventDefault();
			}
		}
		window.addEventListener("keydown", onKeydown);
		return () => window.removeEventListener("keydown", onKeydown);
	});
</script>

<input bind:this={searchBar} placeholder="Search for..." />

<div>
	Width: {innerWidth}
</div>

<style>
</style>
