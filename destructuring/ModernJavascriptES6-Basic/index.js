/*
Task 2: Variables (let) and Scoping:

Function scope
Block scope 
Hoisting
and the let keyword.
*/

// Task 1: Introduction

// console.log('Hello, ES6 and Vanessa');

// ---------------------------------------------
// Task 2: Variables (let) and Scoping:
// Use let keyword to declare my variables. var is the old ES5 keyword to declare variables.
// If we use the variable dogo before its declared we get undefined as variables in JS are
// hoisted. For var the initial value is set to undefined. When assigned to a value, the variable
// is updated.

/**********************
console.log(dogo);

var dogo = "Akita";
console.log(dogo);
var dogo = "Shibe";
console.log(dogo);
// We can also redefine variables meaning that we can set to new variable.
dogo = "Chow Chow";
console.log(dogo);
// ES6 introduces the letand const keywords.
let cate = "British Shorthair";
console.log(cate); // British Shorthair
// If we try to redeclare it we'll get an eror as the identifier cate is already declared.
// let cate = 'Turkish Angora'; // SyntaxError: Identifier 'cate' has already been declared.
// If we try to change the value of cate, we not going to get an error.
cate = "Turkish Angora";
console.log(cate);
// So with let we can't reclared variables but we can redefine them to a different value.
// If we try to use the variable before its declaration we'll get an error:
// ReferenceError: Cannot access 'cate' before initialisation.
// All variables in JS are hoisted.

// Scope: var has functional scope. Print the variable outside of functhion.
// The dogo declared inside of the function is scoped to the function scope of the function.
// This is how we can get: inside: Coker Spaniel and inside: Coker Spaniel.
// Variables declared inside of a function is only available within that fn. The fn creates its
// own scope for the variables declared insdie of it so they don't mess with variables outside.
//
var dogo = "Akita";
function printBreed() {
  let dogo = "Coker Spaniel";
  console.log("inside: " + dogo); // inside: Coker Spaniel
}

printBreed();
console.log("outside: " + dogo); // inside: Coker Spaniel

// Another type of scope is the block scope - anything that has a set of braces around it.
// i.e. the for-loop has a block.
for (let i = 0; i < 2; i++) {
  let parrot = "Hey!";
}
// Use the parrot ouside of the for-loop as var doesn't have a block-scope.
// Anything declared inside is available outside as well as var doesn't have a block-scope.
// The 'i' variable is a tempary variable that we need for our for-loop.
// If we change the var to let we'll not be able to use the 'parrot' or 'i'and will get error:
// ReferenceError: parrot is not defined.
// Variables that is declared with let has block scope rather than function scope.
// console.log(parrot);
// console.log(i);

// Task 2: Execise 1: Fix the code to print 15
// I have change the x2 var to let and saved. Now prints up to 15.

let age = 15;

for (let age = 1; age <= 10; age++) {
  console.log(age);
}

console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier
// Fix the code so that it brings Jack Russel Terrier brings after the if-statement.
// Soluton: I changed the variables inside of the if and else blocks from var to let.
// Now I have Jack Russell Terrier printed in the terminal. For consitency and best practice,
// I've change the other variables to let.
let myDog = "Jack Russell Terrier";
let shortLeggies = true;

if (shortLeggies) {
  let myDog = "Welsh Corgie";
  console.log(myDog);
} else {
  let myDog = "Border Collie";
  console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier

 **********************************************************************************************/

/*
Task 3: Variables (const) and Immutability:

Ex 3: make the value of the painter immutable.
*/

// TASK 3: Exercise: Refactor the code to use let/const. Make the value of the painter immutable.

/*************************************************************************************************************
var painter = {
  name: "Van Gogh",
  nationality: "Dutch",
  paintings: ["The Starry Night", "Irises", "Almond Blossoms"],
};

Object.freeze(painter);
Object.freeze(painter.paintings); // TypeError: Cannot add property 3, object is not extensible.

// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }

 ****************************************************************************************************************************************/

/***********************************************************************************************************************************************
Task 4: Extracting data with Destructuring: 

Extractng data from arrays and objects.

*/
/*****************************************************************************************************************************

// Task 4: Exercise: Extract data with destructuring:
// this is extracting ingredients one by one. i need to refactor code to use the use destructuring.

const ingredients = {
  // tea: 'black',
  milk: "soy",
  sweetener: "honey",
  spices: ["ginger", "cardamom", "cinnamon", "nutmeg"],
};

// Destructure the parameters:
// Will logout recipe for prepareChai:
// we don't have a default values into this destrcucturing version. If one or more properties missing from the object
// it will be assigned to undefined which not best practice for default value. To specify default values destructure
// parameters: tea = "regular"
function prepareChai({ tea = "regular", spices, milk, sweetener }) {
  console.log(
    "Mix the " +
      tea +
      " tea " +
      "with the " +
      spices +
      " in a small pot. " +
      "Add a cup of water and bring to boil. Boil for 2-3 min. " +
      "Add " +
      milk +
      " milk and " +
      sweetener +
      ". " +
      "Simmer for 3 min. Serve masala chai hot or warm!"
  );
}

prepareChai(ingredients);
// Can use the rest operator to extract the remaining properties in to an array.
// const spices = [ "cardomom", "turmeric", "cumin" ]
// Extract the first spice. Use the rest operator to extract the rest of the values from spices property.
// Can call this variable restOfTheSpices or whatever we want.
const [spice1, ...restOfTheSpices] = spices;
console.log(spice1, restOfTheSpices); // cardomom [ 'turmeric', 'cumin' ]
// We can also use legion to skip elements. So if we want to skip the first two elements and print the third spice.
// we use two commas and create a variable name for the third spices.
const [, , thirdSpice] = spices;
console.log(thirdSpice); // cumin

*****************************************************************************************************************************************/

/*
Task 5: Strings and Interpolation:

continue from here: https://www.coursera.org/learn/modern-javascript-es6-basics/ungradedLti/BDxG6/modern-javascript-es6-basics

Methods on the string prototype:

Use the includes() method to find out if some text is included in a string. The output will be either true or false.


*/

const language = "English";
console.log(language.includes("random")); // false

/// use the startsWith() method to check any string that starts with some text. Note this method is case-sensitive!
console.log(language.startsWith("E")); // True // The string English has a 'cap E'.
// Can check for multiple characters aswell:
console.log(language.startsWith("Eng")); // True

/// Use the endsWith() method to check a string that end with certain characters:
console.log(language.endsWith("sH")); // false // our string 'English' don't end with a cap H.

/// Using the repeat() method. We can repeat a string multiple times. Need to specify how many time we want to repeat the string 'English'.
console.log(language.repeat("3")); // EnglishEnglishEnglish

/// Template Literal to concatinate multiple strings but without using the plus+ operator.
// Using ES5: quotes with the plus operator.
console.log("I speak " + language); // I speak English
// ES6: we can use the template literal. wrap the whole express with a set of back ticks, and wrap the variable name with a dollar symbol and a set of
// braces. The variable becomes dynamic which is indicated in a different colour. The output/result is still the same which is what I expected.
console.log(`I speak ${language}`); // I speak English
// Inside the brace we can type any valide JS expression, i.e. a comparision -> ternary. Evalue the string "British English".
console.log(`I speak ${language === "English" ? "British English" : "non"}`); // I speak British English
// Can use template literal for multi line strings. Will logout:
/* I speak
    some languages such as
      British English */
console.log(`I speak
  some languages such as
    ${language === "English" ? "British English" : "non"}`);

/****
 *
 * TASK 5: Exercise: Refactor the code to use the ES6 String utility methods and template literals.
 *
 *
 *****/

/***** Before Refactor:

const country = "Bulgaria";
const city = "Sofia";

if (country.indexOf("Bulg") > -1) {
  console.log("The country starts with Bulg");
}

if (city.indexOf("So") === 0) {
  console.log("The name starts with So");
}

if (city.lastIndexOf("a") === city.length - 1) {
  console.log("The name ends with a");
}

console.log("The capital of " + country + " is the city of  " + city);

******/

/// Afer Refactor:
// I've removed the comparisons since I've used the String methods.
/*

const country = "Bulgaria";
const city = "Sofia";

if (country.includes("Bulg")) {
  console.log("The country starts with Bulg");
}

if (city.startsWith("So")) {
  console.log("The name starts with So");
}

if (city.endsWith("a")) {
  console.log("The name ends with a");
}

// console.log("The capital of " + country + " is the city of  " + city);
console.log(`The capital of ${country} is the city of ${city}`);

*/

/******************************************************************************************************
 *
 * TASK 6: ARROW FUNCTIONS:
 * Advantages: less variables, has implicit return which contributes to their conistency.
 *
 ******************************************/

/*
Before Refacoring to use Arrow Function:

/// Delacare a numbers array and do a simple operation which is to multiple the elements inside the numbers array by 2.
// Declare the numbers variable using the const keyword and assign it to an array with six elements.
const numbers = [1, 2, 3, 4, 5, 6];
// Declare a variable called doubleNumbers and assign it to the numbers array and use the map method on it to loop over the six elements in that array.
// Declare a function using the let keyword, and pass in a parameter called number. Then do an oporation that multiples each elements by 2 and return a new array with the
// result of this operation.
let doubleNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleNumbers); // [ 2, 4, 6, 8, 10, 12 ]

*/

/// Now refactor the above function into an Arrow Function. Use the fat arrow symbol.
// If we only have one parameter as the input for the function then we do need to keep the parameters inside of braces. Otherwise no braces needed.
// Since we have just a single expression - the return statement, we can omit the body of the function so remove the braces, semi colon and the return
// keyword. So its all on one line.
// Provide a new variable called calculateDouble.
/*
const numbers = [1, 2, 3, 4, 5, 6];
const calculateDouble = (number) => number * 2;
let doubledNumbers = numbers.map(calculateDouble);

console.log(doubledNumbers); // [ 2, 4, 6, 8, 10, 12 ]

// TASK 6 EXERCISE: Use arrow function to filter out only the prime numbers from the array:
// I think the below solution from the instructor is wrong as 4 and 6 are not prime numbers? I think what the instructor is doing is checking for even numbers from the primeNumbers array
// then output those to a new array using the filter() method?
const isPrime = (number) => number % 2 === 0;
const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);
console.log(primeNumbers); // [ 2, 4, 6 ]

*/

/***************
 *
 * TASK 7: ARROW FUNCTION AND THIS.
 * Before arrow function, functions are based of the 'this' value based on how function is called.
 * If the function is a constructor then the 'this' is the new object. If its an object method then would be the base object. If just a
 * regular function then 'this' will be undefined.
 *
 *
 *****************/

// A constructor function, hence the cap D for dog. Every 1 second increase the age of the dog. Then print the age.
// NaN -> don't work as the setInterval function has its 'this' not using the 'this' and don't care that 'this' from its context.
// Swap the function for an Arrow Function. Now the age is increasing. The arrow fn take the 'this' from its surroundings i.e. from the context:
// this.age = 0;
/*
function Dog() {
  this.age = 0;

  setInterval(() => {
    this.age += 1;
    console.log(this.age);
  }, 1000);
}

// Initailise the dog -> its a puppy to start with as it start with 0.
const puppy = new Dog();
*/

/// Arrow Functions don't have its own arguments object. Can't receive arguments. We can access arguments by using the arguments keyword.
// Check if the number is odd. In this case the first num is the first argument of the function.
// The arguments gets its 'this' fromt the surrounding context.
// Instead of using arguments we can use the rest oporator with variable called args for arguments. Result: we get the argumetns of the function.
const isOdd = (...args) => {
  console.log(args);
  return arguments[0] % 2 === 1;
};

// Call it with 1 which is an odd number.
console.log(isOdd(1, 2, 3, 4)); // [ 1, 2, 3, 4 ] // false

/*
TASK 7: Exercise: 

Refactor the code so we don't get the error: TypeERror: Cannot read property 'good' of undefined.
This is primitive translator class, with  a simple English phase inside it. Has a method that gets the Bulgarian translation of the phrase.
The translation should be double ten but it don't work as we get an error. Refactor to fix it.
*/
/* Before refactor:

function Translator() {
  this.phrase = "good day";
  this.englishBulgarianDictionary = {
    good: "double",
    day: "tenn",
  };
}

Translator.prototype.getBulgarianPhrase = function () {
  return this.phrase
    .split(" ")
    .map(function (word) {
      return this.englishBulgarianDictionary[word];
    })
    .join(" ");
};

const translator = new Translator();
console.log(translator.getBulgarianPhrase());
*/

// Refactored:
function Translator() {
  this.phrase = "good day";
  this.englishBulgarianDictionary = {
    good: "double",
    day: "tenn",
  };
}

Translator.prototype.getBulgarianPhrase = function () {
  return this.phrase
    .split(" ")
    .map((word) => this.englishBulgarianDictionary[word])
    .join(" ");
};

const translator = new Translator();
// Will logout the translation.
console.log(translator.getBulgarianPhrase()); // double tenn
