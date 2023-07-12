<script>
	import ShowMany from "$lib/ShowMany.svelte";
	import CompileComponent from "./CompileComponent.svelte";
	import CompileComponentRaw from "./CompileComponent.svelte?raw";
	import pageserverjsComponentRaw from "./pageserverjsComponent.svelte?raw";

	export let data;
</script>

<ShowMany
	name={[
		{
			name: "+page.server.js",
			comp: CompileComponent,
			raw: pageserverjsComponentRaw,
			text: "I had to use a load function since preprocessed returned a promise. Also the code is a component in which I pasted the contents of the +page.server.js because I have no idea how to access it as a component (or if it's even possible).",
		},
	]} />

<p>The result is this:</p>

<div class="flex flex-col">
	{#each Object.entries(data.code) as [key, value]}
		<div class="my-4 ml-1 rounded bg-blue-100 p-2">
			{#if typeof value === "object"}
				{#each Object.entries(value) as [key, value]}
					{key}: {JSON.stringify(value)}
				{:else}
					{key}: {value}
				{/each}
			{/if}
		</div>
	{/each}
</div>

I couldn't actually figure out how to use the compiled component as a real component using {"<"}svelte:component>...

<style>
</style>
