<script>
	import { base } from "$app/paths";
	export let data;
	//const { title, date, thumbnail } = data.meta;
	import Nav from "$lib/Nav.svelte";
	import PreviousNext from "$lib/PreviousNext.svelte";
	import { fade } from "svelte/transition";
	// console.log(data.titles);
	// console.log(data.slug);
	$: previous = data.titles[data.titles.indexOf(data.slug) - 1];
	$: next = data.titles[data.titles.indexOf(data.slug) + 1];
</script>

<div class="flex bg-[hsl(14,100%,60%)]">
	<Nav {data} subroute={"/template"} />
	<article in:fade class="flex-0 m-12 flex min-w-[50%] flex-1 flex-col items-center justify-start">
		<svelte:component this={data.post.default} />
		<PreviousNext {previous} {next} />
	</article>
</div>
