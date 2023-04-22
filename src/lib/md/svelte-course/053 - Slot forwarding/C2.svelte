<script>
	let count = 0;
</script>

<button on:click={() => count++}>C: {count}</button>

C header: <slot name="header" {count} />

<div>
	C content: <slot name="content" />
</div>

C footer: <slot name="footer" />
