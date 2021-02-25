export function isStrongPassword(password: string) {
	return hasSixCharactersOrMore(password) && containsNumber(password) && /.*[a-z].*/.test(password);
}

function hasSixCharactersOrMore(password: string) {
	return password.length >= 6;
}

function containsNumber(password: string) {
	return /.*\d.*/.test(password);
}
