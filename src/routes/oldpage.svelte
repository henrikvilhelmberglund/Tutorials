<script>
  import Markdown from "/src/lib/markdown.md";
  import Post from "/src/lib/Post.svelte";
  export let data;
</script>

<h1>Warning!</h1>
<p>Under construction :)</p>

<Markdown />

<ul>
  {#each data.myMenu as post}
    <li>
      <svelte:component this={post.newbody} />
    </li>
  {/each}
</ul>
