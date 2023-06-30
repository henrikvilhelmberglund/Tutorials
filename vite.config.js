import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
import UnoCSS from '@unocss/svelte-scoped/vite'
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
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
    sveltekit(),
		examples,
	],
	build: {
		target: "esnext",
	},
};

export default config;
