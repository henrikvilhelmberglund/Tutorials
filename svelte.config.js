import preprocess from "svelte-preprocess";
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
      fallback: null,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: dev ? "" : "/Tutorials",
    },
  },

  preprocess: [mdsvex(mdsvexConfig), preprocess()],
};

export default config;
