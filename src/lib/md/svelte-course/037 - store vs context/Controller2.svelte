<script>
	import Button2 from "./Button2.svelte";
</script>

<div class="containery">
	<Button2 style="grid-area: u;">Up</Button2>
	<Button2 style="grid-area: d;">Down</Button2>
	<Button2 style="grid-area: l;">Left</Button2>
	<Button2 style="grid-area: r;">Right</Button2>
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
