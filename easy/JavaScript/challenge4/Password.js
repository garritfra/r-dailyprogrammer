/*

Title:  [2/12/2012] Challenge #4 [easy]
Text:  You're challenge for today is to create a random password generator! 

For extra credit, allow the user to specify the amount of passwords to generate.

For even more extra credit, allow the user to specify the length of the strings he wants to generate!

*/

class Password {

    constructor() {
        this.lower = "abcdefghijklmnopqrstuvwxyz"
        this.upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.numbers = "0123456789"
        this.specials = "!+%$§()=<>#"
        this.password = ""

    }

    generatePassword(length) {

        if(length <= 0){
            throw Error
        }
        let iteration = 0;
        do {
            let typeNum = Math.floor(Math.random() * 3)
            this.password += this.generateChar(typeNum)
            iteration++
        } while (iteration < length)

        return this.password
    }

    generateChar(typeNum) {
        switch (typeNum) {
            case 0:
                return this.generateLower()
            case 1:
                return this.generateUpper()
            case 2:
                return this.generateNumber()
            case 3:
                return this.generateSpecial()
        }
    }


    generateLower() {
        let random = Math.floor(Math.random() * (this.lower.length))
        return this.lower[random];
    }

    generateUpper() {
        let random = Math.floor(Math.random() * (this.upper.length))
        return this.upper[random];
    }

    generateNumber() {
        let random = Math.floor(Math.random() * (this.numbers.length))
        return this.numbers[random];
    }

    generateSpecial() {
        let random = Math.floor(Math.random() * (this.specials.length))
        return this.specials[random];
    }
}

let password = new Password()
let passw = password.generatePassword(5)
module.exports = Password