<script>
	let flavors = [];
</script>

<label>
	<input type="checkbox" bind:group={flavors} value="1" />1
</label>
<label>
	<input type="checkbox" bind:group={flavors} value="2" />2
</label>
<label>
	<input type="checkbox" bind:group={flavors} value="3" />3
</label>

Flavors: {flavors.join(",") || "-"}

<style>
</style>
