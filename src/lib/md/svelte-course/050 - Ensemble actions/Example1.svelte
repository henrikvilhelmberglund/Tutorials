<script>
	let dropzone1 = "";
	let dropzone2 = "";

	let canDrop1 = false;
	let canDrop2 = false;

	function onDragStart(event) {
		const text = event.target.innerText;
		event.dataTransfer.setData("text", text);
		canDrop1 = text !== "C";
		canDrop2 = text !== "A";
	}

	function onDragEnd(event) {
		canDrop1 = canDrop2 = false;
	}

	function onDrop1(event) {
		event.preventDefault();
		const data = event.dataTransfer.getData("text");
		dropzone1 += data;
	}
	function onDrop2(event) {
		event.preventDefault();
		const data = event.dataTransfer.getData("text");
		dropzone2 += data;
	}
	function onDragOver1(event) {
		if (canDrop1) {
			event.preventDefault();
		}
	}
	function onDragOver2(event) {
		if (canDrop2) {
			event.preventDefault();
		}
	}
</script>

<div class="flex">
	<div class="m-4 h-28 w-28  bg-gray-300" on:drop={onDrop1} on:dragover={onDragOver1}>
		{dropzone1}
	</div>
	<div class="m-4 h-28 w-28 bg-gray-300" on:drop={onDrop2} on:dragover={onDragOver2}>
		{dropzone2}
	</div>

	<div class="flex">
		<div
			draggable="true"
			on:dragstart={onDragStart}
			on:dragend={onDragEnd}
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">
			A
		</div>
		<div
			draggable="true"
			on:dragstart={onDragStart}
			on:dragend={onDragEnd}
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">
			B
		</div>
		<div
			draggable="true"
			on:dragstart={onDragStart}
			on:dragend={onDragEnd}
			class="grid h-8 w-8 place-items-center rounded-[50%] bg-blue-500 text-white">
			C
		</div>
	</div>
</div>

<style>
</style>
