<script>
	let condition1 = true;
	let condition2 = true;

	function toggleCondition1(params) {
		condition1 = !condition1;
	}
	function toggleCondition2(params) {
		condition2 = !condition2;
	}
	function check(condition1, condition2) {
		return condition1 || condition2;
	}
</script>

<button on:click={toggleCondition1}>Condition 1: {condition1}</button>
<button on:click={toggleCondition2}>Condition 2: {condition2}</button>

<hr class="w-full p-0" />

{#if condition1 && condition2}
	Both conditions are true!
	<!-- we can use any javascript code in here, like a function -->
{:else if check(condition1, condition2)}
	Either condition1 or condition2 is true.
{:else}
	Both conditions are false.
{/if}
