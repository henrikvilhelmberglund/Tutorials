<script>
	import { compile } from "svelte/compiler";
	import fs from "fs";
	import path from "path";
	const pathToComponent = path.join(
		"src/routes/svelte-course/Compiler-API/Component.svelte"
	);
	const svelteCode = fs.readFileSync(pathToComponent, "utf-8");
	const { js, css } = compile(svelteCode, {
		// options here
		filename: "CompiledComponent",
		// format: "cjs", // or esm
		// generate: "ssr" // or dom
		// dev: true
		// immutable: true
		// legacy: true
		// sveltePath:  "",
		// css: false,
		// cssHash: ({ hash, css, name, filename }) => `xyz${hash(css)}`,
		// and more! (see docs at https://svelte.dev/docs/svelte-compiler)
	});
	console.log(js, css);
</script>

<p>Result:</p>

{JSON.stringify(js)}

{JSON.stringify(css)}

<style>
</style>
