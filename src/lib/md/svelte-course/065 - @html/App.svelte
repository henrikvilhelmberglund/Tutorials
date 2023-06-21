<script>
	let html = `<b>this is bold text</b><button>click me</button>`;

	function innerHTML(node, html) {
		node.innerHTML = html;

		return {
			update(html) {
				node.innerHTML = html;
			},
		};
	}
</script>

<textarea bind:value={html} cols="30" rows="10" />

<div use:innerHTML={html} />

<style>
</style>
