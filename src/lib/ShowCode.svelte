<script>
	export let name;
	export let code;
	let show = true;
	import Prism from "prismjs";
	import "prism-svelte";
	const highlighted = Prism.highlight(code, Prism.languages.svelte, "svelte");
</script>

<!-- {highlighted} -->

<div>
	{#if $$slots.default}
		<div class="rounded-b-0 rounded-xl border-4 border-b-0 border-solid border-orange-500 p-2">
			<slot />
		</div>
	{/if}

	<div class="relative">
		{#if $$slots.default}
			<button on:click={() => (show = !show)} class="absolute top-0 right-0"
				>{show ? "🔼" : "🔽"}</button>
        <p class="rounded-r-0 rounded-bl-0 rounded-t-0  absolute -top-4 left-0 rounded-xl rounded-br-xl bg-orange-500 p-1 text-black">{name}</p>
			{#if show}
				<pre class="language-svelte rounded-t-0 !m-0 rounded-xl p-0 !pt-10"><code
						style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
          monospace;">{@html highlighted}</code>
        </pre>
			{/if}
		{:else}
			<button on:click={() => (show = !show)} class="absolute top-0 right-0"
				>{show ? "🔼" : "🔽"}</button>
			{#if show}
      <p class="rounded-r-0 rounded-bl-0  absolute -top-4 left-0 rounded-xl rounded-br-xl bg-orange-500 p-1 text-black">{name}</p>
				<pre class="language-svelte !m-0 rounded-xl p-0 !pt-10">
					<code
						style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
          monospace;">{@html highlighted}</code>
        </pre>
			{/if}
		{/if}
	</div>
</div>
