import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
// import UnoCSS from "unocss/vite";


/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
    // UnoCSS({
    
		// }),
		sveltekit(),
		examples,
	],
	build: {
		target: "esnext",
	},
};

export default config;
