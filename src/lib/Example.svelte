<script>
	export let src = undefined;
	export let meta = undefined;
	// suppress vite-plugin-svelte warning about unused props
	$: src, meta;
</script>

<div class="root">
	<div class="container">
		<div
			class="example-wrapper rounded-b-0 rounded-lg border-2 border-b-0 border-solid border-orange-500 p-4">
			<div class="example">
				<slot name="example" />
			</div>
		</div>
		<pre class="language-svelte rounded-t-0 rounded-lg border-t-0"><slot name="code" /></pre>
	</div>
</div>

<style>
	/* .root {
    margin: 0.5rem 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border-bottom-left-radius: var(--example-border-radius, 0.25rem);
    border-bottom-right-radius: var(--example-border-radius, 0.25rem);
  }

  .example-wrapper {
    display: flex;
    justify-content: center;
    background: var(--example-background, #e9e9e9);
    border: var(--example-border, 1px solid rgb(10, 8, 8));
    overflow: hidden;
    border-bottom: none;
    border-top-left-radius: var(--example-border-radius, 0.25rem);
    border-top-right-radius: var(--example-border-radius, 0.25rem);
  }
  
  

	.example {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.75rem 0;
		min-height: 3rem;
	} 
	 
  */

	pre {
		margin: 0;
	}

	* {
		@apply font-normal text-black;
	}
</style>
