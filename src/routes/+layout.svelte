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
			link: "/workflow",
			name: "Workflow",
			description: "Workflow enhancements for VSCode and others",
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
	import { onNavigate } from "$app/navigation";
	// import { SemanticColors } from "svelte-semantic-colors";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<!-- <SemanticColors /> -->
<nav class="flex gap-1 bg-slate-200 md:w-[99.1vw]">
	{#each routes as route}
		<a
			class:!bg-orange-400={$page.url.toString().includes(route.link) && route.link !== "/"}
			class="hover:(outline-1 outline-solid) my-2 min-w-[48px] rounded-lg bg-slate-100 py-2 text-center font-semibold text-black no-underline outline-black md:mx-4 md:p-4"
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
