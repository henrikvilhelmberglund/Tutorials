<script>
	import { store2 } from "./data";
</script>

<input on:input={(e) => store2.set(e.currentTarget.value)} />

<style>
</style>
