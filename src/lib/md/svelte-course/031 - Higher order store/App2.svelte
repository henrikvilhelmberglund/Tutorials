<script>
	import mousePosition from "./mousePosition";
	import debounce from "./debounce";

	let position = debounce(mousePosition);
</script>

<div
	style="
background: red;
height: 100px;
  width: 100px;
  position: fixed;
  display: grid;
  place-items: center;
  color: white;
  top: -50px;
  left: -50px;
  z-index: 100;
  transform: translate({$position.x}px, {$position.y}px);
  pointer-events: none;
  ">
	{$position.x}, {$position.y}
</div>
