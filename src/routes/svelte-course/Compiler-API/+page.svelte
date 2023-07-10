<script>
	import ShowMany from "$lib/ShowMany.svelte";
	import CompileComponent from "./CompileComponent.svelte";
	import CompileComponentRaw from "./CompileComponent.svelte?raw";
</script>

<ShowMany
	name={[
		{
			name: "CompileComponent",
			comp: CompileComponent,
			raw: CompileComponentRaw,
			text: "Our code looks something like this.",
		},
	]} />

<style>
</style>
