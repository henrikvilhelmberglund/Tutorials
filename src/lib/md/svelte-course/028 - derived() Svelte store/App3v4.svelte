<script>
	import { writable, derived } from "svelte/store";
	const num = writable(10);
	const num2 = writable(42);

	// derived from one store
	const doubleOfNum = derived(num, (haha) => {
		return haha * 2;
	});

	const multiplication = derived([num, num2], ([$num, $num2]) => {
		return $num * $num2;
	});

	const delayedNum = derived(
		num,
		($num, set) => {
			setTimeout(() => {
				set($num);
			}, 1000);
		},
		"not set"
	);
</script>

<input bind:value={$num} type="number" />
<input bind:value={$num2} type="number" />

<div>
	{$num} * 2 =
	{$doubleOfNum}
</div>

<div>
	{$num} * {$num2} =
	{$multiplication}
</div>

<div>
	delayed: {$delayedNum}
</div>
