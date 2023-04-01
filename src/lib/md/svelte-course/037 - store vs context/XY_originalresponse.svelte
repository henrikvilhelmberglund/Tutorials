<!-- credit to ChatGPT 😊 -->
<div class="grid grid-cols-3 grid-rows-3 gap-4">
	<!-- empty space in top left corner -->
	<div />

	<!-- X-axis labels -->
	<div class="col-span-2 flex items-end">
		<div class="flex w-1/2 items-center justify-center font-bold">Dynamic</div>
		<div class="flex w-1/2 items-center justify-center font-bold">Static</div>
	</div>

	<!-- Y-axis labels -->
	<div class="row-span-2 flex flex-col items-end">
		<div class="flex h-1/2 items-center justify-center font-bold">Global</div>
		<div class="flex h-1/2 items-center justify-center font-bold">Local</div>
	</div>

	<!-- global dynamic button -->
	<button class="col-start-2 row-start-2 rounded-lg bg-blue-500 p-4 font-bold text-white"
		>Global<br />Dynamic</button>

	<!-- global static button -->
	<button class="col-start-3 row-start-2 rounded-lg bg-green-500 p-4 font-bold text-white"
		>Global<br />Static</button>

	<!-- local dynamic button -->
	<button class="col-start-2 row-start-3 rounded-lg bg-yellow-500 p-4 font-bold text-white"
		>Local<br />Dynamic</button>

	<!-- local static button -->
	<button class="col-start-3 row-start-3 rounded-lg bg-red-500 p-4 font-bold text-white"
		>Local<br />Static</button>
</div>
