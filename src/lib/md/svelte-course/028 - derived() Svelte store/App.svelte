<script>
	import { writable, derived } from "svelte/store";
	const num = writable(10);
	const newNum = derived(num, (haha) => {
		return haha * 2;
	});
</script>

<input bind:value={$num} type="number" />

<div>
	{$num} * 2 =
	{$newNum}
</div>
