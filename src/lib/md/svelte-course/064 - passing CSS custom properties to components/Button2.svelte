<script>
	export let buttonColor = "red";
	export let textColor = "white";
</script>

<button style="color: {textColor}">
	<span>
		<slot />
	</span>
	<div>Some text</div>
</button>

<style>
	span {
		background: var(--button-color, blue);
	}
	div {
		color: var(--button-color, blue);
	}
</style>
