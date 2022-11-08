<script>
  export let data;
  import { base } from "$app/paths";
</script>

<nav>
  {#if data.myMenu}
    <ul>
      {#each data.myMenu as link}
        <li>
          <a href="{base}/{link.title}">{link.title}</a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>

<slot />

<style>
</style>
