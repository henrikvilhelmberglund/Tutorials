<script>
	export let title = "";

	let isHovered = false;
	let x;
	let y;
	let offset = 5;

	function mouseOver() {
		isHovered = true;
		x = event.pageX + offset;
		y = event.pageY + offset;
	}
	function mouseMove() {
		x = event.pageX + offset;
		y = event.pageY + offset;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div on:mouseover={mouseOver} on:mouseleave={mouseLeave} on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div
		style="top: {y}px; left: {x}px;"
		class="shadow-lg border-1 absolute rounded-lg border-solid border-slate-300 bg-white p-4 shadow-2xl">
		{title}
	</div>
{/if}

<style>
</style>
