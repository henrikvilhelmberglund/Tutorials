<script>
	import Nav from "$lib/Nav.svelte";
	import PreviousNext from "$lib/PreviousNext.svelte";
	import { fade } from "svelte/transition";
	export let data;
	//const { title, date, thumbnail } = data.meta;
	$: previous = data.titles[data.titles.indexOf(data.slug) - 1];
	$: next = data.titles[data.titles.indexOf(data.slug) + 1];
</script>

<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->

<div class="flex bg-blue-200">
	<Nav {data} subroute={"/old-tutorials"} />
	<article in:fade class="flex-0 m-12 flex min-w-[50%] flex-1 flex-col items-center justify-start">
		<svelte:component this={data.post.default} />
		<PreviousNext {previous} {next} />
	</article>
</div>
