<script>
	export let value;
</script>

I am Bar

<button on:click={() => (value = 200)}>200</button>
<button on:click={() => (value = 400)}>400</button>

<style>
</style>
