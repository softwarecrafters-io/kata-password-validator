export function isStrongPassword(password: string) {
	return (
		hasSixCharactersOrMore(password) &&
		containsNumber(password) &&
		constainsLowerCase(password) &&
		constainsUpperCase(password)
	);
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

function constainsUpperCase(password: string) {
	return /.*[A-Z].*/.test(password);
}
