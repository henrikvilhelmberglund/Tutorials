# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

### [0.0.3](https://github.com/henrikvilhelmberglund/Tutorials/compare/v0.0.2...v0.0.3) (2022-11-08)


### Features

* :sparkles: add +layout.svelte which will save all .mds in certain folders in an array ([801ae60](https://github.com/henrikvilhelmberglund/Tutorials/commit/801ae60fd16ce5dcf834a1b79729acc916c11976))
* :sparkles: add load function in +layout.js and remove it from +layout.svelte ([7eecafa](https://github.com/henrikvilhelmberglund/Tutorials/commit/7eecafaf3e0d116a8b5ae64cb6fc3f06f296d2e1))
* :sparkles: add slug dynamic route that tries to import the post (should probably move into sub folder later) ([c7443ea](https://github.com/henrikvilhelmberglund/Tutorials/commit/c7443eaf74d1e6fb156dc52fdac8a2228232394a))
* :sparkles: add Svelte components from the dynamic import array ([4e21dc8](https://github.com/henrikvilhelmberglund/Tutorials/commit/4e21dc8e004a7e4c39b08a3de036dfa0e7d213e4))
* :sparkles: add top level await import that adds the content of all .md files into the main page ([0e767d3](https://github.com/henrikvilhelmberglund/Tutorials/commit/0e767d3bf5eba7e8120dc22276143e306d26567f))
* :sparkles: add ugly nav bar at the top ([5ebcf5a](https://github.com/henrikvilhelmberglund/Tutorials/commit/5ebcf5a8ef6de491e3bb3bf63aab54c496b358c2))
* :sparkles: add unused (for now) Post component ([c10f000](https://github.com/henrikvilhelmberglund/Tutorials/commit/c10f0007cfd746f7b201fc43da770bf1f29e1268))
* :sparkles: use the data in +page.svelte (links will not work yet) ([2bf9971](https://github.com/henrikvilhelmberglund/Tutorials/commit/2bf997181eaca66bea5e87c0157bb388cedffba3))


### Bug Fixes

* :bug: comment out lines in 003 that caused problems (will try to add them back later) ([7cfaccc](https://github.com/henrikvilhelmberglund/Tutorials/commit/7cfaccc1c56ba75ef888a11708c8e23a7fb650d3))
* :bug: fix base path (was outside of kit) ([1f51d20](https://github.com/henrikvilhelmberglund/Tutorials/commit/1f51d20a9f17f985aea48860051190293c3b3b67))
* :bug: fix prism CSS link to use %sveltekit.assets% so it builds correctly ([3ad0bae](https://github.com/henrikvilhelmberglund/Tutorials/commit/3ad0bae288ad7da817baf28121077bd6c6b674f5))
* :bug: move the .md to be in the same folder for ease, also... ([552becc](https://github.com/henrikvilhelmberglund/Tutorials/commit/552becce52c70436ba64745b403ae26878eb2b3d))
* :fire: remove file (missed stage) ([b347b4e](https://github.com/henrikvilhelmberglund/Tutorials/commit/b347b4e8c3ddd4585f2c2bfee13719570763d168))
* :fire: remove image that causes problems with dynamic import (try to add back later) ([c4cd330](https://github.com/henrikvilhelmberglund/Tutorials/commit/c4cd330d119267736554552192d90e649c1a4f95))

### 0.0.2 (2022-11-08)


### Features

* :art: update markdown.md that shows the example ([3ad51ae](https://github.com/henrikvilhelmberglund/Tutorials/commit/3ad51aec08b8b5ac2206a6267cffb51fb2011bff))
* :sparkles: add and configure mdsvexamples ([20ea90b](https://github.com/henrikvilhelmberglund/Tutorials/commit/20ea90b57f03fc8202fa0bdccd805e87921e02af))
* :sparkles: add commit-and-tag-version script to npm run ([277144a](https://github.com/henrikvilhelmberglund/Tutorials/commit/277144a24e22531bafc501584174387b273c82b7))
* :sparkles: add commit-and-tag-version to generate changelogs ([f4eb519](https://github.com/henrikvilhelmberglund/Tutorials/commit/f4eb5199e4a94edb6039bb0f7cbfb63e0a182aad))
* :sparkles: add CSS for prisma highlighting ([033f042](https://github.com/henrikvilhelmberglund/Tutorials/commit/033f0427e2926bbd2741573d09dc65d2a09931ce))
* :sparkles: add Example.svelte and config ([fc2ba18](https://github.com/henrikvilhelmberglund/Tutorials/commit/fc2ba186e395b3bc1ea617ff4b75be006360de6b))
* :sparkles: add gh-pages and package.json deploy script ([4232871](https://github.com/henrikvilhelmberglund/Tutorials/commit/4232871404a391593676babc8c13ac11eba1ec73))
* :sparkles: add markdown that uses example (inline code) ([4c22e53](https://github.com/henrikvilhelmberglund/Tutorials/commit/4c22e538aad28b2889de3f3f96fe26371e87c660))
* :sparkles: add mdsvex to use markdown in svelte ([df94efb](https://github.com/henrikvilhelmberglund/Tutorials/commit/df94efb33805a80dc9e997eb980dc652b3e97101))
* :sparkles: add static adapter and add base url to it ([f735129](https://github.com/henrikvilhelmberglund/Tutorials/commit/f735129a82a8eac9eb650343484119d154f5746c))
* :sparkles: add SvelteKit ([40027ff](https://github.com/henrikvilhelmberglund/Tutorials/commit/40027ff39ede34e823ddbe126aa108bb7ed3c490))
* :sparkles: added mdsvex using svelte-add ([2315b43](https://github.com/henrikvilhelmberglund/Tutorials/commit/2315b4317dc19288ce8384f4dc64fb7969160340))


### Bug Fixes

* :ambulance: it actually did work, probably some cache thing, reverting ([988a259](https://github.com/henrikvilhelmberglund/Tutorials/commit/988a259bfe7921d7d57a5e427d23a3cc63ad22a3))
* :bug: add .nojekyll file to stop jekyll processing ([d2b84a5](https://github.com/henrikvilhelmberglund/Tutorials/commit/d2b84a534202b9da6d862a9db0f45aa8b9760674))
* :bug: pages in lib aren't built properly ([95e32fd](https://github.com/henrikvilhelmberglund/Tutorials/commit/95e32fdda3580b51f76988727960693e54fbefb7))
