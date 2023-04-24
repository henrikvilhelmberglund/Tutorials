<script>
	export let categories = "Any";
	let joke;
	async function loadJoke() {
		const params = new URLSearchParams();
		for (const key in $$restProps) {
			params.append(key, $$restProps[key]);
		}
		const res = await fetch(`https://v2.jokeapi.dev/joke/${categories}?${params.toString()}`);
		const data = await res.json();
		if (data.type === "twopart") {
			joke = data.setup + data.delivery;
			return;
		}
		joke = data.joke;
	}
</script>

{joke}

<button on:click={loadJoke}> Load joke </button>

<style>
</style>
