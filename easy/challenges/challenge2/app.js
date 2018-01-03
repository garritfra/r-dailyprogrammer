/*

Title:  [easy] challenge #2
Text:  Hello, coders! An important part of programming is being able to apply your programs, so your challenge for today is to create a calculator application that has use in your life. It might be an interest calculator, or it might be something that you can use in the classroom. For example, if you were in physics class, you might want to make a F = M * A calc.

EXTRA CREDIT: make the calculator have multiple functions! Not only should it be able to calculate F = M * A, but also A = F/M, and M = F/A!

*/

class Calculator {
    constructor(){

    }

    add(arr){
        let result = arr[0];   //Set result to be the first value in array
        arr.shift()         //remove the first value, as it has already been used 
        arr.forEach(num => {
            result += num
        });
        return result
    }

    subtract(arr){
        let result = arr[0];   //Set result to be the first value in array
        arr.shift()         //remove the first value, as it has already been used 
        arr.forEach(num => {
            result = result - num
        });
        return result
    }

    multiply(arr){
        let result = arr[0];   //Set result to be the first value in array
        arr.shift()             //remove the first value, as it has already been used 
        arr.forEach(num => {
            result = result * num
        });
        return result
    }

    divide(arr){
        let result = arr[0];   //Set result to be the first value in array

        arr.shift()             //remove the first value, as it has already been used 
        arr.forEach(num => {

            if(num == 0){
                throw EvalError;
            }
            result = result / num
        });
        return result
    }


}

module.exports = Calculator