<script>
	export let type;
	export let style;
</script>

<button style="color: skyblue; {style}" {...$$restProps} class="btn-{type} {$$props.class}"
	><slot /></button>

<style>
	.btn-primary {
		background: #ff5722;
		color: white;
	}
	.btn-secondary {
		background: #5c5c6d;
		color: white;
	}
</style>
