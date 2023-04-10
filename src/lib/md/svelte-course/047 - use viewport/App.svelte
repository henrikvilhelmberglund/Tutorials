<script>
	import viewport from "./useViewportAction";
</script>

<div style="height: 200px; background: red;" />
<div style="height: 200px; background: blue;" />
<div style="height: 200px; background: green;" />

<h1
	use:viewport
	on:enterViewport={() => console.log("entered viewport")}
	on:exitViewport={() => console.log("exited viewport")}>
	Hello world!
</h1>

<div style="height: 200px; background: red;" />
<div style="height: 200px; background: blue;" />
<div style="height: 200px; background: green;" />

<style>
</style>
