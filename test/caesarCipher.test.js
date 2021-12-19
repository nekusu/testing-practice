import caesarCipher from '../src/caesarCipher';

test('cipher single letter', () => {
	expect(caesarCipher('a', 1)).toBe('b');
});

test('cipher words', () => {
	expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
});

test('cipher phrases with punctuation', () => {
	expect(caesarCipher('Hello, World!', 10)).toBe('Rovvy, Gybvn!');
});

test('cipher with negative shift', () => {
	expect(caesarCipher('Hello, World!', -10)).toBe('Xubbe, Mehbt!');
});

test('cipher with wrapping', () => {
	expect(caesarCipher('z', 1)).toBe('a');
});

test('cipher with large shift', () => {
	expect(caesarCipher('Hello', 150)).toBe('Byffi');
});
