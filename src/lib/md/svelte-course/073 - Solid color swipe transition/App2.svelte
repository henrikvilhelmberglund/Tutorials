<script>
	let show = false;

	function swipeColor(node, params) {
		const { duration, delay, easing } = params || {};
		// get the element's CSS color value
		const { color } = window.getComputedStyle(node);
		return {
			// Svelte default transition duration is 400ms
			duration,
			delay,
			easing,
			css(t) {
				// t: 0 -> 1
				if (t < 0.5) {
					// first part: 0 -> 0.5 (grow the solid color, text is hidden)
					// t: 0 -> 0.5
					// percentage 0 -> 100
					const percentage = 200 * t;
					return `background: linear-gradient(to right, ${color} 0, ${percentage}%, transparent ${percentage}%);
          color: transparent;
          `;
				} else {
					// second part:  0.5 -> 1 (shrink the solid color, text is revealed)
					// t: 0.5 -> 1
					// by doing the below calculation we get 0 -> 0.5 again and can reuse the percentage formula
					const u = t - 0.5;
					const percentage = 200 * u;
					// percentage 0 -> 100
					return `background: linear-gradient(to right, transparent 0, ${percentage}%, ${color} ${percentage}%);
          color: ${color};
          `;
				}
			},
		};
	}
</script>

<div>
	<label>
		<input bind:checked={show} type="checkbox" /> Show
	</label>
</div>

{#if show}
	<div>
		<span class="header" transition:swipeColor>Hello world</span>
	</div>
	<div>
		<span class="text" transition:swipeColor={{ delay: 300 }}>Custom Transitions!</span>
	</div>
{/if}

<style>
	span {
		font-size: 20px;
	}
	.header {
		color: #ff3e00;
	}
	.text {
		color: #1f5389;
	}
</style>
