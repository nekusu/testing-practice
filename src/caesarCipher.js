function shiftChar(char, shift) {
	const charCode = char.charCodeAt(0);
	const isLowerCase = charCode >= 97 && charCode <= 122;
	const minCharCode = isLowerCase ? 97 : 65;
	const maxCharCode = isLowerCase ? 122 : 90;
	let shiftedCharCode = charCode + shift;
	while (shiftedCharCode < minCharCode) {
		shiftedCharCode += 26;
	}
	while (shiftedCharCode > maxCharCode) {
		shiftedCharCode -= 26;
	}
	return String.fromCharCode(shiftedCharCode);
}

function caesarCipher(string, shift) {
	return string.replace(/[a-z]/gi, (char) => shiftChar(char, shift));
}

export default caesarCipher;
