// TODO clean up this mess
// export const modules = import.meta.glob("./*.svx");
export const prerender = true;
// export const ssr = false;

const modules = import.meta.glob([
	// "$lib/md/*.svx",
	// "!$lib/md/_*.svx",
	"../../lib/md/old-tutorials/*.svx",
	"!../../lib/md/old-tutorials/_*.svx",
	"!../../lib/md/old-tutorials/*/_*.svx",
	"!../../lib/md/old-tutorials/_*/*.svx",
]);
let myPages = [];
let svelte;
let title;
let titles = [];
let posts = [];
for (let path in modules) {
	// console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;

	// post = import(`../../../lib/md/old-tutorials/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`);
	// posts.push(post);
	svelte = false;
	title = fixedPath.substring(fixedPath.lastIndexOf("/") + 1);

	// let fixedPath = path;
	myPages.push({
		title: title,
		link: fixedPath,
		original: path,
		// newbody: post.default,
		bsvelte: svelte,
	});
	titles.push(title);
}

export async function load({ params }) {
	return {
		myPages,
		// posts: posts,
		titles: titles,
		title: "Tutorials",
		// meta: post.metadata
	};
}
