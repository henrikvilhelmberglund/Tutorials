// export const modules = import.meta.glob("./*.svx");
export const prerender = true;
// export const ssr = false;

const modules = import.meta.glob([
	"/src/lib/md/svelte-course/*/*.svx",
	// "$lib/md/svelte-course/*.svx",
	"!/src/lib/md/svelte-course/_*.svx",
	"!/src/lib/md/svelte-course/*/_*.svx",
]);
let myPages = [];
let svelte;
let title;

console.log(modules);
for (let path in modules) {
	console.log(path);
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

		// TODO I probably don't want to do this in the layout, I only want the titles for the nav
		post = await import(
			`/src/lib/md/svelte-course/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}/+page.svx`
		);
		title = fixedPath.substring(fixedPath.indexOf("/", 17) + 1, fixedPath.length);
		svelte = true;
	}

	// let fixedPath = path;
	myPages.push({
		title: title,
		link: fixedPath,
		original: path,
		newbody: post.default,
		bsvelte: svelte,
	});
}
export async function load({ params }) {
	return {
		myPages,
		titles: modules,
		title: "Tutorials",
		// meta: post.metadata
	};
}
