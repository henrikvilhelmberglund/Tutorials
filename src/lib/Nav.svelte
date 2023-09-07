<script>
	import { base } from "$app/paths";
	export let data;
	export let subroute = "";
</script>

<nav class="w-[10%] bg-white">
	{#if data.titles}
		<div class="flex flex-col">
			{#each data.titles as link}
				{@const displayLink = link.includes("-") ? link.split("-")[1] : link}
				<br />
				<a
					class:!bg-orange-400={link === data.slug}
					class="hover:(outline-1 outline-solid) my-1 rounded-lg bg-slate-200 md:p-2 p-1  md:w-28 outline-black"
					href="{base}{subroute}/{link}">{displayLink}</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
</style>
