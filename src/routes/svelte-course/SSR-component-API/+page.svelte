<script>
	import ShowMany from "$lib/ShowMany.svelte";
	import PretendThisIsHTML from "./PretendThisIsHTML.svelte";
	import PretendThisIsHTMLRaw from "./PretendThisIsHTML.svelte?raw";
	import Component from "./Component.svelte";
	import ComponentRaw from "./Component.svelte?raw";
</script>

<ShowMany
	name={[
		{
			name: "PretendThisIsHTML",
			comp: PretendThisIsHTML,
			raw: PretendThisIsHTMLRaw,
			text: "Not the most beautiful example but I hope it works.",
		},
		{
			name: "Component",
			comp: PretendThisIsHTML,
			raw: ComponentRaw,
			text: "",
		},
	]} />

<ShowMany
	name={[
		{
			name: "Component",
			comp: Component,
			raw: ComponentRaw,
			text: "Because of no CSR you can't actually click the tabs so here is the component code! (mostly to see the svelte:head code)",
		},
	]} />

<p>
	If this was a .js file we could also just use the rendered component code as our HTML and CSS.
</p>

<style>
</style>
