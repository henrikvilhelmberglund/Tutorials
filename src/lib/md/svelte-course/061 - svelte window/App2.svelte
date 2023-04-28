<script>
	import { browser } from "$app/environment";
	let innerWidth = 0;
	import { onMount } from "svelte";

	// for SSR
	if (browser) {
		innerWidth = window.innerWidth;
	}

	let searchBar;

	function onKeydown(event) {
		if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "f") {
			searchBar.focus();
			event.preventDefault();
		}
	}
</script>

<svelte:window on:keydown={onKeydown} bind:innerWidth />

<input bind:this={searchBar} placeholder="Search for..." />

<div>
	Width: {innerWidth}
</div>

<style>
</style>
