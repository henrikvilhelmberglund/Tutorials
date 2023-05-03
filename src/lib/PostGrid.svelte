<script>
	import { base } from "$app/paths";
	export let posts;
	export let route;
</script>

<div class="flex flex-wrap items-center justify-center gap-24 pt-24">
	<a
		class="hover:(outline-black outline-solid outline-2) flex  h-64 w-64 flex-col justify-center rounded-lg bg-white p-4 text-center text-3xl shadow-xl"
		href="{base}{route}/all">
		View all
	</a>
	{#each posts as post}
		{@const link = post.includes("-") ? post.split("-")[1] : post}
		<a
			class="hover:(outline-black outline-solid outline-2) flex h-64 w-64 flex-col justify-center rounded-lg  bg-white p-4 text-center text-3xl shadow-xl"
			href="{base}{route}/{post}">{link}</a>
	{/each}
</div>

<style>
</style>
