// export const modules = import.meta.glob("./*.svx");
export const prerender = true;

const modules = import.meta.glob([
	"$lib/md/*.svx",
	"$lib/md/svelte-course/*/*.svx",
	// "$lib/md/svelte-course/*.svx",
	"!$lib/md/_*.svx",
	"!$lib/md/svelte-course/_*.svx",
	"!$lib/md/svelte-course/*/_*.svx"
]);
let myPages = [];
let svelte;
let title;
for (let path in modules) {
	// console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;
	if (path.includes("svelte-course")) {
		if (!path.includes("+page.svx")) {
			continue;
		} else {
			fixedPath = path.replace("/+page.svx", "");
			// console.log(
			// 	`$lib/md/svelte-course/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}/+page.svx`
			// );
			post = await import(
				`$lib/md/svelte-course/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}/+page.svx`
			);
			title = fixedPath.substring(fixedPath.indexOf("/", 17) + 1, fixedPath.length);
			svelte = true;
		}
	} else {
		post = await import(`$lib/md/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`);
		svelte = false;
		title = fixedPath.substring(fixedPath.lastIndexOf("/") + 1);
	}
	// let fixedPath = path;
	myPages.push({
		title: title,
		link: fixedPath,
		original: path,
		newbody: post.default,
		bsvelte: svelte
	});
}

export async function load({ params }) {
	return {
		myPages,
		titles: modules,
		title: "Tutorials"
		// meta: post.metadata
	};
}
