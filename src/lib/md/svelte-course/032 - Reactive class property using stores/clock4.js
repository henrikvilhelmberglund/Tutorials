import { writable } from "svelte/store";
import { get } from "svelte/store";

class Clock {
	constructor() {
		this.time = Date.now();
		this._time$;
	}

	tick() {
		this.time = Date.now();
		if (this._time$ !== undefined) {
			this._time$.set(this.time);
		}
	}

	get time$() {
		if (this._time$ === undefined) {
			this._time$ = writable(this.time);
		}
		return this._time$;
	}
}

export default Clock;
