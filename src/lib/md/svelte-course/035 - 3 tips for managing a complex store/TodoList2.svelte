<script>
	import data2 from "./data2";
	import wait2 from "./wait2";

	import AddTodo2 from "./AddTodo2.svelte";

	import markUpdate2 from "./markUpdate2";
	const action = markUpdate2();

	$: doneCount = $data2.todos.filter((todo) => todo.done).length;
</script>

<div use:action class="status">
	Done: {doneCount} / {$data2.todos.length}
</div>

<ul use:action>
	{#each $data2.todos as todo}
		<li><input type="checkbox" checked={todo.done} disabled />{todo.name}</li>
		{todo.loading ? "(Loading...)" : ""}
		{#if !todo.done}
			<button
				disabled={todo.loading}
				on:click={async () => {
					todo.loading = true;
					await wait2(5000);
					todo.done = true;
					todo.loading = false;
					$data2.notifications.push(`Marked "${todo.name}" as done`);
					$data2 = $data2;
				}}>Done</button>
		{/if}
		<button
			on:click={() => {
				$data2.todos.splice($data2.todos.indexOf(todo), 1);
				$data2.notifications.push(`Deleted "${todo.name}"`);
				$data2 = $data2;
			}}>Delete</button>
	{/each}
</ul>

<AddTodo2 />

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
