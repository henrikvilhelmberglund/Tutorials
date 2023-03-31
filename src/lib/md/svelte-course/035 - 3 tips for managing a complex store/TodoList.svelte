<script>
	import data from "./data";
	import wait from "./wait";

	import AddTodo from "./AddTodo.svelte";

	import markUpdate from "./markUpdate";
	const action = markUpdate();

	$: doneCount = $data.todos.filter((todo) => todo.done).length;
</script>

<div use:action class="status">
	Done: {doneCount} / {$data.todos.length}
</div>

<ul use:action>
	{#each $data.todos as todo}
		<li><input type="checkbox" checked={todo.done} disabled />{todo.name}</li>
		{todo.loading ? "(Loading...)" : ""}
		{#if !todo.done}
			<button
				disabled={todo.loading}
				on:click={async () => {
					todo.loading = true;
					await wait(5000);
					todo.done = true;
					todo.loading = false;
					$data.notifications.push(`Marked "${todo.name}" as done`);
					$data = $data;
				}}>Done</button>
		{/if}
		<button
			on:click={() => {
				$data.todos.splice($data.todos.indexOf(todo), 1);
				$data.notifications.push(`Deleted "${todo.name}"`);
				$data = $data;
			}}>Delete</button>
	{/each}
</ul>

<AddTodo />

<style>
	input {
		margin-right: 6px;
	}
	li {
		list-style: none;
	}
	ul {
		padding-left: 12px;
	}
	.status {
		padding: 8px 12px;
	}
</style>
