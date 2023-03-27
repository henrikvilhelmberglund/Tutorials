<script>
	import { base } from "$app/paths";
	export let data;
	//const { title, date, thumbnail } = data.meta;
</script>

<nav>
	{#if data.myPages}
		<ul>
			{#each data.myPages as link}
				{#if link.bsvelte}
					<li>
						<a href="{base}/svelte-course/{link.title}">{link.title}</a>
					</li>
				{/if}
			{/each}
		</ul>
	{/if}
</nav>

<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->

<svelte:component this={data.body.postContent} />
