<script>
	import { base } from "$app/paths";
	export let data;
	//const { title, date, thumbnail } = data.meta;
	import Nav from "$lib/Nav.svelte";
</script>

<div class="flex">
	<Nav {data} subroute={"/svelte-course"} />
	<svelte:component this={data.post.default} />
</div>
<!-- 

  <h1>{title}</h1>
  <p>{date}</p>
  <img src={thumbnail} alt={title} />
-->
<!-- {JSON.stringify(data.body)} -->
