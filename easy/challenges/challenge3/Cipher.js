/*

Title:  [2/11/2012] Challenge #3 [easy]
Text:  Welcome to cipher day!

write a program that can encrypt texts with an alphabetical caesar cipher. This cipher can ignore numbers, symbols, and whitespace.

for extra credit, add a "decrypt" function to your program!


*/
class Cipher {
    constructor() {
        this.alphabet = "abcdefghijklmnopqrstuvwxyz"
    }

    encrypt(str, offset) {
        let position
        let newString = ""
        let newChar = ""
        let newPosition
        let modulo = this.alphabet.length;

        if (offset === "undefined") {
            throw Error
        }

        for (let i = 0; i < str.length; i++) {

            position = this.alphabet.indexOf(str[i]) % modulo
            if (position !== -1) {
                newPosition = (position + offset) % modulo
                newChar = this.alphabet[newPosition]
                newString += newChar
            } else {
                newString += str[i]
            }
        }

        return newString
    }

    decrypt(str, offset) {
        return this.encrypt(str, -offset)   //Cheap, but it works ;)
    }

}
module.exports = Cipher