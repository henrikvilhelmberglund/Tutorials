// export const modules = import.meta.glob("./*.svx");

const modules = import.meta.glob(["$lib/md/*.svx", "!$lib/md/_*.svx"]);
let myPages = [];
for (let path in modules) {
  // console.log(path);
  let fixedPath = path.replace(".svx", "");
  const post = await import(
    `$lib/md/${fixedPath.substring(fixedPath.lastIndexOf("/") + 1)}.svx`
  );
  // let fixedPath = path;
  myPages.push({
    title: fixedPath.substring(fixedPath.lastIndexOf("/") + 1),
    link: fixedPath,
    original: path,
    newbody: post.default,
  });
}

export async function load({ params }) {
  return {
    myPages,
    titles: modules,
    title: "Tutorials",
    // meta: post.metadata
  };
}
