<script>
	import { base } from "$app/paths";
</script>

<nav class="flex pb-4">
	<a
		class="mx-4 rounded-lg bg-green-400  p-4 text-black no-underline hover:bg-green-300"
		href="{base}/">
		Home
	</a>
	<a
		class="mx-4 rounded-lg bg-green-400  p-4 text-black no-underline hover:bg-green-300"
		href="{base}/old-tutorials">
		Old tutorials
	</a>
	<a
		class="rounded-lg bg-green-400 p-4 text-black no-underline hover:bg-green-300"
		href="{base}/svelte-course">
		Svelte Course
	</a>
</nav>

<div class="w-full bg-red-900">
	<p class="text-6xl text-red-300">Warning!</p>
	<p class="text-3xl text-red-100">under construction :)</p>
</div>

<slot />

<style>
	:global(body) {
		@apply bg-slate-300;
	}
</style>
