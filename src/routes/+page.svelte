<script>
  import Markdown from "/src/lib/markdown.md";
  export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Markdown />

<ul>
  {#each data.myMenu as post}
    <li>
      <a href="/blog/{post.link}">
        {post.title}
      </a>
    </li>
  {/each}
</ul>
