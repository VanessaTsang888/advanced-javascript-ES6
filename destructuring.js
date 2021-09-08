/*

Destructuring in JavaScript ES6:

Resources:
ES6: The Right Parts -> Destructuring: https://app.pluralsight.com/library/courses/es6-the-right-parts/table-of-contents

Audience Q&A: TypeScript vs JavaScript:
The declaative form versus the imperative form:
Destructuring feature is the most complex as there is lots of steps to learn.
The best of CoffeeScript made it into ES6. 

ARRAY DESTRUCTURING:


*/

/* 
A function named foo that returns an arry.
We want to consume that value in some other part of the programme.

We need to individually reference different values, we want lexical names to reference like a, b, and c.
So create a temp variable then creating individual assignments. This practice is Destructuring.
Take a structure like an Object or an Array and deconstruct it down into its constituent parts through assignment. So Destructuring is really an
assignment operation. This the imperative version.

A declarative form of this destructing assignment;
Array destructuring.
*/

// Imperative:
function foo() {
  return [1, 2, 3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];

/* A declarative form of this destructing assignment;
 Array destructuring:
 declare something that looks like an array but not an array. Inside we list out things we want to assign.
 An array is always a source of assignment as its a value but this isn't an array, its an Pattern.
 We are saying: we are expecting an array with 3 values and would like JS Engine to take that value deconstruct it down to its individual parts and take
 the first item in the array and assign it to 'a', take the item in the second position and assign it to variable b, etc.

*/

// Declare a ncice clean pattern -> Declarative:

function foo() {
  return [1, 2, 3];
}

/* A declaration for pattern assignment. When we have more than three elements we want to put them on different lines.
 White space and new lines are good for readability.
 We are saying go break these things down and assign them.
 Its ok to get back more values than what we account for. So the pattern what need to be a fully and inclusive pattern, it can be a partial pattern for
 stuff we care about.
 Use white space and new lines to make my code base more readable.
 We are saying: put value 1 into the place of a, etc.
 Declare a nice clean pattern that says: this is the shape of stuff I'm expecing to get back and if I get something that matches the shape, I want you to
 make these assignments.

*/
let [a, b, c] = foo();

/*
Object Destructuring:

*/

// ES5 Version:

function foo() {
  return { a:1, b:2, c:3};
}

var temp = foo();
var a = tmp.a;
var b = tmp.b ! == undefined ? tmp.b : 42;
var c = tmp.c;

// ES6 Version: Object Pattern:
// I want the a property to be targeted to ..
// 1:06
function foo() {
  return { a:1, b:2, c:3};
}
// Go get the property of name 'a' and assign it to a lexical variable called 'a'.
// With Object literals, the property name is always on the left, with Object destructuring the property name is always on the left.

let {
  a: a,
  b: b,
  c: c
} = foo();

// Where target and source are the same, we don't need to do any alias or renaming, we don't need to specify them twice.
let {
  a,
  b,
  c
} = foo();

// We can reassign a property to a different variable called 'X':
// Now the 'X' is the target not the source.
// Can have default value assignments, i.e. a = 10,
// If we return something that is not an Object, could get failure here. So put a guard here: empty object to be destrucutred
// If our pattern don't account for a property, that property just doesn't get worried about.
// If our patter accounts for a property that don't exist, we end up getting a variable that's just undefined as we accessed the 'd' on an object
// and it didn't have one.

let {
  a = 10,
  b: X = 42,
  c
} = foo() || {}; // Provide a default as must return something that is an object case something falsey came back.

/*
Nested Object Destructuring:
we can do nested object destructuring as we can do nested array destructuring


*/

function foo() {
  return { a:1, b:2, c:3,
      d: {
          e: 4 // 'e' variable assigned to value of 4.
      }
     };
}
// 'd' -> now instead of lexical variable for it to be targeted at, now need a destructuring pattern for it to be targeted at using a set of braces
// Can't do it with arrays but with objects we can account for variable 'd' a number of times: we can multiple account for a property.
// If we try to destructure an undefined structure/value we will get an exception case. Therefore, we need a provide a default
let {
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: { // start of destructuring pattern
    e
  } = {} // Empty object to be destructured used as the source of the destructuring. The value to be destructured.
} = foo() || {};

// If we try to destructure an undefined structure/value we will get an exception case. Therefore, we need a provide a default
let {
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: { 
    e
  } = {} // provide a default incase of a undefined value -> if 'd' don't exist.
} = foo() || {};

// A pattern that comes from some value somewhere, 8:10
// { a: X  = 2 } = ..

// We can do an array inside of an object:

let {
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: [ 
    e
  ] = [] // if you want a hard failure then leave off this default but most of the time we don't want this. Get a linter rule to force this in everytime.
} = foo() || {};

// This is an object destructuring not a block lable: use a pair of parenthise:
({
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: [ 
    e
  ] = []
} = foo() || {});

/*
Destructuring and Functions Parameters:
Functions that have that takes 3 or more arguments, switch it to an object destructuring so that people can name their arguements instead.

*/

function foo( {a, b, c} = {} ) {
  console.log(a, b, c);
}

foo( {
    a: 1,
    b: 2,
    c: 3
});

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Destructuring assignment:

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects,
into distinct variables.
*/

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// Syntax:
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Description:
// The object and array literal expressions provide an easy way to create ad hoc packages of data.
const x = [1, 2, 3, 4, 5];

// The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Similarly, you can destructure arrays on the left-hand side of the assignment
const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];








