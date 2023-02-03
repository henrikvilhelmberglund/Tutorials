```svelte
<script>
	export let name;
	export let status;
	export let onSkillPointChange;

	let skillPoints = 5;
	function decrementSkillPoints() {
		if (skillPoints > 0) {
			skillPoints--;
		}
		onSkillPointChange(skillPoints);
	}
	function incrementSkillPoints() {
		skillPoints++;
		onSkillPointChange(skillPoints);
	}
</script>

<section>
	<dl>
		<dt>Name</dt>
		<dd>{name}</dd>
		<dt>Status</dt>
		<dd>{status}</dd>
	</dl>

	<div class="flex gap-5 p-2 [&>*]:text-2xl">
		<button class="px-8" on:click={decrementSkillPoints}>-</button>
		<p class="self-center">{skillPoints}</p>
		<button class="px-8" on:click={incrementSkillPoints}>+</button>
	</div>
</section>
```
