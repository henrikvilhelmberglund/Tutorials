<script>
	import { update } from "./data2";
</script>

<input on:input={(e) => update(e.currentTarget.value)} type="text" />
