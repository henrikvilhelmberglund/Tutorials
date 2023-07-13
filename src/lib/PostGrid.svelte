<script>
	import { base } from "$app/paths";
	export let posts;
	export let route;

	posts = ["all", ...posts];
</script>

<div class="flex flex-wrap items-center h-min justify-center gap-6 pt-10">
	{#each posts as post}
		{@const link = post === "all" ? "View all" : post.includes("-") ? post.split("-")[1] : post}
		<a
			class="hover:(outline-black outline-solid outline-1) w-48 h-48 md:w-96 md:h-96 flex flex-col justify-center rounded-lg  bg-white p-4 text-center text-3xl shadow-xl"
			href="{base}{route}/{post}">{link}</a>
	{/each}
</div>

<style>
</style>
