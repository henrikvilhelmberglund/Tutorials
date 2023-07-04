<script>
	import { fade, blur, fly, slide, scale } from "svelte/transition";
	import { bounceOut, sineOut } from "svelte/easing";
	import { browser } from "$app/environment";
	const data = [
		{ title: "Hall", items: ["Sweep the floor", "Mop the floor", "Throw the rubbish"] },
		{ title: "Kitchen", items: ["Wash the plates", "Tidy the table", "Boil the soup"] },
		{ title: "Toilet", items: ["Brush the sink", "Flush the toilet", "Scrub the floors"] },
	];
	let lists = [
		{ show: true, items: [0, 1] },
		{ show: false, items: [0] },
		{ show: false, items: [0, 1] },
	];
	let media;
	let noAnimation;
	if (browser) {
		media = matchMedia("(prefers-reduced-motion: reduce)");
		noAnimation = media.matches;
		media.onchange = (event) => {
			noAnimation = event.matches;
		};
	}

	function t() {
		return {
			duration: 0,
			delay: 0,
		};
	}

	$: niceFade = noAnimation ? t : fade;
	$: niceFly = noAnimation ? t : fly;
</script>

<div class="containery">
	{#each lists as list, i (i)}
		{#if list.show}
			<div
				in:niceFade={{ duration: 400 }}
				on:introend={() => {
					list.shown = true;
				}}
				on:outroend={() => {
					list.shown = false;
				}}
				class="list">
				<div class="title">{data[i].title}</div>
				<button class="close" on:click={() => (list.show = false)}>X</button>
				<ul class="items">
					{#each list.items as item, index (item)}
						<li
							in:niceFly|global={{
								x: 120,
								delay: list.shown ? 0 : 400 + index * 300,
								easing: bounceOut,
								duration: 1500,
							}}
							out:slide
							class="item">
							<button
								on:click={() => {
									list.items = list.items.filter((i) => i !== item);
								}}>
								<span>{data[i].items[item]}</span><span class="pl-4">X</span></button>
						</li>
					{/each}
					{#if list.items.length !== 3}
						<button
							class="add-item"
							on:click={() => {
								const potential = new Set([0, 1, 2]);
								list.items.forEach((item) => potential.delete(item));
								list.items.push(Array.from(potential)[0]);
								list.items = list.items;
							}}>
							Add item
						</button>
					{/if}
				</ul>
			</div>
		{:else}
			<button class="add-list" on:click={() => (list.show = true)}>+</button>
		{/if}
	{/each}
</div>

<style>
	.containery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.list,
	.add-list {
		margin: 20px;
		border: 1px solid #999;
		border-radius: 4px;
		padding: 20px;
		box-shadow: 4px 4px 4px #ddd;
		position: relative;
	}
	.title {
		font-size: 18px;
		font-weight: bold;
	}
	.close {
		position: absolute;
		top: 10px;
		right: 10px;
		background: none;
		border: none;
		cursor: pointer;
	}
	.items {
		list-style: none;
		padding: 0;
		height: 250px;
	}
	.items li {
		margin-bottom: 16px;
		padding: 8px;
		border: 1px solid #999;
		border-radius: 4px;
		box-shadow: 2px 2px 2px #ddd;
		transition: all 0.5s ease;
	}
	.items li:hover {
		box-shadow: 4px 4px 4px #ddd;
	}
	.item {
		display: flex;
	}
	.item span:first-child {
		flex: 1;
	}
	.add-list {
		display: grid;
		place-items: center;
		font-size: 100px;
		cursor: pointer;
		background: rgba(0, 0, 255, 0.05);
		color: blue;
		border: none;
		box-shadow: none;
	}
	.items li.add-item {
		border: none;
		background: none;
		box-shadow: none;
		color: blue;
		text-align: center;
		background: rgba(0, 0, 255, 0.05);
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0s !important;
		}
	}
</style>
