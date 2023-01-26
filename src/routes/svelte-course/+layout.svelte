<script>
	export let data;
	import { base } from "$app/paths";
</script>

<nav>
	{#if data.myPages}
		<ul>
			{#each data.myPages as link}
      {#if link.bsvelte}
				<li>
					<!-- <a href="{base}/{link.title}">{link.title}</a> -->
          <!-- {:else} -->
					<a href="{base}/svelte-course/{link.title}">{link.title}</a>
				</li>
        {/if}
			{/each}
		</ul>
	{/if}
</nav>

<slot />
