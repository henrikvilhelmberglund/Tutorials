<script>
	import Tabs from "./Tabs.svelte";
	import Tab from "./Tab.svelte";
	let isLoggedIn;
	let username = "Henrik";
	let selectedTab = "2";
</script>

<div>
	<input type="checkbox" bind:checked={isLoggedIn} />
	<input type="text" bind:value={username} />
</div>

<button on:click={() => (selectedTab = "4")}>Change tab</button>

<Tabs bind:selectedTab>
	<Tab id="1" title="tab 1">Hey hey</Tab>
	{#if isLoggedIn}
		<Tab id="2" title="secret tab 2">Logged in content 1</Tab>
		<Tab id="3" title="secret tab 3">Logged in content 2</Tab>
	{/if}
	<Tab id="4" title={username}>info for {username}</Tab>
</Tabs>
<style>
</style>
