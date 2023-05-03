// export const modules = import.meta.glob("./*.svx");
export const prerender = true;
// export const ssr = false;

let myPages = [];
let titles = [];
let svelte;
let title;
let posts = [];

async function importPosts() {
	const modules = import.meta.glob([
		"../../lib/md/svelte-course/*/*.svx",
		"!../../lib/md/svelte-course/_*.svx",
		"!../../lib/md/svelte-course/*/_*.svx",
		"!../../lib/md/svelte-course/_*/*.svx",
	]);

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
			post = import(
				`../../lib/md/svelte-course/${fixedPath.substring(
					fixedPath.lastIndexOf("/") + 1
				)}/+page.svx`
			);
			posts.push(post);
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
		titles.push(title);
		console.log(posts);
	}
	return myPages;
}

export async function load({ params }) {
	return {
    // TODO this naming is a bit stupid
		myPages: importPosts(),
		posts: posts,
		// myPages:
		titles: titles,
		title: "Tutorials",
		// meta: post.metadata
	};
}
