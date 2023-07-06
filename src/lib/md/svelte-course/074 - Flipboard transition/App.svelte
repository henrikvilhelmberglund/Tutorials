<script>
	let show = false;
</script>

<div>
	<label>
		<input bind:checked={show} type="checkbox" /> Show
	</label>
</div>

{#if show}
	<div>
		<span class="header">Hello world</span>
	</div>
	<div>
		<span class="text">Custom Transitions!</span>
	</div>
{/if}

<style>
	span {
		font-size: 20px;
	}
	.header {
		color: #ff3e00;
	}
	.text {
		color: #1f5389;
	}
</style>
