<script>
	import { setContext } from "svelte";
	import { writable } from "svelte/store";
	// we want to be able to view one tab at a time
	export let selectedTab = "1";
	let selectedTabStore = writable(selectedTab);
	$: $selectedTabStore = selectedTab;
	// for making the bind: work
	$: updateProps($selectedTabStore);

	function updateProps(value) {
		selectedTab = value;
	}

	setContext("selectedTab", selectedTabStore);

	let titles = {};

	setContext("tabTitles", {
		registerTab(id, title) {
			titles[id] = { id, title };
			titles = titles;
			console.log(titles);
		},
		updateTitle(id, title) {
			titles[id].title = title;
		},
		unregisterTab(id) {
			delete titles[id];
			titles = titles;
		},
	});
</script>

<div>
	{#each Object.values(titles) as { id, title }}
		<!-- not reactive yet because context is not reactive across components, we need a store as well -->
		<button class:selected={$selectedTabStore === id} on:click={() => ($selectedTabStore = id)}
			>{title}</button>
	{/each}
</div>

<slot />

<style>
	button.selected {
		background: black;
		color: white;
	}
</style>
