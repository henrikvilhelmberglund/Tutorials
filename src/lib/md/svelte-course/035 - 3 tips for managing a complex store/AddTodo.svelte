<script>
	import data from "./data";
	let value = "";

	import markUpdate from "./markUpdate";
	const action = markUpdate();

	function onSubmit(event) {
		event.preventDefault();
		$data.todos.push({
			name: value,
			done: false,
		});
		$data.notifications.push(`Add "${value}"`);
		$data = $data;
		value = "";
	}
</script>

<div use:action>
	Add todo
	<form on:submit={onSubmit}>
		<input bind:value />
		<button disabled={value.length === 0} type="submit">Add</button>
	</form>
</div>

<style>
	div {
		padding: 16px;
		background: #f5f5f5;
		margin: 16px;
	}
	form {
		margin-top: 8px;
	}
</style>