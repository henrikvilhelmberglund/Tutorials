export const prerender = true;
// export const ssr = false;

const modules = import.meta.glob([
	"../../../lib/md/svelte-course/*/*.svx",
	"../../../lib/md/svelte-course/_*.svx",
	"../../../lib/md/svelte-course/*/_*.svx",
	// "../../../../lib/md/svelte-course/*/*.svx",
	// "../../../../lib/md/svelte-course/_*.svx",
	// "../../../../lib/md/svelte-course/*/_*.svx",
	// "$lib/md/svelte-course/*.svx",
]);
let myPages = [];
let svelte;
let title;

// console.log(modules);
for (let path in modules) {
	// console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;
	if (!path.includes("+page.svx")) {
		continue;
	} else {
		fixedPath = path.replace("/+page.svx", "");
		console.log(fixedPath);
		// console.log(
		// 	`$lib/md/svelte-course/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}/+page.svx`
		// );

		title = fixedPath.substring(fixedPath.indexOf("/", 17) + 1, fixedPath.length);
		svelte = true;
	}

	// let fixedPath = path;
	myPages.push({
		title: title,
		link: fixedPath,
		original: path,
		// newbody: post.default,
		bsvelte: svelte,
	});
}

export async function load({ params }) {
	// const comps = import.meta.glob(`../../../lib/md/svelte-course/${params.slug}.svx`);
	// const post = comps[`../../../lib/md/svelte-course/${name}.svx`];
	const post = await import(`../../../lib/md/svelte-course/${params.slug}/+page.svx`);
	return {
		body: {
			postContent: post.default,
			// meta: post.metadata
		},
		myPages,
		slug: params.slug,
	};
}
