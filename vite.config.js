import { sveltekit } from '@sveltejs/kit/vite';
import examples from 'mdsvexamples/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), examples],
  build: {
    target: 'esnext'
  },
};

export default config;
