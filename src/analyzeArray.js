function average(array) {
	if (!array.length) return null;
	const sum = array.reduce((acc, curr) => acc + curr);
	return sum / array.length;
}

function min(array) {
	if (!array.length) return null;
	return Math.min(...array);
}

function max(array) {
	if (!array.length) return null;
	return Math.max(...array);
}

function analyzeArray(array) {
	return {
		average: average(array),
		min: min(array),
		max: max(array),
		length: array.length,
	};
}

export default analyzeArray;
