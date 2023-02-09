<script>
	import { fetchChat } from "./data";

	export let friend;
	let name = friend.name;
	let message = "";

	let chats = [];
	let loading = false;

	loadChat(name);

	async function loadChat(name) {
		loading = true;
		chats = await fetchChat(name);
		loading = false;
	}
</script>

<div class="container">
	<div class="content">
		<div>Talking to {name}</div>

		{#if loading}
			Loading ...
		{:else}
			<ul>
				{#each chats as chat}
					<li>{chat}</li>
				{/each}
			</ul>
		{/if}
	</div>
	<input bind:value={message} />
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.content {
		flex: 1;
		padding: 10px;
	}
</style>
