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
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
//         console.log("I found a " + i + ". High five! Three is a crowd.");
//     }
//     else if (i % 3 === 0 && i !== 0) {
//         console.log("I found a " + i + ". Three is a crowd.");
//     }    
//     else if (i % 5 === 0 && i !== 0) {
//         console.log("I found a " + i + ". High five!");
//     }
// }

/* D. Savings Account
1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
> Check your work! Your `bank_account` should have $55 in it.
2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
> Check your work! Your `bank_account` should have $10,100 in it. */
// let bank_account = 0;
// for (let i = 1; i <= 10; i++) {
//     bank_account += i;
// }
// console.log(bank_account); // 55

// let bank_account = 0;
// for (let i = 1; i <= 100; i++) {
//     bank_account += (i * 2);
// }
// console.log(bank_account); // 10100

// III. Arrays & Control Flow
/* A. Talk About It
1. What are the things in an array called?
    elements, sorted by index.
2. Do Arrays guarantee those things will be in order?
    yes, the elements are stored in the array by location specified by index (zero based)
3. What real-life thing could you model with an array? 
    class roster, inventory by category, etc */

/* B. Easy Does It
- Create an array that contains three quotes and store it in a variable called `quotes`.*/
// const quotes = ["This is my first quote.", "Second quote.", "This can get a little boring."]
// console.log(quotes);

/* C. Accessing Elements
Given the following array, `const randomThings = [1, 10, "Hello", true]`:
1. How do you access the 1st element in the array?
2. What would you write to access the 3rd element of the array? */
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
console.log(randomThings[2]);

/* D. Change Values
Given the following array, `const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]`:
2. Change the value of "Github" to "Octocat".
3. Add a new element, "Cloud City" to the array.
4. Check the value of the array to make sure it updated the array. */
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass.splice(ourClass.indexOf("Github"), 1, "Octocat")
// ourClass.push("Cloud City");
// console.log(ourClass);

/*  E. Mix It Up
Given the following array, `const myArray = [5, 10, 500, 20]`:
1. Add the string `"Aegon"` to the end of the array. Add another string of your choice to the end of the array.
2. Remove the `5` from the beginning of the array.
3. Add the string `"Bob Marley"` to the beginning of the array.
4. Remove the string of your choice from the end of the array.
5. Reverse this array using `Array.prototype.reverse()`.
Did you mutate the array? What does _mutate_ mean? Did the `.reverse()` method return anything? yes - changed or added elements through the utilized methods will mutate an array. */
// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon");
// myArray.push("Another string of my choice...");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// console.log(myArray);
// console.log(myArray.reverse());

/* F. Biggie Smalls
Create a variable that contains an integer.
Write an `if ... else` statement that:
1. `console.log()`s "little number" if the number is entered is less than 100.
2. `console.log()`s "big number" if the number is greater than or equal to 100. */
// let biggieSmalls = 100;
// if (biggieSmalls < 100) {
//     console.log("little number");
// }
// else {console.log("big number");}

/* G. Monkey in the Middle
Write an `if ... else` statement:
1. `console.log()` `little number` if the number entered is less than 5.
2. If the number entered is more than 10, log "big number".
3. Otherwise, log "monkey". */
// let monkey = 11;
// if (monkey < 5) {
//     console.log("little number")
//     }
// else if (monkey > 10) {
//     console.log("big number")
//     }
// else {console.log("monkey")};

// H. What's in Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

/* 1. What's Kristyn wearing today? Using bracket notation to access items in `kristynsCloset`, log the sentence `"Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!"` to the console. */
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

/* 2. Kristyn just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.** */
// console.log(kristynsCloset.indexOf("yellow knit hat"));
kristynsCloset.splice([kristynsCloset.indexOf("yellow knit hat") + 1], 0, "raybans");
// console.log(kristynsCloset);

/* 3. Kristyn spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow. */
kristynsCloset.splice(kristynsCloset.indexOf("yellow knit hat"), 1, "stained knit hat");
// console.log(kristynsCloset);

const thomsCloset = [
    [// These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],
    [// These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],
    [// Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

/* 4. Put together an outfit for Thom! Using **bracket notation**, access the first element in Thom's `shirts` array. */
console.log(thomsCloset[0][0]);

/* 5. In the same way, access one item from Thom's pants array. */
console.log(thomsCloset[1][0]);

/* 6. Access one item from Thom's accessories array. */
console.log(thomsCloset[2][2]);

/* 7. Log a sentence about what Thom's wearing. Example: `"Thom is looking fierce in a grey button-up, jeans and wool scarf!"` */
console.log("Thom is looking fierce in a " + thomsCloset[0][2] + ", " + thomsCloset[1][0] + " and a " + thomsCloset[2][1] + "!");

/* 8. Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`. */
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// IV. Functions
/* A. printGreeting
Write a function called `printGreeting` with a parameter `name` that returns a greeting with the argument **interpolated** into the greeting, like so:
console.log(printGreeting("Slimer"));
> => Hello there, Slimer! */
function printGreeting(name) {
    return ("Hello there, " + name + "!")
}
console.log(printGreeting("Slimer"));

/* B. printCool
Write a function `printCool` that accepts one parameter, `name` as an argument. The function should print the name and a message saying that that person is cool.
console.log(printCool("Captain Reynolds"));
> => "Captain Reynolds is cool" */
function printCool(name) {
    return (name + " is cool.")
}
console.log(printCool("Captain Reynolds"));

/* C. calculateCube
Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.
console.log(calculateCube(5));
> => 125 */
function calculateCube(number) {
    return (number ** 3)
}
console.log(calculateCube(5));

/* D. isVowel
Write a function `isVowel` that takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. The vowel could be upper or lower case.
**Test your function on every vowel and make sure it's working.** In general, when you write functions, take a minute to test them with different values to make sure they behave the way you expect.
console.log(isVowel("a"));
> => true */
// function isVowel(char) {
//     vowels = "a", "e", "i", "o", "u";
//     if (char.includes(vowels) || char.includes(vowels.toUpperCase())) {
//         return true
//     }
//     else {return false}
// }
// console.log(isVowel("A"));

/* E. getTwoLengths
Write a function `getTwoLengths` that accepts two parameters (strings). The function should `return` an _array_ of numbers where each number is the length of the corresponding string.
console.log(getTwoLengths("Hank", "Hippopopalous"));
> => [4, 13] */
// function getTwoLengths(firstName, lastName) {
//     return ([firstName.length, lastName.length])
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

/* F. getMultipleLengths
Write a function `getMultipleLengths` that accepts a single parameter as an argument: an **array** of **strings**. The function should `return` an **array** of **numbers** where each number is the length of the corresponding string.
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
> => [5, 4, 2, 2, 4] */
// function getMultipleLengths(stringArr) {
//     let numArr = [];
//     for (let i = 0; i < stringArr.length; i++) {
//         let string = stringArr[i];
//         numArr.push(string.length);
//     }
//     return numArr
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

/* G. maxOfThree
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
console.log(maxOfThree(6, 9, 1));
> => 9 */
// function maxOfThree(x, y, z) {
//     if (x >= y && x >= z) {
//         return x;
//     }
//     else if (y >= x && y >= z) {
//         return y;
//     }
//     else {
//         return z;
//     }
// }
// console.log(maxOfThree(1, 10, 10));

/* H. printLongestWord
Write a function `printLongestWord` that accepts a single argument, an **array** of **strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
> => "Peanutbutter" */
// function printLongestWord(words) {
//     let longestWord = words[0];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// OBJECTS
/* A. Make a User Object
1. Create an object called `user`.
2. Write into the object the key-value pairs for `name`, `email`, `age`, and `purchased`. Set the value of `purchased` to an empty array `[]`. Set the other values to whatever you would like. */
const user = {
    name: "Mai",
    email: "bun@carrot.com",
    age: 900, 
    purchased: [],
}

/* B. Update the User
1. Our user has changed his or her email address. Without changing the original `user` object, update the `email` value to a new email address.
2. Our user has had a birthday! Without changing the original `user` object, increment the `age` value using the postfix operator. Hint: `age++`.*/
user.email = "bun@warren.com";
user.age++;

/* ### C. Adding Keys and Values
You have decided to add your user's location to the data that you want to collect.
- Without changing the original `user` object, add a new key `location` to the object, and give it a value of some location (a string). */
user.location = "Michigan";

/* D. Shopaholic!
1. Our user has purchased some items! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchased` array.
2. They have purchased some "peace of mind". Using `.push()`, add the string "peace of mind" to the `purchased` array.
3. They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchased` array.
4. `Console.log` just the "Merino jodhpurs" from the `purchased` array. */
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

/* E. Object within an Object
Remember that you can add an object to an existing object in the same way that you can add any new key-value pair.
If we want to give our user a `friend` with a `name` and `age`, we could write:
user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we `console.log` `user`, we would see the `friend` object added to our user object.
1. Write a `friend` object into your `user` object and give the friend a name, age, location, and purchased array (empty for now).
2. `Console.log` just the friend's name.
3. `Console.log` just the friend's location.
4. Change the friend's age to 55.
5. The `friend` has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchased` array.
6. The `friend` has purchased "A latte". Use `.push()` to add "A latte" to the friend's `purchased` array.
7. `Console.log` just "A latte" from the friend's `purchased` array.*/
user.friend = {
    name: "Ted",
    age: 905,
    location: "San Fran",
    purchased: [],
}

console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("a latte");
console.log(user.friend);
console.log(user.friend.purchased[1]);

/* G. Functions Operating on Objects
Write a single function `updateUser` that takes no parameters. When the function is run, it should:
- Increment the user's age by 1.
- Make the user's name uppercase.
The function does not need a `return` statement, it will merely modify the user object.
- Write a function `oldAndLoud` that performs the exact same tasks as `updateUser`, but instead of hard-coding it to only work on our `user` object, make it take a parameter `person`, and have it modify the object that is passed in as an argument when the function is called. Call your `oldAndLoud` function with `user` as the argument. */
// function updateUser() {
//     user.age += 1;
//     user.name = user.name.toUpperCase();
// }
// updateUser();
// console.log(user);
// function oldAndLoud(person) {
//     person.age = person.age += 1;
//     person.name = person.name.toUpperCase();
//     return person
// }
//  console.log(oldAndLoud(user));

/* H. Mama cat
Define an object called `cat1` that contains the following properties:
- name
- breed
- age (a number)
`console.log` the cat's age and breed. */
const cat1 = {
    name: "Meowie",
    breed: "Siamese",
    age: 20,
}
console.log(cat1.age, cat1.breed);

/* I. Papa cat
Define an object called `cat2` that contains the same properties. */
const cat2 = {
    name: "Kenny",
    breed: "Tabby",
    age: 19,
}

/* J. Combine Cats!
- Write a function `combineCats` that has two parameters: `mama`, and `papa`. The function will take two arguments -- each a cat object.
- Pass `cat1` and `cat2` as arguments to the `combineCats` function. The function should `console.log` them. */

// function combineCats(mama, papa) {
//     console.log(mama, papa);
// }

// combineCats(cat1, cat2)

/* Make it so the `combineCats` function will return a combination of the two incoming cats. The result should be an object wherein the:
- `name` is a concatenation of the parents' names.
- `age` is 1.
- `breed` is each of the parents' breeds with a hyphen in between. */

function combineCats(mama, papa) {
    let kitty = [];
    kitty.name = mama.name.concat(papa.name);
    kitty.age = 1;
    kitty.breed = `${mama.breed}-${papa.breed}`;
    return kitty
}
console.log(combineCats(cat1, cat2));

/* K. Cat Brain-Bender
If `combineCats` returns an **object**, and if `combineCats` takes **objects** as **arguments**, then it stands to reason that:
`combineCats` can use **itself** as its own argument.
Take a second to stew on that.
What is the result of the following?*/
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
/* The above `console.log` is **two levels** deep of `combineCats`.
- Write a `console.log` that is **three levels** deep of `combineCats`. `combineCats` should have two arguments, each which are `combineCats`, each which have two arguments, each which are `combineCats`.
Your output should look something like:
> { name: 'JoeJamJoeJamJoeJamJoeJam`, age: 1, breed: 'Mog-Siamese-Mog-Siamese-Mog-Siamese-Mog-Siamese' } */
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));