<script>
	import Chat from "./Chat.svelte";

	let friends = [
		{ name: "alfred" },
		{ name: "ben" },
		{ name: "charlie" },
		{ name: "dawson" },
		{ name: "elain" },
	];
	let selectedFriend = friends[2];
</script>

<div class="containy">
	<ul class="list">
		{#each friends as friend}
			<li>
				<label class:selected={selectedFriend === friend}>
					<input bind:group={selectedFriend} type="radio" value={friend} />
					{friend.name}
				</label>
			</li>
		{/each}
	</ul>
	<div class="chat">
		{#key selectedFriend}
			<Chat friend={selectedFriend} />
		{/key}
	</div>
</div>

<style>
	:global(body) {
		padding: 0;
	}
	.containy {
		display: grid;
		grid-template-columns: 100px 1fr;
		height: 100%;
	}
	.list {
		padding: 0;
		margin: 0;
		border-right: 1px solid #999;
	}
	li {
		list-style: none;
		border-bottom: 1px solid #999;
	}
	label {
    display: block;
		padding: 10px 5px;
	}
	.selected {
		background: lightskyblue;
	}
	input {
		visibility: hidden;
		width: 0;
	}
</style>
