<script>
	import { onDestroy } from "svelte";
	import { getContext } from "svelte";
	export let title;
	export let id;
	let selectedTab = getContext("selectedTab");
	const tabTitles = getContext("tabTitles");

  // for making the title reactive
	$: tabTitles.updateTitle(id, title);

	// register yourself when you are created, unregister when you are destroyed
	tabTitles.registerTab(id, title);

	onDestroy(() => {
		tabTitles.unregisterTab(id);
	});
	// export let selectedTab;
</script>

{#if $selectedTab === id}
	<div>
		<slot />
	</div>
{/if}
<style>
</style>
