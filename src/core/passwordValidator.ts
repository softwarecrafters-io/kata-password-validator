export function isStrongPassword(password: string) {
	return hasSixCharactersOrMore(password) && containsNumber(password) && constainsLowerCase(password);
}

function hasSixCharactersOrMore(password: string) {
	return password.length >= 6;
}

function containsNumber(password: string) {
	return /.*\d.*/.test(password);
}

function constainsLowerCase(password: string) {
	return /.*[a-z].*/.test(password);
}
