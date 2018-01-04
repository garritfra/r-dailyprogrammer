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

    it("should return 'uijt jt b tfoufodf xjui ovncfst boe xijuftqbdf 123'", () => {
        expect(cipher.encrypt("this is a sentence with numbers and whitespace 123", 1)).toEqual("uijt jt b tfoufodf xjui ovncfst boe xijuftqbdf 123")
    })

    it("should return '9yza'", () => {
        expect(cipher.encrypt("9xyz", 2)).toEqual("9zab")
    })

    it("should return 'fghijklmnopqrstuvwxyzabcde'", () => {
        expect(cipher.encrypt("abcdefghijklmnopqrstuvwxyz", 5)).toEqual("fghijklmnopqrstuvwxyzabcde")
    })

    it("should throw an Error", () => {
        expect(() => {cipher.encrypt("Test")}).toThrow
    })



})

describe("Caesar Cipher Decryption", () => {

    it("should return abc", () => {
        expect(cipher.decrypt("bcd", 1)).toEqual("abc")
    })

    it("should return 'this is a sentence with numbers and whitespace 123'", () => {
        expect(cipher.decrypt("uijt jt b tfoufodf xjui ovncfst boe xijuftqbdf 123", 1)).toEqual("this is a sentence with numbers and whitespace 123")
    })
})
