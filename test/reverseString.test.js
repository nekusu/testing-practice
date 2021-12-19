import reverseString from '../src/reverseString';

test('reverse string', () => {
	expect(reverseString('testing')).toBe('gnitset');
});

test('reverse string with spaces', () => {
	expect(reverseString('testing with spaces')).toBe('secaps htiw gnitset');
});

test('reverse empty string', () => {
	expect(reverseString('')).toBe('');
});
