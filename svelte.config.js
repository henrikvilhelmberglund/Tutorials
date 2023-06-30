import UnoCSS from "@unocss/svelte-scoped/preprocess";
// import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";

const dev = process.argv.includes("dev");
//put the lines below inside of kit: { } in svelte.config.js

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: "build",
			assets: "build",
			fallback: "404.html",
			precompress: false,
			strict: true,
		}),
		paths: {
			base: dev ? "" : "/Tutorials",
		},
	},
	vitePlugin: {
		inspector: {
			holdMode: true,
		},
	},

	preprocess: [
    mdsvex(mdsvexConfig),
		vitePreprocess(),
	],
};

export default config;
