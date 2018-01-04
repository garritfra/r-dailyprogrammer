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

        if (offset === "undefined") {
            throw Error
        }

        for (let i = 0; i < str.length; i++) {

            position = this.alphabet.indexOf(str[i])
            if (position !== -1) {
                newString += this.alphabet[position + offset]
            } else {
                newString += str[i]
            }
        }

        return newString
    }

    decrypt(str) {

    }

}
let cipher = new Cipher();
console.log(cipher.encrypt("t123est"))
module.exports = Cipher