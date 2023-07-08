<script>
	import { browser } from "$app/environment";
	import Component from "./Component.svelte";

	let component;
	if (browser) {
		component = new Component({
			target: document.querySelector("#my-vanilla-HTML-and-JS-page"),
			props: {
				a: 5,
				b: 10,
			},
			context: new Map([["c", 20]]),
			// anchor: document.querySelector("#footer")
			intro: true,
		});

		// slightly stupid but I have two instances of the component
		document.querySelectorAll("#random")[1].addEventListener("click", () => {
			component.$set({
				a: Math.floor(Math.random() * 100),
				b: Math.floor(Math.random() * 100),
			});
		});

		document.querySelectorAll("#reset")[1].addEventListener("click", () => {
			component.reset();
		});

		document.querySelectorAll("#destroy")[1].addEventListener("click", () => {
			component.$destroy();
		});

		component.$on("product", (e) => {
			console.log("product event", e.detail);
		});
	}
</script>

<style>
</style>
