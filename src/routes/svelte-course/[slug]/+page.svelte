<script>
	import { base } from "$app/paths";
	export let data;
	//const { title, date, thumbnail } = data.meta;
</script>

<div class="flex">
	<nav class="bg-slate-700">
		{#if data.myPages}
			<div class="flex flex-col [&>*]:m-4">
				{#each data.myPages as link}
					{#if link.bsvelte}
						<a class="my-2 hover:(outline-4 outline-black outline-solid) rounded-lg bg-slate-100 p-2" href="{base}/svelte-course/{link.title}"
							>{link.title}</a>
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
