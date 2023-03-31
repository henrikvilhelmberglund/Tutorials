<script>
	import data from "./data";
	import EditProfile from "./EditProfile.svelte";

	import markUpdate from "./markUpdate";
	import Notification from "./Notification.svelte";

	const action = markUpdate();
</script>

<navbar use:action>
	<div class="title">Complex store example</div>
	{#if $data.todos.length}
		<div class="count todos">
			{$data.todos.filter((todo) => todo.done).length} / {$data.todos.length}
		</div>
	{/if}
	{#if $data.notifications.length}
		<Notification>
			<div class="count">{$data.notifications.length}</div>
		</Notification>
	{/if}
	<div>{$data.user.name}</div>

	<EditProfile />
</navbar>


<style>
	navbar {
		display: flex;
		background: lightgray;
		padding: 8px 16px;
	}
	.count {
		background: darkblue;
		color: white;
		border-radius: 8px;
		margin: 0 4px;
		padding: 0 6px;
	}
	.todos.count {
		background: maroon;
	}
	.title {
		flex: 1;
	}
</style>