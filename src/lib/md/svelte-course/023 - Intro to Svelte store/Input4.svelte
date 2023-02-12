<script>
	import { update } from "./data3";
</script>

<input on:input={(e) => update(e.currentTarget.value)} type="text" />
