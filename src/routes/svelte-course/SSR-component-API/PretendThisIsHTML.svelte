<script>
	import { browser } from "$app/environment";
	import Component from "./Component.svelte";

	let code = Component.render(
		{
			// we can pass in props in the first argument
			a: 5,
			b: 10,
			title: "This is SSR component API",
		},
		// we can pass in context in the second argument
		{ context: new Map([["c", 20]]) }
	);
</script>

{#each Object.entries(code) as [key, value]}
	<div class="m-4 rounded bg-white p-4">
		{#if typeof value === "object"}
			{#each Object.entries(value) as [key, value]}
				<p>
					{key}: {value}
				</p>
			{/each}
		{:else}
			<p>
				{key}: {value}
			</p>
		{/if}
	</div>
{/each}

<style>
</style>
