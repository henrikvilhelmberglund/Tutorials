<script>
	let show = false;

	function flipboard(node, params) {
		const { duration, delay, easing } = params || {};
		// final text
		const text = node.textContent.trim();
		const randomChars = "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
		let lastTime = 0;
		return {
			duration,
			delay,
			easing,
			tick(t) {
				if (t === 1) {
					node.textContent = text;
					return;
				}

				// trottling tick function
				const currentTime = Date.now();
				if (currentTime - lastTime < 30) {
					return;
				}
				lastTime = currentTime;

        // assigning dashes, random characters or the real character in the string
				let str = "";
				for (let i = 0; i < text.length; i++) {
					const j = i / text.length;
					if (j < t) {
						str += text[i];
					} else if (j < t * 1.5) {
						str += randomCharacter();
					} else {
						str += "-";
					}
				}
				node.textContent = str;
			},
		};
		function randomCharacter() {
			return randomChars[Math.floor(Math.random() * randomChars.length)];
		}
	}
</script>

<div>
	<label>
		<input bind:checked={show} type="checkbox" /> Show
	</label>
</div>

{#if show}
	<div>
		<span transition:flipboard={{ duration: 1000 }} class="header font-maple">Hello world</span>
	</div>
	<div>
		<span transition:flipboard={{ duration: 1000 }} class="text font-maple"
			>Custom Transitions!</span>
	</div>
{/if}

<style>
	span {
		font-size: 20px;
		font-family: "Maple", Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New";
	}
	.header {
		color: #ff3e00;
	}
	.text {
		color: #1f5389;
	}
</style>
