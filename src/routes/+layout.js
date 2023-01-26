// export const modules = import.meta.glob("./*.svx");
export const prerender = true;

const modules = import.meta.glob([
	"$lib/md/*.svx",
	"$lib/md/svelte-course/*.svx",
	"!$lib/md/_*.svx",
	"!$lib/md/svelte-course/_*.svx"
]);
let myPages = [];
let svelte;
for (let path in modules) {
	console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;
	try {
		post = await import(`$lib/md/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`);
		svelte = false;
	} catch (error) {
		post = await import(
			`$lib/md/svelte-course/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`
		);
		svelte = true;
	}
	// let fixedPath = path;
	myPages.push({
		title: fixedPath.substring(fixedPath.lastIndexOf("/") + 1),
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
