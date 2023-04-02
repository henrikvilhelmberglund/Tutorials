<script>
	import Example1 from "./Example1.svelte";
	import Result1 from "./Result1.svelte";
</script>

<div class="flex gap-4">
	<div>
		<Example1 />
	</div>
	<div>
		<Result1 />
	</div>
</div>

<style>
	:global(input) {
		width: 100%;
	}
</style>
