import { writable } from "svelte/store";

const data = writable({
	todos: Object.freeze([
		{
			name: "Do laundry",
			done: false,
		},
	]),
	notifications: [],
});

export const user = writable({
	name: "Henrik",
});

export function addTodo(newTodo) {
	data.update(($data) => {
		$data.todos = Object.freeze([...$data.todos, newTodo]);
		return $data;
	});
}

export default data;
