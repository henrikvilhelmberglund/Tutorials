<script>
	import Button3 from "./Button3.svelte";
</script>

<div class="containery">
	<Button3 style="grid-area: u;">Up</Button3>
	<Button3 style="grid-area: d;">Down</Button3>
	<Button3 style="grid-area: l;">Left</Button3>
	<Button3 style="grid-area: r;">Right</Button3>
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
