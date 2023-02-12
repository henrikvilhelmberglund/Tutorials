<script>
	import { store1, store2 } from "./data3";

	const subscribers = [];
	setInterval(() => {
		for (const subscriber of subscribers) {
			subscriber(+new Date());
		}
	}, 1000);

	const store3 = {
		subscribe(fn) {
			fn("");
			subscribers.push(fn);
			return () => {
				subscribers.splice(subscribers.indexOf(fn), 1);
			};
		},
		set(value) {
			for (const subscriber of subscribers) {
				subscriber(value);
			}
		},
	};
</script>

<h1>store1: {$store1}</h1>
<h1>store2: {$store2}</h1>
<h1>store3: {$store3}</h1>

<button on:click={() => ($store3 = "hello")}>Click me!</button>

<style>
</style>
