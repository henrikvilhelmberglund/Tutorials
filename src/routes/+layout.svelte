<script>
	export let data;
</script>

<div class="w-full bg-red-900 [&>*]:p-2">
	<p class="text-red-300 text-6xl">Warning!</p>
	<p class="text-red-100 text-3xl">under construction :)</p>
</div>

<slot />

<style uno:preflights uno:safelist global>
  :global(body) {
		@apply m-0 bg-slate-300;
	}
</style>
