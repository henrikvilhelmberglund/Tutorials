<button>
	<span>
		<slot />
	</span>
	<div>Some text</div>
</button>

<style>
	span {
		background: var(--button-color, blue);
    color: var(--text-color, white);
	}
	div {
		color: var(--button-color, blue);
	}
</style>
