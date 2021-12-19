import calculator from '../src/calculator';

test('1 + 2 equals 3', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('3 - 2 equals 1', () => {
	expect(calculator.subtract(3, 2)).toBe(1);
});

test('10 / 2 equals 5', () => {
	expect(calculator.divide(10, 2)).toBe(5);
});

test('3 * 2 equals 6', () => {
	expect(calculator.multiply(3, 2)).toBe(6);
});
