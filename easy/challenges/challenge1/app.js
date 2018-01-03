/*
Title:  [easy] challenge #1
Text:  create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

    your name is (blank), you are (blank) years old, and your username is (blank)

for extra credit, have the program log this information in a file to be accessed later.
*/

let stalker = (name, age, redditName) => {

    
    age = Number(age)
    if(age.toString() === "NaN"){
        throw Error;
    }
    return "your name is " + name + ", you are " + age + " years old, and your username is " + redditName;
}

module.exports = stalker;