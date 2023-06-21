<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import DOMPurify from "dompurify";

	let div;
	let html = `<b>this is bold text</b><button>Click me</button>`;

	function handleClick() {
		console.log("you clicked me!");
	}

	onMount(() => {
		div.querySelector("button").addEventListener("click", () => handleClick());
    // cleanup!
		return () => {
			div.querySelector("button").removeEventListener("click", () => handleClick());
		};
	});
</script>

<textarea bind:value={html} cols="30" rows="10" />

{#if browser}
	<div bind:this={div}>{@html DOMPurify.sanitize(html)}</div>
{/if}

<style>
</style>
