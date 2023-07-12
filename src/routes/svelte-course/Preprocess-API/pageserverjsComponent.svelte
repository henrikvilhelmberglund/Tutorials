/** @type {import('./$types').PageLoad} */

import { compile, preprocess } from "svelte/compiler";
import { onMount } from "svelte";
import fs from "fs";
import path from "path";

export async function load() {
	const pathToComponent = path.join("src/routes/svelte-course/Preprocess-API/Component.svelte");
	const svelteCode = fs.readFileSync(pathToComponent, "utf-8");

	const processedCode = preprocess(svelteCode, {
		markup: ({ content }) => {
			return { code: content };
		},
		style: ({ content }) => {
			return { code: content };
		},
		script: ({ content, attributes }) => {
			// if (attributes.lang === "ts") {

			// }
			return {
				code: content.replace("%%NAME%%", JSON.stringify(attributes.name)),
				// add dependencies in array below
				// dependencies: []
			};
		},
	});
	processedCode.then((value) => {
		console.log(processedCode);
		compile(value.code, {
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
	});
	let finishedCode = await processedCode;
	return {
		code: compile(finishedCode.code),
	};
}
