import { defineMDSveXConfig as defineConfig } from "mdsvex";
import examples from "mdsvexamples";
import remarkattr from "remark-attr";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
    quotes: false,
  },
  layout: {
    notes: "src/lib/mdsvex-layout-notes.svx",
    mainpage: "src/lib/mdsvex-layout-mainpage.svx",
  },
  remarkPlugins: [
    examples,
    {
      defaults: {
        Wrapper: "/src/lib/Example.svelte",
      },
    },
    remarkattr,
  ],

  rehypePlugins: [],
});

export default config;
