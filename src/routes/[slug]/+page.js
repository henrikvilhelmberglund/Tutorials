export let data;
export async function load({ params }) {
  const post = await import(`../../lib/md/${params.slug}.md`);
  // console.log(post.default);
  return {
    body: {
      postContent: post.default,
      // meta: post.metadata
    }
  };
}