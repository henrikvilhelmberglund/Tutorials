<script>
	import data2 from "./data2";
	let show = false;

	import markUpdate2 from "./markUpdate2";
	const action = markUpdate2();

</script>

<div
	use:action
	style="position: relative; cursor: default;"
	on:focus={() => (show = true)}
	on:mouseover={() => (show = true)}
	on:mouseleave={() => (show = false)}>
	<slot />
	{#if show}
		<div class="popover">
			<ul>
				{#each $data2.notifications as noti}
					<li>{noti}</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style>
	.popover {
		position: absolute;
		top: calc(100% + 6px);
		right: 0;
		background: white;
		border: 1px solid;
		padding: 12px 8px;
		white-space: nowrap;
	}
	ul {
		padding-left: 20px;
	}
</style>
