// export const modules = import.meta.glob("./*.svx");
export const prerender = true;
// export const ssr = false;

const modules = import.meta.glob([
	"$lib/md/*.svx",
	"!$lib/md/_*.svx",
	// "$lib/md/svelte-course/*/*.svx",
	// "$lib/md/svelte-course/*.svx",
	// "!$lib/md/svelte-course/_*.svx",
	// "!$lib/md/svelte-course/*/_*.svx",
]);
let myPages = [];
let svelte;
let title;
for (let path in modules) {
	// console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;

	post = await import(`$lib/md/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`);
	svelte = false;
	title = fixedPath.substring(fixedPath.lastIndexOf("/") + 1);

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
