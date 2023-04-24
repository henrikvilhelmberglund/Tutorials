<script>
	import Tabs2 from "./Tabs2.svelte";
	import Tab2 from "./Tab2.svelte";
	let isLoggedIn;
	let username = "Henrik";
	let selectedTab = "2";
</script>

<div>
	<input type="checkbox" bind:checked={isLoggedIn} />
	<input type="text" bind:value={username} />
</div>

<button on:click={() => (selectedTab = "4")}>Change tab</button>

<Tabs2 bind:selectedTab>
	<Tab2 id="1" title="tab 1">Hey hey</Tab2>
	{#if isLoggedIn}
		<Tab2 id="2" title="secret tab 2">Logged in content 1</Tab2>
		<Tab2 id="3" title="secret tab 3">Logged in content 2</Tab2>
	{/if}
	<Tab2 id="4" title={username}>info for {username}</Tab2>
</Tabs2>

<style>
</style>
