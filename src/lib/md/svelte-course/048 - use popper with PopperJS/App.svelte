<script>
	import createPopperAction from "./usePopper";

	const [usePopperElement, usePopperTooltip] = createPopperAction();

	let placement = "bottom-start";
	let showTooltip = true;
</script>

<div use:usePopperElement class="element">
	<p>Hello world</p>
</div>

<label>
	<input type="checkbox" bind:checked={showTooltip} />
	Show Tooltip
</label>

<select bind:value={placement}>
	{#each ["top", "bottom", "left", "right"] as side}
		{#each ["-start", "", "-end"] as align}
			<option value={`${side}${align}`}>{side}{align}</option>
		{/each}
	{/each}
</select>

{#if showTooltip}
	<div
		class="tooltip"
		use:usePopperTooltip={{
			placement: placement,
			modifiers: [
				{
					name: "offset",
					options: {
						offset: [0, 10],
					},
				},
			],
		}}>
		<p>Tooltip</p>
	</div>
{/if}

<style>
	.tooltip {
		padding: 4px;
		border-radius: 4px;
		background: white;
		box-shadow: 2px 2px 2px #ddd;
		border: 1px solid #bbb;
	}
	.element {
		padding: 8px 16px;
		border: 1px solid black;
		width: 100px;
		height: 100px;
		display: grid;
		place-items: center;
		margin: 80px;
	}
</style>
