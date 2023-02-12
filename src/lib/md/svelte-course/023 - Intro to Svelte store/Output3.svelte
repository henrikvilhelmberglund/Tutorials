<script>
	import { value, subscribe } from "./data2";

  let _value = value;
	subscribe(() => {
		_value = value;
	});
</script>

<h1>value: {_value}</h1>
