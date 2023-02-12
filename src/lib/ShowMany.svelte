<script>
	export let name;
	let i = 0;
	let selected = name[0];
	let oldtext;
	$: if (selected.text) {
		oldtext = selected.text;
	}
	let show = true;
	import Prism from "prismjs";
	import "prism-svelte";
	$: highlighted = Prism.highlight(selected.raw, Prism.languages.svelte, "svelte");
</script>

<!-- {highlighted} -->

<!-- {#each Object.entries(name) as [ key, value ]}
	{JSON.stringify(value.comp)}
{/each} -->

{#if selected.text}
	<div
		class="text-1xl self-center rounded-xl bg-orange-300 pl-4 font-sans font-medium text-orange-900">
		{@html selected.text}
	</div>
{:else if oldtext}
	<div
		class="text-1xl self-center rounded-xl bg-orange-300 pl-4 font-sans font-medium text-orange-900">
		{@html oldtext}
	</div>
{/if}

<div>
	<div class="rounded-b-0 rounded-xl border-4 border-b-0 border-solid border-orange-500 p-2">
		<svelte:component this={selected.comp} />
	</div>

	<div class="relative">
		<button on:click={() => (show = !show)} class="absolute top-0 right-0"
			>{show ? "🔼" : "🔽"}</button>
		{#each Object.entries(name) as [index, obj]}
			<label
				class="rounded-r-0 rounded-bl-0 rounded-t-0 -top-4 left-0 mr-2 rounded-xl rounded-br-xl {obj.name ===
				selected.name
					? 'bg-orange-500'
					: 'bg-slate-300 hover:bg-orange-300'} p-1 text-black">
				<input
					bind:group={selected}
					type="radio"
					name="selected"
					class="hidden"
					id=""
					value={obj} />{obj.name}
			</label>
		{/each}
		{#if show}
			<pre class="language-svelte rounded-t-0 !m-0 rounded-xl p-0 !pt-10"><code
					style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
        monospace;">{@html highlighted}</code>
      </pre>
		{/if}
	</div>
</div>

<style>
	/* jank */
	:global(div b) {
		@apply font-extrabold text-pink-500;
	}
</style>
