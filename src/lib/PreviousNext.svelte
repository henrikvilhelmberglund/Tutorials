<script>
  export let previous;
  export let next;
</script>

<nav
class:!justify-end={!previous}
class:!justify-start={!next}
class="mt-6 flex w-[67%] justify-between gap-12">
{#if previous}
  {@const displayLink = previous.includes("-") ? previous.split("-")[1] : previous}
  <a
    class="hover:(outline-black outline-solid) rounded-md bg-white p-2 text-center outline-1"
    href={previous}>
    <p>Previous post:</p>
    <p class="text-4xl">{displayLink}</p></a>
{/if}
{#if next}
  {@const displayLink = next.includes("-") ? next.split("-")[1] : next}
  <a
    class="hover:(outline-black outline-solid) rounded-md bg-white p-2 text-center outline-1"
    href={next}>
    <p>Next post:</p>
    <p class="text-4xl">{displayLink}</p></a>
{/if}
</nav>

<style>
  
</style>