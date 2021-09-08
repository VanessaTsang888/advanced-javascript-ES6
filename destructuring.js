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

let tmp = foo();
let a = tmp[0];
let b = tmp[1];
let c = tmp[2];

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

let [a, b, c] = foo();
