import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
import UnoCSS from "@unocss/svelte-scoped/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		UnoCSS({
			injectReset: "@unocss/reset/tailwind.css",
		}),
		sveltekit(),
		examples,
	],
	build: {
		target: "esnext",
	},
};

export default config;
