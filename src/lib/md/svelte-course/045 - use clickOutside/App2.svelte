<script>
	import { blur } from "svelte/transition";
	let showModal = false;

	function clickOutside(element) {
		function onClick(event) {
			if (!element.contains(event.target)) {
				console.log("clicked outside of modal 2 - closing!");
				showModal = false;
			}
		}
		document.body.addEventListener("click", onClick);
		return {
			update(newCallbackFunction) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener("click", onClick);
			},
		};
	}
</script>

{#if !showModal}
	<button
		on:click={() => {
			showModal = true;
			event.stopPropagation();
		}}>Show modal</button>
{/if}

{#if showModal}
	<div
		transition:blur
		use:clickOutside
		class="z-100 border-1
  fixed top-24 left-[50%] rounded-md border-solid border-black bg-green-400 p-8 text-2xl ">
		Hello, I am a beautiful modal!
	</div>
	<div class="fixed top-0 left-0 z-50 h-full w-full backdrop-blur-lg" />
{/if}
