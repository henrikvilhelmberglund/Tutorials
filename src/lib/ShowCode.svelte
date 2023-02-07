<script>
	export let name;
	export let code;
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
			<pre class="language-svelte rounded-t-0 !m-0 rounded-xl p-0 !pt-10"><p
					class="rounded-r-0 rounded-bl-0 rounded-t-0  absolute -top-4 left-0 rounded-xl rounded-br-xl bg-orange-500 p-1 text-black">{name}</p><code
					style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
      monospace;">{@html highlighted}</code>
    </pre>
		{:else}
			<pre class="language-svelte !m-0 rounded-xl p-0 !pt-10"><p
					class="rounded-r-0 rounded-bl-0  absolute -top-4 left-0 rounded-xl rounded-br-xl bg-orange-500 p-1 text-black">{name}</p><code
					style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
        monospace;">{@html highlighted}</code>
      </pre>
		{/if}
	</div>
</div>
