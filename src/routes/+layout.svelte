<script context="module">
	export const routes = [
		{
			link: "/",
			name: "Home",
			description: "",
		},
		{
			link: "/svelte-course",
			name: "Svelte course",
			description: "My understanding and examples of Li Hau Tan's Svelte course on freeCodeCamp.",
		},
		{
			link: "/VSCode",
			name: "VSCode",
			description: "Workflow enhancements for VSCode",
		},
		{
			link: "/CSS",
			name: "CSS",
			description: "CSS examples",
		},
		{
			link: "/old-tutorials",
			name: "Old tutorials",
			description: "Old kind of outdated tutorials.",
		},
	];
</script>

<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { SemanticColors } from "svelte-semantic-colors";
	// console.log($page.url.toString());
</script>

<!-- <SemanticColors /> -->
<nav class="flex bg-slate-200">
	{#each routes as route}
		<a
			class:!bg-orange-400={$page.url.toString().includes(route.link) && route.link !== "/"}
			class="hover:(outline-1 outline-solid) mx-4 my-2 rounded-lg bg-slate-100 p-4 font-semibold text-black no-underline outline-black"
			href="{base}{route.link}">
			{route.name}
		</a>
	{/each}
</nav>

<slot />

<style>
	:global(body) {
		@apply bg-slate-100;
	}
</style>
