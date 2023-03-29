class Clock {
	constructor() {
		this.time = Date.now();
		this.subscribers = [];
	}

	tick() {
		this.time = Date.now();
		this.subscribers.forEach((subscriber) => {
			subscriber(this);
		});
	}

	subscribe(subscriber) {
		subscriber(this);
		this.subscribers.push(subscriber);
		return () => {
			this.subscribers.splice(this.subscribers.indexOf(subscriber));
		};
	}
}

export default Clock;
