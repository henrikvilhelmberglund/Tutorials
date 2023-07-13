<script>
	import { base } from "$app/paths";
	import { routes } from "./+layout.svelte";
</script>

<div class="flex flex-col items-center text-center">
	<div>
		<h1 class="text-5xl">Tutorials</h1>
		<h2 class="text-2xl">Welcome to my tutorials page!</h2>
	</div>

	<div class="flex w-full items-center justify-evenly pt-12">
		{#each routes as route, i}
			<!-- TODO add images for these instead of text -->
			{#if route.link !== "/"}
				<article class="flex h-96 w-full">
					<a
						class="mx-4 flex w-full flex-col items-center justify-center rounded-lg bg-white p-4 text-4xl text-black no-underline hover:(outline-1 outline-solid outline-black)"
						href="{base}{route.link}">
						{route.name}
						<p class="text-lg">{route.description}</p>
					</a>
				</article>
			{/if}
		{/each}
	</div>
</div>

<style>
</style>
