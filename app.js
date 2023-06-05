// I. Variables & Datatypes
/*
A. Q + A
1. How do we assign a value to a variable?
    using the '=' sign. for example: let firstName = "Bun"
2. How do we change the value of a variable?
    assign a new value to it using '=' but without redeclaring. for example: firstName = "Mai"
3. How do we assign an existing variable to a new variable?
    using the assignment operator (=) also. ex: 
    let x = 26;
    let y = x;
4. Remind me, what are declare, assign, and define?
    declaring a variable establishes it by name. you can declare a variable without giving it a value. 
    assigning gives a variable value. 
    defining is a combination of both - declaring a variable and assigning it an initial value.
5. What is pseudocoding and why should you do it?
    pseudocoding is writing your code out in informal language prior to actual coding - it helps you walk through the process of necessary steps and build the framework of your code in an easier-to-understand format before you translate it to actual code.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    half of the time.
*/

/* B. Strings
Create a variable called firstVariable.
    Assign it the value of the string "Hello World".
    Change the value of this variable to some number.
    Store the value of firstVariable in a new variable called secondVariable.
    Change the value of secondVariable to any string.
    What is the value of firstVariable?
Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
*/
let firstVariable = "Hello World";
firstVariable = 789;
let secondVariable = firstVariable;
secondVariable = "...any string.";
console.log(firstVariable); // 789

let yourName = "Mai Lam";
// 1st option: 
// let greeting = "Hello, my name is " + yourName;
// console.log(greeting);

// 2nd option:
console.log("Hello, my name is " + yourName);


/* C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax, not weird things that don't make sense but happen to print true to the console. */

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e == 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

/* D. The Farm
Declare a variable animal. Set it to be "cow" or some other animal.
Write code that will print out "mooooo" if the variable is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
*/
let animal = "cow";
// animal = "dog";
if (animal === "cow") {
    console.log("moooo");
}
else {console.log("Hey! You're not a cow.");}

/* E. Driver's Ed
Make a variable that holds a person's age; be semantic.
Write code that will print out "Here are the keys!" if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."*/
let driverAge = 16;
if (driverAge >= 16) {
    console.log("Here are the keys!");
};
if (driverAge < 16) {
    console.log("Sorry, you're too young.")
};

// II. Loops
/* Remember: USE let when you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++) */

/* A. The Basics
Write a loop that will print out all the numbers from 0 to 10,inclusive.
Write a loop that will print out all the numbers from 10 up to and including 400.
Write a loop that will print out every third number starting with 12 and going no higher than 4000.
*/
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i <= 400; i++) {
//     console.log(i);
// }

// for (let i = 12; i < 4000; i += 3) {
//     console.log(i);
// }


/* B. Get Even
Print out the numbers that are within the range of 1 - 100.
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " <-- is an even number.");
//     }
//     else {console.log(i)}
// };

/* C. Give Me Five
1. For the numbers 0 - 100, print out "I found a `<number>`. High five!" if the number is a multiple of five. */
// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0 && i !== 0) {
//         console.log("I found a " + i + ". High five!");
//     }
// }

/* 2. Add to the code from above to print out "I found a `number`. Three is a crowd." if the number is a multiple of three. */
// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0 && i !== 0) {
//         console.log("I found a " + i + ". High five!");
//     }
//     if (i % 3 === 0 && i !== 0) {
//         console.log("I found a " + i + ". Three is a crowd.");
//     }
// }

/* 3. For numbers divisible by _both three and five_, be sure your code prints both messages. */
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
        console.log("I found a " + i + ". High five! Three is a crowd.");
    }
    else if (i % 3 === 0 && i !== 0) {
        console.log("I found a " + i + ". Three is a crowd.");
    }    
    else if (i % 5 === 0 && i !== 0) {
        console.log("I found a " + i + ". High five!");
    }

}