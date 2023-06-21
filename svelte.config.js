import preprocess from "svelte-preprocess";
import UnoCSS from "@unocss/svelte-scoped/preprocess";
// import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
// import UnoCSS from '@unocss/svelte-scoped/vite'
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";
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
		experimental: {
			inspector: {
				holdMode: true,
			},
		},
	},

	preprocess: [
		preprocess(),
		UnoCSS({
			include: [/\.svelte$/, /\.svx$/, /\.js$/],
			// mode: "svelte-scoped",
			presets: [
				presetUno(),
				presetIcons({
					prefix: "i-",
					extraProperties: {
						display: "inline-block",
						"vertical-align": "middle",
					},
				}),
			],
			transformers: [transformerDirectives()],
		}),
		mdsvex(mdsvexConfig),
	],
};

export default config;
