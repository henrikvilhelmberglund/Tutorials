<div>
	A: <slot name="a">Fallback for a</slot>
</div>

<!-- this means that if nothing was passed into the slot b, don't render it -->
{#if $$slots.b}
	<div>
		B: <slot name="b">Fallback for b</slot>
	</div>
{/if}

<div>
	C: <slot name="c">Fallback for c</slot>
</div>
