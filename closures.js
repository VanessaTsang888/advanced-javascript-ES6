/* 

2 - Closures:

https://exercism.org/tracks/javascript/concepts/closures

Closures are a programming pattern in JavaScript which allows variables from an outer lexical scope to be used inside of a nested block of code, i.e. functions.
JavaScript supports closures transparently, and they are often used without knowing what they are.

I have tried this myself using Chrome dev tools and I get an error of: undefined which is correct as I've not as yet call it using: nDozen()

*/

// Top-level declarations are global-scope
const dozen = 12;

{
  // Braces create a new block-scope
  // Referencing the outer variable is a closure.
  const twoDozen = dozen * 2;
}

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  return dozen * n;
}

/*

Closures to save state and pass along values
Using a mutable variable declaration (like let or var) allows for some state to be preserved:

-> export the feature called increment from one file. Then import it from another file. For example:
Create a file called main.js which will be the main entry point for the app. This will be importing features or functionality from other Javascript files.
In the index.html file import the main.js file.
Create a file called utils.js which will contain a couple of utility functions. Export each of the utility functions here.


*/

let counter = 0;

// This function closure increments the counter's state in the outer lexical context.
// This way the counter can be shared between many calling contexts.
export function increment() {
  counter += 1;
  return counter;
}

/* 

https://javascript.info/closure





*/
