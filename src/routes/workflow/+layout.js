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
		`../../lib/md/workflow/*/+page.svx`,
		`!../../lib/md/workflow/_*.svx`,
		`!../../lib/md/workflow/*/_*.svx`,
		`!../../lib/md/workflow/_*/*.svx`,
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
		// TODO add this in other places
		/* chatGPT
    We create a regular expression (regex) with the pattern (?<=^|\/)${shortRoute}(?=\/|$). This pattern uses positive lookbehind (?<=^|\/) and positive lookahead (?=\/|$) assertions to ensure that we match shortRoute only when it's preceded by the start of the string ^ or a forward slash /, and followed by either a forward slash / or the end of the string $. This way, we can avoid matching occurrences of shortRoute in the middle of other words.
    */
		const regex = new RegExp(`(?<=^|\/)${shortRoute}(?=\/|$)`, "g");
		const splits = fixedPath.split(regex);
		title = splits[1].split("/")[1];
		// console.log(fixedPath.split(`${shortRoute}`));
		// title = title.includes("+page") ? title.split("+page")[0] : title;
		// console.log(fixedPath);
		console.log(title);
		svelte = true;

		// let fixedPath = path;
		if (titles.includes(title)) {
			return myPages;
		} else {
			myPages.push({
				title: title,
				link: fixedPath,
				original: path,
				bsvelte: svelte,
			});
			titles.push(title);
		}
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
