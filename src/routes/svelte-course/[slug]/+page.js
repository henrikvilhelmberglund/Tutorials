export async function load({ params }) {
	const post = await import(`../../../lib/md/svelte-course/${params.slug}/+page.svx`);
	// console.log(post.default);
	return {
		body: {
			postContent: post.default
			// meta: post.metadata
		}
	};
}
