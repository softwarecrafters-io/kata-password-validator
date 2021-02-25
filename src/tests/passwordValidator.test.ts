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
});
