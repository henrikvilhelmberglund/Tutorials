<script>
	import Example2 from "./Example2.svelte";
	import Result2 from "./Result2.svelte";
</script>

<div class="flex gap-4">
	<div>
		<Example2 />
	</div>
	<div>
		<Result2 />
	</div>
</div>

<style>
	:global(input) {
		width: 100%;
	}
</style>
