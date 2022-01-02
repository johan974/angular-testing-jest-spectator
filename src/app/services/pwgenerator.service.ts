import {Injectable} from '@angular/core';

@Injectable()
export class PwGeneratorService {
    numbers = '1234567890';
    letters = 'abcdefghijklmnopqrstuvwyz';
    symbols = '!@#$%^&*()';

    generatePassword( includeLetters: boolean, includeNumbers: boolean, includeSymbols: boolean, length: number): string {
        let validChars = '';
        if (includeLetters) {
            validChars += this.letters;
        }
        if (includeNumbers) {
            validChars += this.numbers;
        }
        if (includeSymbols) {
            validChars += this.symbols;
        }

        let generatedPassword = '';
        // tslint:disable-next-line:prefer-for-of
        for ( let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * validChars.length);
            generatedPassword += validChars[index];
        }
        return generatedPassword;
    }
}
