<script>
	import A from "./A.svelte";
</script>

<A />

<A>
	<div slot="a">Something for a</div>
	<div slot="b">Something for b</div>
	<div slot="c">Something for c</div>
</A>

<hr class="border-black my-4">

<A>
	<div slot="a">Something for a</div>
  <!-- note that this still says B: because passing in an empty slot still counts as something-->
	<div slot="b"></div>
	<div slot="c">Something for c</div>
</A>

<style>
</style>
