/*
[] 1234abcdABCD_ ⇒ true - cumple todas las reglas
[] 1aA_ ⇒ false - no tiene longitud suficiente
[] abcdABCD_ ⇒ false - no tiene números
[] 1234ABCD_ ⇒ false - no tiene minúsculas
[] 1234abcd_ ⇒ false - no tiene mayúsculas
[] 1234abcdABCD ⇒ false - no tiene guión bajo
 */
import { isStrongPassword } from '../core/passwordValidator';

describe('The password strength validator', () => {
	it('considers a password to be strong when all requirements are met', () => {
		expect(isStrongPassword('1234abcdABCD_')).toBe(true);
	});
	it('fails when the password is too short', () => {
		expect(isStrongPassword('1aA_')).toBe(false);
	});
	it('fails when the password is missing a number', () => {
		expect(isStrongPassword('abcdABCD_')).toBe(false);
	});
	it('fails when the password is missing a lowercase', () => {
		expect(isStrongPassword('1234ABCD_')).toBe(false);
	});
	it('fails when the password is missing an uppercase', () => {
		expect(isStrongPassword('1234abcd_')).toBe(false);
	});
	it('fails when the password is missing an underscore', () => {
		expect(isStrongPassword('1234abcdABCD')).toBe(false);
	});
});
