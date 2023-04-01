<script>
	import Button4 from "./Button4.svelte";
</script>

<div class="containery">
	<Button4 style="grid-area: u;">Up</Button4>
	<Button4 style="grid-area: d;">Down</Button4>
	<Button4 style="grid-area: l;">Left</Button4>
	<Button4 style="grid-area: r;">Right</Button4>
</div>

<style>
	.containery {
		display: grid;
		grid-template-columns: 50px 50px 50px;
		grid-template-rows: 50px 50px;
		grid-template-areas:
			"_ u __"
			"l d r ";
	}
</style>
