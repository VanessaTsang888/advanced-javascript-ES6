/*
Rest parameters:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

*/

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic
// functions in JavaScript.

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    // local variable only accessable within this block
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

/// Syntax:
function f(a, b, ...theArgs) {
  // ...
}

/// Description:
// A function definition's last parameter can be prefixed with "..." (three U+002E FULL STOP characters), which will cause all remaining
// (user supplied) parameters to be placed within a "standard" JavaScript array. Only the last parameter in a function definition can be a rest parameter.
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

// Quick reference:
// A function definition can have only one ...restParam.
// The rest parameter must be the last parameter in the function definition:
foo(arg1, arg2, ...correct);

/*
The difference between rest parameters and the arguments object:
There are three main differences between rest parameters and the arguments object:
1. The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort, map, forEach or pop can
be applied on it directly;
2. The arguments object has additional functionality specific to itself (like the callee property).
3. The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the
 ...restParam. Whereas the arguments object contains all of the parameters -- including all of the stuff in the ...restParam -- unbundled.

Examples: Using rest parameters:
In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.

However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth ... nth — as many arguments that the user includes.
*/

function myFun(a, b, ...manyMoreArgs) {
  // named arguments and array instance that contains multiple arguments.
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- notice it's an array

// Below, even though there is just one value, the last argument still gets put into an array:
// using the same function definition from example above

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- notice it's an array, even though there's just one value

/// Argument length
// Since theArgs is an array, a count of its elements is given by the length property:
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3

/* 
Using rest parameters in combination with ordinary parameters.
In the next example, a rest parameter is used to collect all parameters after the first parameter into an array.
Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

2 x 15 = 30
2 x 25 = 50
2 x 42 = 84

theArgs is an array of 3 elements: 15, 25, 42. The map method is looping over them, doing the maths, and putting each one into
an accessible variable called 'elements' for me to work with.

The annous arrow function is part the map method.

*/
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => {
    return multiplier * element;
  });
}

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]

// To use Array methods on the arguments object, it must be converted to a real array first.
function sortArguments() {
  let args = Array.from(arguments); // converting in to an array.
  let sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7
