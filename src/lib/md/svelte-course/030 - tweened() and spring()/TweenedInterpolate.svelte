<script>
	import { tweened } from "svelte/motion";
	const value = tweened("a",
		{
			duration: 4000,
			interpolate: (start, end) => (t) => {
				const startCode = start.charCodeAt(0);
				const endCode = end.charCodeAt(0);
				// if t is zero you get startCode
				// if t is 1 you get endCode
				// standard interpolation formula!
				const resultCode = (endCode - startCode) * t + startCode;
				return String.fromCharCode(Math.round(resultCode));
			},
		}
	);
</script>

<pre>{JSON.stringify($value, null, 2)}</pre>

<div class="buttons">
	<button
		on:click={() => {
			$value = "a";
		}}>a</button>
	<button
		on:click={() => {
			$value = "z";
		}}>z</button>
</div>

<style>
	.buttons {
		margin: 18px 0;
	}
</style>
