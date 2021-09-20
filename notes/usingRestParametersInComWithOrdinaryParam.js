// /*
// Using rest parameters in combination with ordinary parameters
// In the next example, a rest parameter is used to collect all parameters after the first parameter into an array.
// Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:

// 2 x 15 = 30
// 2 x 25 = 50
// 2 x 42 = 84

// theArgs is an array of 3 elements: 15, 25, 42. The map method is looping over them, doing the maths, and putting each one into
// an accessible variable called 'elements' for me to work with.

// How do I run this from this IDE?

// */

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => {
    return multiplier * element;
  });
}

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]

// /*
// Rest parameters are real arrays; the arguments object is not.
// Array methods can be used on rest parameters, but not on the arguments object:

// */

// function sortRestArgs(...theArgs) {
//   let sortedArgs = theArgs.sort();
//   return sortedArgs;
// }

// console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

// function sortArguments() {
//   let sortedArgs = arguments.sort();
//   return sortedArgs; // this will never happen
// }

// console.log(sortArguments(5, 3, 7, 1));
// // throws a TypeError (arguments.sort is not a function)
