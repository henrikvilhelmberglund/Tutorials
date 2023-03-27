<script>
	import { writable } from "svelte/store";
	const value = writable(1);
</script>

<pre>{JSON.stringify($value, null, 2)}</pre>

<div class="buttons">

  
  <button
	on:click={() => {
    $value = 0;
	}}>0</button>
<button
on:click={() => {
  $value = 20;
}}>20</button>

</div>
<style>
	.buttons {
		margin: 18px 0;
	}
</style>
