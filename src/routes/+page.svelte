<script>
	import { base } from "$app/paths";
	let routes = [
		{ link: "/svelte-course", name: "Svelte course" },
		{ link: "/old-tutorials", name: "Old tutorials" },
	];
</script>

<div class="flex flex-col items-center">
	<div>
		<h1 class="text-3xl">Welcome to my tutorials page!</h1>
	</div>

	<div class="flex w-full items-center justify-evenly">
		{#each routes as route, i}
			<div class="flex h-96 w-full">
				<!-- TODO add images for these instead of text -->
				<a
					class="mx-4 flex w-full flex-col items-center justify-center rounded-lg bg-white p-4 text-4xl text-black no-underline hover:bg-green-300"
					href="{base}{route.link}">
					{route.name}
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
</style>
