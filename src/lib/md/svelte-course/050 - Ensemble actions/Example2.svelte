<script>
	import Example2Other from "./Example2Other.svelte";
	import getMarkUpdateAction from "./example2";

	const markUpdate = getMarkUpdateAction();

	let count = 0;
</script>

<div use:markUpdate>
	{count}
</div>

<button use:markUpdate on:click={() => count++}>++</button>

<Example2Other action={markUpdate} />

<style>
</style>
