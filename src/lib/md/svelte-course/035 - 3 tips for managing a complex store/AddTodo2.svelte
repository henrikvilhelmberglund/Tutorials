<script>
	import data, { addTodo } from "./data2";
	let value = "";

	import markUpdate2 from "./markUpdate2";
	const action = markUpdate2();

	function onSubmit(event) {
		event.preventDefault();
		addTodo({
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
