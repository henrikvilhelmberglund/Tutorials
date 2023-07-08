<script>
	import Component from "./Component.svelte";
</script>

<Component on:product={(e) => console.log("product", e.detail)} />

<style>
</style>
