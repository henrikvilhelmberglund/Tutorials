export const prerender = true;

const modules = import.meta.glob([
  "/src/lib/md/**.md",
  "/src/lib/md/learning-Svelte-and-SvelteKit/**.md",
]);
let myMenu = [];
for (let path in modules) {
  let fixedPath = path.replace(".md", "");
  const post = await import(`../lib/md/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.md`);
  // let fixedPath = path;
  myMenu.push({
    title: fixedPath.substring(fixedPath.lastIndexOf("/") + 1),
    link: fixedPath,
    original: path,
    newbody: post.default
  });
}
console.log(myMenu);

export async function load() {
  return {
    myMenu
  };
}