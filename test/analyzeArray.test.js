import analyzeArray from '../src/analyzeArray';

test('analyze and check average number', () => {
	expect(analyzeArray([2, 1, 7, 12, 6, 95]).average).toEqual(20.5);
});

test('analyze and check min number', () => {
	expect(analyzeArray([2, 1, 7, 12, 6, 95]).min).toEqual(1);
});

test('analyze and check max number', () => {
	expect(analyzeArray([2, 1, 7, 12, 6, 95]).max).toEqual(95);
});

test('analyze and check array length', () => {
	expect(analyzeArray([2, 1, 7, 12, 6, 95]).length).toEqual(6);
});

test('analyze and check all properties', () => {
	expect(analyzeArray([5, 32, 7, 4, 72])).toEqual({
		average: 24,
		min: 4,
		max: 72,
		length: 5,
	});
});

test('analyze empty array', () => {
	expect(analyzeArray([])).toEqual({
		average: null,
		min: null,
		max: null,
		length: 0,
	});
});
