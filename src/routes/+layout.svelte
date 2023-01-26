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

<div class="w-full bg-red-900 [&>*]:p-2">
  <p class="text-red-300 text-6xl">Warning!</p>
  <p class="text-red-100 text-3xl">under construction :)</p>
</div>

<slot />

<style uno:preflights uno:safelist global>
  :global(body) {
    @apply bg-slate-300 m-0;
  }
</style>
