import capitalize from '../src/capitalize';

test('capitalize string in lowercase', () => {
	expect(capitalize('testing')).toBe('Testing');
});

test('capitalize string in uppercase', () => {
	expect(capitalize('TESTING')).toBe('Testing');
});

test('capitalize string in mixed case', () => {
	expect(capitalize('tEsTiNg')).toBe('Testing');
});

test('capitalize empty string', () => {
	expect(capitalize('')).toBe('');
});
