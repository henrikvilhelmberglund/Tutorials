// export const modules = import.meta.glob("./*.svx");
export const prerender = true;
// export const ssr = false;

let myPages = [];
let titles = [];
let svelte;
let title;
let posts = [];

async function importPosts(route) {
	const shortRoute = route.id.split("/")[1];
	const modules = import.meta.glob([
		`../../lib/md/VSCode/*/+page.svx`,
		`!../../lib/md/VSCode/_*.svx`,
		`!../../lib/md/VSCode/*/_*.svx`,
		`!../../lib/md/VSCode/_*/*.svx`,
	]);

	// console.log(modules);
	for (let path in modules) {
		// console.log(route);
		let fixedPath = path.replace(".svx", "");

		fixedPath = path.replace(".svx", "");

		if (route.id.includes("all")) {
			await modules[path]().then((mod) => {
				console.log(path, mod);
				posts.push(mod);
			});
		}
		title = fixedPath.split(`${shortRoute}`)[1].split("/")[1];
		// title = title.includes("+page") ? title.split("+page")[0] : title;
		// console.log(fixedPath);
		// console.log(title);
		svelte = true;

		// let fixedPath = path;
		myPages.push({
			title: title,
			link: fixedPath,
			original: path,
			bsvelte: svelte,
		});
		titles.push(title);
	}
	return myPages;
}

export async function load({ params, route }) {
	// console.log(route.id);
	// console.log(typeof route.id);
	return {
		// TODO this naming is a bit stupid
		myPages: importPosts(route),
		posts: posts,
		// myPages:
		titles: titles,
		title: "Tutorials",
		// meta: post.metadata
	};
}
