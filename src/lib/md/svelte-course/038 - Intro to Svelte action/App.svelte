<script>
	let show = true;
	function action(node, params) {
    let myTimeout;
		console.log("hi! I was created!", node);
		if (params) {
			myTimeout = setTimeout(() => {
				node.innerHTML = params;
				console.log("wow! I was changed!");
			}, 3000);
		}
		return {
			destroy() {
				console.log("bye! I was destroyed");
				if (params) {
					clearTimeout(myTimeout);
				}
			},
		};
	}
</script>

<input type="checkbox" bind:checked={show} />

{#if show}
	<div use:action>Hello</div>
	<h1 use:action={"My text changed! 😊"}>My text will change soon!</h1>
{/if}

<style>
</style>
