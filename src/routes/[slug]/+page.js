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
let titles = [];
for (let path in modules) {
	// console.log(path);
	let fixedPath = path.replace(".svx", "");
	let post;

	post = await import(`../../lib/md/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`);
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

async function loadPost(params) {
	const post = import(`../../lib/md/${params.slug}.svx`);
	return post;
}

export async function load({ params }) {
	console.log(params.slug);
	// console.log(post.default);
	return {
		post: loadPost(params),
		titles: titles,
		myPages,
		slug: params.slug,
	};
}
