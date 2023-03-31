<script>
	import { derived } from "svelte/store";

	import data2, { user } from "./data2";
	import EditProfile2 from "./EditProfile2.svelte";

	import markUpdate2 from "./markUpdate2";
	import Notification2 from "./Notification2.svelte";

	const action = markUpdate2();

	const todosLength = derived(data2, ($data2) => $data2.todos.length);
	const todosDoneLength = derived(
		data2,
		($data2) => $data2.todos.filter((todo) => todo.done).length
	);
	const notificationsLength = derived(data2, ($data2) => $data2.notifications.length);
</script>

<navbar use:action>
	<div class="title">Complex store example</div>
	{#if $todosLength}
		<div class="count todos">
			{$todosDoneLength} / {$todosLength}
		</div>
	{/if}
	{#if $notificationsLength}
		<Notification2>
			<div class="count">{$notificationsLength}</div>
		</Notification2>
	{/if}
	<div>{$user.name}</div>

	<EditProfile2 />
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
