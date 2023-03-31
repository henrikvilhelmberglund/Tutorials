import { writable } from "svelte/store";

export default writable({
	todos: [
		{
			name: "Do laundry",
			done: false,
		},
	],
	notifications: [],
	user: {
		name: "Henrik",
	},
});
