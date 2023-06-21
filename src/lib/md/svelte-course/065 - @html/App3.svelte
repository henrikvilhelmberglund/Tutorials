<script>
	import { browser } from "$app/environment";
	import DOMPurify from "dompurify";

	let html = `<b>this is bold text</b><button onClick="(function(){
    alert('You have been hacked!');
    return false;
  })();return false;">Click me</button>`;
</script>

<textarea bind:value={html} cols="30" rows="10" />

<!-- running DOMPurify on the server requires some extra steps so skipping that here -->
{#if browser}
	<div>{@html DOMPurify.sanitize(html)}</div>
{/if}

<style>
</style>
