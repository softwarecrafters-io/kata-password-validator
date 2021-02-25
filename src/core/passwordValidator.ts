export function isStrongPassword(password: string) {
	return password.length >= 6 && /.*\d.*/.test(password);
}
