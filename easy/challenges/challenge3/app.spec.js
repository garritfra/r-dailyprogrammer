//Test Suite

let jasmine = require("jasmin")
let app = require("./app")

describe("Caesar Cipher", () => {
    it("should return 'efgfoe uif fbtu xbmm pg uif dbtumf'", () => {
        expect(app.cipher("defend the east wall of the castle")).toEqual("efgfoe uif fbtu xbmm pg uif dbtumf")
    })
})
