// change prerender to true
export const prerender = false;
// export const ssr = false;

const modules = import.meta.glob([
	"../../../lib/md/template/*/*.svx",
	"../../../lib/md/template/_*.svx",
	"../../../lib/md/template/*/_*.svx",
]);
let myPages = [];
let svelte;
let title;
let titles = [];

// console.log(modules);
for (let path in modules) {
	// console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;
	if (!path.includes("+page.svx")) {
		continue;
	} else {
		fixedPath = path.replace("/+page.svx", "");
		title = fixedPath.substring(fixedPath.indexOf("/", 17) + 1, fixedPath.length);
		svelte = true;
	}

	myPages.push({
		title: title,
		link: fixedPath,
		original: path,
		bsvelte: svelte,
	});
	titles.push(title);
}
async function loadPost(params) {
	return import(`../../../lib/md/template/${params.slug}/+page.svx`);
}

export async function load({ params }) {
	return {
		post: loadPost(params),
		titles: titles,
		myPages,
		slug: params.slug,
	};
}
