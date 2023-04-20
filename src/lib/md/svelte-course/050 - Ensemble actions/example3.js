export function getStatsAction() {
	const lessThan20 = new Set();
	const moreThan20 = new Set();
	function action(node, param) {
		let set = param < 20 ? lessThan20 : moreThan20;
		set.add(node);
		return {
			update(param) {
				set.delete(node);
				set = param < 20 ? lessThan20 : moreThan20;
				set.add(node);
			},
			destroy() {
				set.delete(node);
			},
		};
	}

	return {
		action,
		getLessThan20() {
			return lessThan20;
		},
		getMoreThan20() {
			return moreThan20;
		},
	};
}

export function generateData() {
	const result = new Array(20);
	for (let i = 0; i < 20; i++) {
		result[i] = Math.round(Math.random() * 50);
	}
	return result;
}
