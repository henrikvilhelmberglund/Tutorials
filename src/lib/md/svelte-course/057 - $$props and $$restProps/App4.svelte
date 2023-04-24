<script>
	import Button4 from "./Button4.svelte";
	import Joke from "./Joke.svelte";

	let type = "primary";
	// $$props is reactive so you could do something like this
	// 	setTimeout(() => {
	// 		type="secondary"
	// 	}, 1000)
</script>

<!-- we want to customize through the props -->
<Joke
	type="twopart"
	category="Programming"
	lang="en"
	blacklistFlags="nsfw,racist,sexist,explicit" />

<Joke type="single" category="Dark" lang="en" blacklistFlags="nsfw,racist,sexist,explicit" />

<Button4 {type} style="font-size: 24px;" aria-label="close" class="a b c" foo="bar">X</Button4>

<Button4 type="secondary">Secondary button</Button4>

<style>
	:global(.a) {
		font-style: italic;
	}
</style>
