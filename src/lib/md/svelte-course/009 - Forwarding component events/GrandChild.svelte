<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	function onClick1() {
		dispatch("componentButtonClick", "button1");
	}
	function onClick2() {
		dispatch("componentButtonClick", "button2");
	}
</script>

<button on:click={onClick1}>Click me 1</button>
<button on:click={onClick2}>Click me 2</button>