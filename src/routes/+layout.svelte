<script>
	export let data;
	import { base } from "$app/paths";
	// TODO enable reset and fix CSS
	// import '@unocss/reset/antfu.css'
</script>

<nav>
	<a class="m-4 rounded-lg bg-green-300  p-4 text-black no-underline" href="{base}/"> Home </a>
	<a class="rounded-lg bg-green-300 p-4 text-black no-underline" href="{base}/svelte-course">
		Svelte Course
	</a>
</nav>

<div class="w-full bg-red-900 [&>*]:p-2">
	<p class="text-6xl text-red-300">Warning!</p>
	<p class="text-3xl text-red-100">under construction :)</p>
</div>

<slot />

<style uno:preflights uno:safelist global>
	:global(body) {
		@apply m-0 bg-slate-300;
	}
</style>
