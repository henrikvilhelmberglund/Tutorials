<script>
	export let name;
	export let code;
	import Prism from "prismjs";
	import "prism-svelte";
	const highlighted = Prism.highlight(code, Prism.languages.svelte, "svelte");
</script>

<!-- {highlighted} -->

<div class="relative">
	<pre class="language-svelte rounded-xl">
<p
			class="rounded-r-0 rounded-bl-0 absolute top-0 left-2 rounded-xl bg-orange-400 p-1 text-black">{name}</p>
<code
			style="font-family: 'Maple', Menlo, Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', 'Courier New',
monospace;">{@html highlighted}</code>
  </pre>
</div>
