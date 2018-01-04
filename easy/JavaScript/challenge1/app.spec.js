let jasmine = require("jasmin")
let stalker = require("./app")

describe("stalker", () => {
    it("should prints 'your name is (blank), you are (blank) years old, and your username is (blank)' ", () => {
        let string = "your name is Garrit, you are 19 years old, and your username is garritfra"
        expect(stalker("Garrit", 19, "garritfra")).toEqual(string)
    })
    it("should print out the name, age and ", () => {
        let string = "your name is Garrit, you are 19 years old, and your username is garritfra"
        expect(stalker("Garrit", "19", "garritfra")).toEqual(string)
    })
    it("should throw an error due to age not being an int ", () => {
        expect(() => {stalker("Garrit", "asd", "garritfra")}).toThrow();
    })
})

