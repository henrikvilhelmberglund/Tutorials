<script>
	export let type;
	export let style;
</script>

<button class="btn-{type}" {style}><slot /></button>

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
