//Test Suite

let jasmine = require("jasmin")
let Cipher = require("./Cipher")

let cipher = new Cipher()

describe("Caesar Cipher Encryption", () => {

    it("should return 'bcd'", () => {
        expect(cipher.encrypt("abc", 1)).toEqual("bcd")
    })

    it("should return 'efgfoe uif fbtu xbmm pg uif dbtumf'", () => {
        expect(cipher.encrypt("defend the east wall of the castle", 1)).toEqual("efgfoe uif fbtu xbmm pg uif dbtumf")
    })

    it("should return '9cde'", () => {
        expect(cipher.encrypt("9abc", 2)).toEqual("9cde")
    })

    it("should return 'bcd'", () => {
        expect(cipher.encrypt("this is a sentence with numbers and whitespace 123", 1)).toEqual("uijt jt b tfoufodf xjui ovncfst boe xijuftqbdf 123")
    })

    it("should throw an Error", () => {
        expect(() => {cipher.encrypt("Test")}).toThrow
    })

})