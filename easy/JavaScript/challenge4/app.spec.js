//Test Suite

let jasmine = require("jasmin")
let Password = require("./Password")

describe("Password", () => {
    it("should have a length of 10", () => {
        let password = new Password()
        let passw = password.generatePassword(10)
        expect(passw.length).toEqual(10)
    })
    it("is empty and should throw", () => {
        let password = new Password()
        expect(() => {password.generatePassword(0)}).toThrow()
    })
})