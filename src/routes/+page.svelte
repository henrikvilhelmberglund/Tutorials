<script>
	import { base } from "$app/paths";
	let routes = [
		{ link: "/svelte-course", name: "Svelte course" },
		{ link: "/old-tutorials", name: "Old tutorials" },
	];
</script>

<div class="flex">
	{#each routes as route, i}
		<div>
			<a
				class="mx-4 rounded-lg bg-green-400  p-4 text-black no-underline hover:bg-green-300"
				href="{base}{route.link}">
				{route.name}
			</a>
		</div>
	{/each}
</div>

<style>
</style>
