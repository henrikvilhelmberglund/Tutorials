<script>
	import { getDragAndDropActions } from "./dragAndDropActions";

	// function that creates an action
	// good way to not enforce the name of what is being returned!
	const [drag1, drop1] = getDragAndDropActions();
	const [drag2, drop2] = getDragAndDropActions();

  let dropzone1 = "";
	let dropzone2 = "";
</script>

<div class="flex">
	<div
		class="m-4 h-28 w-28  bg-gray-300"
		use:drop1
		on:receivedDragData={(event) => (dropzone1 += event.detail)}>
		{dropzone1}
	</div>
	<div
		class="m-4 h-28 w-28 bg-gray-300"
		use:drop2
		on:receivedDragData={(event) => (dropzone2 += event.detail)}>
		{dropzone2}
	</div>

	<div class="flex">
		<div
			draggable="true"
			use:drag1={"A"}
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">
			A
		</div>
		<div
			draggable="true"
			use:drag1={"A"}
			use:drag2={"B"}
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">
			B
		</div>
		<div
			draggable="true"
			use:drag2={"C"}
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">
			C
		</div>
	</div>
</div>

<style>
</style>
