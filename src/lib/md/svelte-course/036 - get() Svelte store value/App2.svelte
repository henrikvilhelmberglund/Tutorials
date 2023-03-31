<script>
	import { store } from "./store";

	function calculateDoubleValue(store) {
		let _store;
		const unsubscribe = store.subscribe((value) => {
			_store = value;
		});
		unsubscribe();
		return _store * 2;
	}
</script>

{$store} * 2 = {calculateDoubleValue(store)}

<style>
</style>
