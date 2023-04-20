<script>
	import { getStatsAction, generateData } from "./example3";
	import { afterUpdate } from "svelte";

	let data = generateData();
	const statsAction = getStatsAction();

	let showLessThan20 = false;

	afterUpdate(() => {
		toggleShowLessThan20(showLessThan20);
		hideMoreThan20();
	});

	function hideMoreThan20() {
		statsAction.getMoreThan20().forEach((element) => {
			element.style.background = "transparent";
		});
	}

	function toggleShowLessThan20(showLessThan20) {
		if (showLessThan20) {
			statsAction.getLessThan20().forEach((element) => {
				element.style.background = "red";
			});
		} else {
			statsAction.getLessThan20().forEach((element) => {
				element.style.background = "transparent";
			});
		}
	}
</script>

<button
	on:click={() => {
		data = generateData();
	}}>Shuffle</button>
<label><input type="checkbox" bind:checked={showLessThan20} /> Toggle</label>
<ol>
	{#each data as item}
		<li use:statsAction.action={item}>{item}</li>
	{/each}
</ol>
