<script>
	export let type;
</script>

<button class="btn-{type}"><slot /></button>

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
