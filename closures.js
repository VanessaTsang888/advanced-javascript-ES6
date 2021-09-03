/* 

2 - Closures:

https://exercism.org/tracks/javascript/concepts/closures

Closures are a programming pattern in JavaScript which allows variables from an outer lexical scope to be used inside of a nested block of code, i.e. functions.
JavaScript supports closures transparently, and they are often used without knowing what they are.

I have tried this myself using Chrome dev tools and I get an error of: undefined which is what I expected but the instructor don't have this error on his code?

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

I have tried this myself using Chrome dev tools and I get an error of: Uncaught SyntaxError: Unexpected token 'export'
 which is not what I expected as it is the same as the instructors code and he don't have this error?


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
