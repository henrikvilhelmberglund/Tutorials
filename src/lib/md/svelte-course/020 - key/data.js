export async function fetchChat(from) {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return new Array(randomInt(3, 4)).fill(null).map((_) => {
		const length = randomInt(5, 10);
		return `${from}: "${String.fromCharCode(
			...new Array(length).fill(0).map((_) => randomInt(65, 52))
		)}"`;
	});
}

function randomInt(offset, n) {
	return Math.round(Math.random() * n + offset);
}
