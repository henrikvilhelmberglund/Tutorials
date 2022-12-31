import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      mode: "svelte-scoped",
      include: [/\.svelte$/, /\.svelte\.md$/, /\.svx$/],
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
    }),
    sveltekit(),
    examples,
  ],
  build: {
    target: "esnext",
  },
};

export default config;
