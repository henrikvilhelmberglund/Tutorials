# Learning Svelte and SvelteKit - week 1

This will be a weekly (if I can remember) mini blog thingy where I describe how my Svelte and Sveltekit learning is going.

## Why learn Svelte?

I want to start making a side project [MIDIeditor](https://github.com/henrikvilhelmberglund/MIDIeditor) and after starting in vanilla JS I realized this was going to be a very annoying process. Thus I wanted to learn some kind of framework to make things easier for myself.

(We're probably learning React or something later but I wanted to start with something easier)

Another reason is that the current course in school is focused on HTML and CSS so I thought I could learn a JS framework while learning HTML+CSS and kill two birds with one stone. Svelte in particular has JS in HTML which seemed pretty nice for this purpose as well.

Finally the syntax seemed pretty easy to understand and made sense even for me (pretty much a JS beginner). Also there was a really nice tutorial [here](https://svelte.dev/tutorial/basics) with a REPL which made trying it out very easy.

## What is Svelte?

Svelte is a JS framework where the files are compiled into vanilla JS. This is nice because you don't need to include a huge library so the filesizes are small and performance is good.

Svelte files look like this:

HelloWorld.svelte

```js
<script>
	let name = 'world';
</script>

<h1>Hello {name}!</h1>

<style>
	h1 {
		color: slateblue;
	}
</style>
```

A script tag at the top, HTML markup in the middle and CSS styles at the bottom.


### Script tag

The script tag is just vanilla JS with some added Svelte magic which replaces vanilla JS syntax that isn't really used like `$: ` which creates a reactive declaration.

### ...Reactive declaration?

This is easier to show with an example. 

```js
<script>
	let count = 0;
	let doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} doubled is {doubled}</p>
```

Here we have a script where you click a button and the amount of times you clicked it is displayed.

I added this line `let doubled = count * 2;` however it doesn't really work because the script tag is only run once and count is 0 at the beginning.

To fix it we can replace 

`let doubled = count * 2;` 

with 

`$: doubled = count * 2;`

`$:` means that whenever any variables to the right of the = change we rerun this statement.

By default assignments in general in the top script block are reactive so `let count = 0;` will just work if we increment it in a function later, but for variables that depend on other variables we can use `$:`.

**However** using array methods will not update the variable because there's no assignment, so instead of 

```js
function addNumber() {
  numbers.push(numbers.length + 1);
  numbers = numbers;
}
``` 

which looks a bit silly we can do 

```js
function addNumber() {
  numbers = [...numbers, numbers.length + 1];
}
```

instead.

### Markup

In the markup block (between the script and style tags) we can have our HTML. If we want to reference a variable from the script block we can enclose it in curly brackets {count}. In fact we can have any JS we want inside of curly brackets which is useful.

We also have some other fancy things like:

- if else statements

```js
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
```

- each blocks (basically .forEach)

```js
{#each cats as cat, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
		{i + 1}: {cat.name}
	</a></li>
{/each}
```

or this 

```js
{#each cats as {id, name}, i}
	<li><a target="_blank" href="https://www.youtube.com/watch?v={id}">
		{i + 1}: {name}
	</a></li>
{/each}
```

so really easy understand and write in general.

### CSS

The CSS in Svelte itself is scoped so each page (or component) only has the styling applied in the actual style tag

This is great for my HTML+CSS course because I can have a whole page including the CSS in one file and I don't have to worry about any style collisions and so on.

You can also have a global .css file if you want to for fonts and things that don't need to change on a component level.

### Importing components

We can also insert components in our markup. First at the top we import the component
```js
import HelloWorld from "./HelloWorld.svelte."
```

and then in the markup we simply do 

```js
<HelloWorld/>
```
We can also pass data into the component if we in the component put `export` before the variable we want to use, for example `export let name = 'world';`

then we can do

```js
<HelloWorld name={"Henrik"}/>
```

or even, if we have a variable in the parent component `let name = "Henrik"`

```js
<HelloWorld {name}/>
```


## Why SvelteKit?

A thing I ran into is that I wanted to have multiple pages in my Svelte site which didn't really work because the default project is setup for you to have only one page. 

The solution was SvelteKit which handles multiple pages easily. It was a bit scary to use a so called metaframework as a beginner but I realized pretty quickly that you didn't need a huge brain to accomplish things, only a medium sized one.

## What is SvelteKit?

That's a good question and probably one that I can't answer too well, I just knows that it's a framework you use in Svelte if you want a website with multiple pages.

### Routing

You have a \src\routes\ folder which contains **routes** which I guess is a fancy word for pages. For each route you need a file **+page.svelte** which will basically turn into the index.html file. The + sign before page.svelte signifies that it's a route that SvelteKit will magically make work somehow.

so \src\routes\\+page.svelte will be your

yoursite.com

index.html page and if you add a folder \src\routes\about\ with another +page.svelte file 

yoursite.com/about

will use the \src\routes\about\\+page.svelte file.

So **folders** determine the routing which seemed pretty easy to understand for me.

You can also have a file called **+layout.svelte** which can be used for for example navigation. If you have a **+layout.svelte** file in \src\routes\ it will show in all child routes automatically so you don't need to add your navigation to each **+page.svelte** file. 

Very handy!

You can also have random other files without the + sign which won't affect the routing, for example your Svelte components or stores.js or whatever.

### Pitfalls (here is the tutorial part)

Some things were a bit confusing to me. For example when I published my site to github pages it straight up didn't work because all the links were relative to the github pages address instead of the actual github pages repo address so for example it would link to 

https://henrikvilhelmberglund.github.io/
instead of 

https://henrikvilhelmberglund.github.io/HTMLCSS-Sveltekit

To fix this I needed to add this to svelte.config.js:

```json
paths: {
      base: "/HTMLCSS-Sveltekit",
      },
```

after doing that links worked as expected. However when running the server with npm run dev now the address doesn't work (localhost:5173) but I instead need to go to localhost:5173/HTMLCSS-Sveltekit

Probably solvable somehow but anyway not a major issue.

I also needed a static adapter because github pages needs static pages. 
I found that here:

https://www.npmjs.com/package/@sveltejs/adapter-static

Some other fun things I added were

```json
vitePlugin: {
    experimental: { inspector: true },
  },
```

which in the dev server enables an inspector when you press ctrl+shift that lets you click anything and you will open that code row in VSCode. Very fancy!

Also 

```json
fallback: "404.html",
```

in the adapter which creates a custom 404.html that gets displayed in github pages from an +error.svelte file in the src\routes folder.


But in general there weren't too many issues, most things worked fine and if they didn't the solutions were pretty obvious after some fast googling.

I even added Tailwind CSS using this

https://github.com/svelte-add/tailwindcss

which also worked fine. My biggest problem with Tailwind was that it replaced all the default CSS with something called Preflight which I didn't really want because I wanted my sites to be ugly by default. (and not get confused when learnning CSS)

I disabled that with 

```json
corePlugins: {
    preflight: false,
  }
```

in tailwind.config.cjs

and now my sites are ugly again. Yay!

## Well that was a long read

Phew! No idea if anyone actually read the whole thing but I just wanted to say that I'm enjoying learning Svelte and SvelteKit. It feels easy to use while still being powerful. 

I skipped over some things I learned like data loading and stores (commit of me converting from data loading to a store [here](https://github.com/henrikvilhelmberglund/HTMLCSS-Sveltekit/commit/092907e008c0f0fc10591a9eea20c2b5164c73bb))

but I'm looking forward to using it in a real project soon (MIDIeditor), although I have no idea how that project will actually end up. Well anything is better than nothing I guess.

For now I've got a 23 hour (!) [freecodecamp video](https://www.youtube.com/watch?v=UGBJHYpHPvA) to go through.

Thanks for reading!



