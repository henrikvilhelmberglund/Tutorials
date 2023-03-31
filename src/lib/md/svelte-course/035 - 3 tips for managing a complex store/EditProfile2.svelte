<script>
	import data2, { user } from "./data2";
	let show = false;

	import markUpdate2 from "./markUpdate2";

	const action = markUpdate2;
</script>

<div use:action class="icon" on:click={() => (show = !show)}>⚙</div>
{#if show}
	<div use:action class="backdrop" />
	<div use:action class="modal">
		Update Username:
		<input bind:value={$user.name} type="text" />
		<button
			on:click={() => {
				$data2.notifications = [...$data2.notifications, `New name: ${$user.name}`];
				show = false;
			}}>Close</button>
	</div>
{/if}

<style>
	.icon {
		margin: 0 8px;
		font-size: 12px;
		cursor: pointer;
	}
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		border: 1px solid;
		padding: 20px;
		background: white;
		z-index: 2;
	}
	.backdrop {
		background: black;
		opacity: 0.5;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	input {
		margin-top: 8px;
		width: 100%;
	}
	button {
		margin-left: auto;
		display: block;
	}
</style>
