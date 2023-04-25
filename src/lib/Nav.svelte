<script>
	import { base } from "$app/paths";
	export let data;
	export let subroute = "";
</script>

<nav class="w-[10%] bg-white">
	{#if data.titles}
		<div class="flex flex-col [&>*]:m-4">
			{#each data.titles as link}
				<br />
				<a
					class:!bg-orange-400={link === data.slug}
					class="hover:(outline-4 outline-solid) my-1 rounded-lg bg-slate-200 p-2 outline-black"
					href="{base}{subroute}/{link}">{link}</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
</style>
