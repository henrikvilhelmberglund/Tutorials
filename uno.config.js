import { defineConfig, presetIcons, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
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
});
