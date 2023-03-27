<script>
	import { writable } from "svelte/store";
	const value = writable(0);
</script>

<button
	on:click={() => {
		$value--;
	}}>-</button>
{$value}
<button
	on:click={() => {
		$value++;
	}}>+</button>
