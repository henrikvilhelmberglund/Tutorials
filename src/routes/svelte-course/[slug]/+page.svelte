<script>
	import { base } from "$app/paths";
	export let data;
	//const { title, date, thumbnail } = data.meta;
</script>

<div class="flex">
	<nav class="bg-white">
		{#if data.myPages}
			<div class="flex flex-col [&>*]:m-4">
				{#each data.myPages as link}
					{#if link.bsvelte}
						<br />
						<a
							class:!bg-orange-400={link.title === data.slug}
							class="hover:(outline-4 outline-solid) my-1 rounded-lg bg-slate-200 p-2 outline-black"
							href="{base}/svelte-course/{link.title}">{link.title}</a>
					{/if}
				{/each}
			</div>
		{/if}
	</nav>

	<svelte:component this={data.body.postContent} />
</div>
<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->
