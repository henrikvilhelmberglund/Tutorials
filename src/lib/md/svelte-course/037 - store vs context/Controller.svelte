<script>
	import Button from "./Button.svelte";
</script>

<div class="containery">
	<Button style="grid-area: u;">Up</Button>
	<Button style="grid-area: d;">Down</Button>
	<Button style="grid-area: l;">Left</Button>
	<Button style="grid-area: r;">Right</Button>
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
