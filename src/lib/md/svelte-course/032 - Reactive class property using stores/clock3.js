import { writable } from "svelte/store";

class Clock {
	constructor() {
		this.time = writable(Date.now());
	} 

	tick() {
		this.time.set(Date.now());
	}
}

export default Clock;
