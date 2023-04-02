<script>
	let name = "world";

	function lihauAction(node, params) {
		console.log(node, params);
		node.innerHTML = params;
		return {
			update(newParams) {
				console.log("updated!", newParams);
				node.innerHTML = newParams;
			},
			destroy() {
				console.log("node was destroyed");
			},
		};
	}
</script>

<input bind:value={name} />

<div use:lihauAction={name} />

name: {name}

<style>
</style>
