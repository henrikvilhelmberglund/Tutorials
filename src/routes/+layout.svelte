<script>
  export let data;
  import { base } from "$app/paths";
</script>

<nav>
  {#if data.myPages}
    <ul>
      {#each data.myPages as link}
        <li>
          <a href="{base}/{link.title}">{link.title}</a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>

<slot />

<style uno:preflights uno:safelist global>
  :global(body) {
    @apply bg-slate-300;
  }
</style>
