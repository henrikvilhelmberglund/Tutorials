<script>
	export let data;
	import { base } from "$app/paths";
</script>

<nav>
	{#if data.myPages}
		<ul>
			{#each data.myPages as link}
				<li>
          {#if !link.bsvelte}
					<a href="{base}/{link.title}">{link.title}</a>
          {:else}
					<a href="{base}/svelte-course/{link.title}">{link.title}</a>
          {/if}
				</li>
			{/each}
		</ul>
	{/if}
</nav>

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
