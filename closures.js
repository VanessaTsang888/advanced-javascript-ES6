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

Code blocks:
If a variable is declared inside a code block {...}, it’s only visible inside that block.

For example:

*/

{
  // do some job with local variables that should not be seen outside

  let message = "Hello"; // only visible in this block

  alert(message); // Hello
}

alert(message); // Error: message is not defined

// We can use this to isolate a piece of code that does its own task, with variables that only belong to it:
{
  // show message
  let message = "Hello";
  alert(message);
}

{
  // show another message
  let message = "Goodbye";
  alert(message);
}

/* 
There’d be an error without blocks:
Please note, without separate blocks there would be an error, if we use let with the existing variable name:
Basically we need the two sets of braces.
*/

// show message
let message = "Hello";
alert(message);

// show another message
let message = "Goodbye"; // Error: variable already declared
alert(message);

/*
For if-statements, for-loops, while-loops etc, variables declared in {...} are also only visible inside:
*/

if (true) {
  let phrase = "Hello!";

  alert(phrase); // Hello!
}

alert(phrase); // Error, no such variable!

/*
Here, after if finishes, the alert below won’t see the phrase, hence the error.

That’s great, as it allows us to create block-local variables, specific to an if branch.

The similar thing holds true for for and while loops:

*/

for (let i = 0; i < 3; i++) {
  // the variable i is only visible inside this for
  alert(i); // 0, then 1, then 2
}

alert(i); // Error, no such variable

/*
Visually, let i is outside of {...}. But the for construct is special here: the variable, declared inside it, is considered a part of the block.
*/

/*
Nested functions
A function is called “nested” when it is created inside another function.
We can use it to organize our code, like this:
Passing in two parameters or arguments as inputs into the sayHiBye function. Inside that function is another function called getFullName which
returns a string of the users first name and their last name:
*/
function sayHiBye(firstName, lastName) {
  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert("Hello, " + getFullName());
  alert("Bye, " + getFullName());
}

/*
Here the nested function getFullName(). It can access the outer variables and so can return the full name.
Nested functions are quite common in JavaScript.

What’s much more interesting, a nested function can be returned: either as a property of a new object or as a result by itself.
It can then be used somewhere else. No matter where, it still has access to the same outer variables.

Below, makeCounter creates the “counter” function that returns the next number on each invocation:
  Where is the counter function?
*/

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();

alert(counter()); // 0
alert(counter()); // 1
alert(counter()); // 2

// We are calling the counter by writing this: counter() because the makeCounter function is stored inside of the counter variable.

/* 

The makeCounter() function is returning a function (on line 4).  This is an anonymous function inside the makeCounter function. 
This anonymous function is also a closure because it is aware of the counter variable which is declared outside of it. 

counter is an actual function.  The anonymous function returned by makeCounter is stored in counter. 
We can invoke makeCounter any number of times and create more counter functions.  Each of these will have their own counter value.

*/

/*
https://app.pluralsight.com/guides/javascript-closures
JavaScript Closures:
This resource from the NEXT Learning Platform makes more sense to me:
*/

/*
The counter function can also return more than one function, wrapped into an object. If we had decrement function and wanted to return it, as well,
that could be accomplished with the following code:
*/
function counter(initValue) {
  var currentValue = initValue;

  var increment = function (step) {
    currentValue += step;
    console.log("currentValue = " + currentValue);
  };

  var decrement = function (step) {
    currentValue -= step;
    console.log("currentValue = " + currentValue);
  };

  return { increment: increment, decrement: decrement };
}

/*
The returned item has increment and decrement properties whose values are increment and decrement functions, respectively.
In that way, we can expose those inner functions to the global scope, so we can call them from it:
*/

var myCounter = counter(0); // myCounter now refers to the object returned by counter

myCounter.increment(1); // call the appropriate "property" function using dot notation
myCounter.increment(2);
myCounter.decrement(1);
myCounter.increment(3);
myCounter.decrement(2);

/*
If more than one function is being returned, they must be wrapped into an object, like in the example above. Even when a
single inner function is being returned by an outer function, the output can be wrapped into an object, but that is typically overkill.

We could also have functions inside of the counter function that we don't want to expose to the global (outer) scope. For instance,
we could have a "private" function for logging the currentValue:
*/

function counter(initValue) {
  var currentValue = initValue;

  var logCurrentValue = function () {
    console.log("currentValue = " + currentValue);
  };

  var increment = function (step) {
    currentValue += step;
    logCurrentValue();
  };

  var decrement = function (step) {
    currentValue -= step;
    logCurrentValue();
  };

  return { increment: increment, decrement: decrement };
}

/*
In this case, the logCurrentValue function cannot be accessed from the global scope, since it wasn't returned by the counter function.
It can be used just within the increment and decrement functions, but this function remains private in that it cannot be called externally.

Also, the currentValue and initValue variables are private for the counter function object. In a nutshell, this is how we can emulate
private members in JavaScript -- by restricting access using scope.

I feel an example when we don't want our functions that is inside of the counter function to be exposed or make them Private is when we are dealing
with very sensitive data and for cyber security work.
*/
