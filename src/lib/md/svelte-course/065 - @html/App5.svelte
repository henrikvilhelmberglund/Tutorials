<script>
	import { tick, onDestroy } from "svelte";
	import { browser } from "$app/environment";
	import DOMPurify from "dompurify";

	let div;
	let html = `<b>this is bold text</b><button>Click me</button>`;

	function handleClick() {
		console.log("you clicked me!");
	}

	$: html && attachButtonListener();
	// $: html && attachButtonListener();

	async function attachButtonListener() {
		// awaiting tick means that we will wait until the component has mounted
		// to be sure we are attaching the event listener to the correct button and that div is bound and defined
		if (div) {
			div
				.querySelectorAll("button")
				.forEach((btn) => btn.removeEventListener("click", () => handleClick()));
		}
		await tick();
		div
			.querySelectorAll("button")
			.forEach((btn) => btn.addEventListener("click", () => handleClick()));
	}

	onDestroy(() => {
		div
			.querySelectorAll("button")
			.forEach((btn) => btn.removeEventListener("click", () => handleClick()));
	});
</script>

<textarea bind:value={html} cols="30" rows="10" />

{#if browser}
	<div bind:this={div}>{@html DOMPurify.sanitize(html)}</div>
{/if}

<style>
</style>
