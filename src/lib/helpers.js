export async function importPosts(route) {
	let svelte;
	let title;
	let myPages = [];
	let titles = [];
	let posts = [];
	const shortRoute = route.id.split("/")[1];

	let modules;

	console.log(route.id);

	if (route.id === "/workflow" || route.id === "/workflow/all") {
		modules = import.meta.glob([
			`./md/workflow/*/+page.svx`,
			`!./md/workflow/_*.svx`,
			`!./md/workflow/*/_*.svx`,
			`!./md/workflow/_*/*.svx`,
		]);
	} else if (route.id === "/CSS" || route.id === "/CSS/all")
		modules = import.meta.glob([
			`./md/CSS/*/+page.svx`,
			`!./md/CSS/_*.svx`,
			`!./md/CSS/*/_*.svx`,
			`!./md/CSS/_*/*.svx`,
		]);
	else if (route.id === "/old-tutorials" || route.id === "/old-tutorials/all") {
		modules = import.meta.glob([`./md/old-tutorials/*.svx`, `!./md/old-tutorials/_*.svx`]);
	} else if (route.id === "/svelte-course" || route.id === "/svelte-course/all") {
		modules = import.meta.glob([
			`./md/svelte-course/*/+page.svx`,
			`!./md/svelte-course/_*.svx`,
			`!./md/svelte-course/*/_*.svx`,
			`!./md/svelte-course/_*/*.svx`,
		]);
	}

	// console.log(modules);
	for (let path in modules) {
		// console.log(route);
		let fixedPath = path.replace(".svx", "");

		fixedPath = path.replace(".svx", "");

		if (route.id.includes("all")) {
			posts.push(modules[path]());
		}

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

		myPages.push({
			title: title,
			link: fixedPath,
			original: path,
			bsvelte: svelte,
		});
		titles.push(title);
	}

	return { myPages, posts, titles };
}
