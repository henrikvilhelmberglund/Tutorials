import { importPosts } from "$lib/helpers.js";

// export const modules = import.meta.glob("./*.svx");
export const prerender = true;
// export const ssr = false;
export async function load({ params, route }) {
	// console.log(route.id);
	// console.log(typeof route.id);

	const { myPages, posts, titles } = await importPosts(route);

	return {
		// TODO this naming is a bit stupid
		myPages,
		posts,
		// myPages:
		titles,
		title: "Tutorials",
		// meta: post.metadata
	};
}