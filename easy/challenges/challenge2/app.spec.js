//Test Suite
let jasmine = require("jasmin")
let Calculator = require("./app")
let calc = new Calculator()


describe('Calculator Add', () => {
    it('should add 2 and 5 and return 7', function() {
        expect(calc.add([2, 5])).toEqual(7)
    });

    it('should add 5 and -10 and return -5', function() {
        expect(calc.add([5, -10])).toEqual(-5)
    });
    
    it('should add 5 and 2.5 and return 7.5', function() {
        expect(calc.add([5, 2.5])).toEqual(7.5)
    });
    
    it('should add 1, 2, 3, 4, 5 and return 15', function() {
        expect(calc.add([1, 2, 3, 4, 5])).toEqual(15)
    });
    it("should return 0", function(){
        expect(calc.add([0])).toEqual(0)
    });   
    it("should throw an error", function(){
        expect(() => {calc.add(0)}).toThrow()
    });        
        
});

describe('Calculator Subtract', () => {

    it('should subtract 2 and 5 and return -3', function() {
        expect(calc.subtract([2, 5])).toEqual(-3)
    });

    it('should subtract 5 and -10 and return 15', function() {
        expect(calc.subtract([5, -10])).toEqual(15)
    });
    
    it('should subtract 5 and 2.5 and return 2.5', function() {
        expect(calc.subtract([5, 2.5])).toEqual(2.5)
    });
    
    it('should subtract 1, 2, 3, 4, 5 and return -13', function() {
        expect(calc.subtract([1, 2, 3, 4, 5])).toEqual(-13)
    });
    it("should return 0", function(){
        expect(calc.subtract([0])).toEqual(0)
    }); 
    it("should throw an error", function(){
        expect(() => {calc.subtract(0)}).toThrow()
    });          
        
});


describe('Calculator Multiply', function() {
    it("should multiply 5 and 5 and return 25", () => {
        expect(calc.multiply([5, 5])).toEqual(25)
    })
    it("should multiply 5 and -5 and return -25", () => {
        expect(calc.multiply([5, -5])).toEqual(-25)
    })
    it("should multiply 5, 5 and -100 and return -2500", () => {
        expect(calc.multiply([5, 5, -100])).toEqual(-2500)
    })
    it("should throw an error", function(){
        expect(() => {calc.divide(0)}).toThrow()
    });    
});
    

describe('Calculator Divide', function() {
    
    it('should divide 0 and 0 and throw error', function() {
        expect(() => {calc.divide([0, 0])}).toThrow(EvalError)
    });
    it('should divide 6 and 2 and return 3', function() {
        expect(calc.divide([6, 2])).toEqual(3)
    });
    it('should divide 6 and -2 and return -3', function() {
        expect(calc.divide([6, -2])).toEqual(-3)
    });
        
});
    
    

