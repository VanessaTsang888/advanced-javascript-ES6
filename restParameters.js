/*
Rest parameters:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

Rest and Spread:
https://exercism.org/tracks/javascript/concepts/rest-and-spread

Javascript has a built-in ... operator that makes it easier to work with indefinite numbers of elements. Depending on the context,
it's called either a rest operator or spread operator.

Rest elements
When ... appears on the left-hand side of an assignment, those three dots are known as the rest operator.
The three dots together with a variable name is called a rest element. It collects zero or more values, and stores them into a single array.

*/

const [a, b, ...everythingElse] = [0, 1, 1, 2, 3, 5, 8];

a;
// => 0
b;
// => 1
everythingElse;
// => [1, 2, 3, 5, 8]

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic
// functions in JavaScript.

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

/*
Note that in JavaScript, unlike some other languages, a rest element cannot have a trailing comma. It must be the last element in a destructuring assignment.
The example below throws a SyntaxError:
*/
const [...items, last] = [2, 4, 8, 16]

// Rest properties:
// Similarly to arrays, the rest operator can also be used to collect one or more object properties and store them in a single object.
const { street, ...address } = {
    street: 'Platz der Republik 1',
    postalCode: '11011',
    city: 'Berlin',
  };
  
  street;
  // => 'Platz der Republik 1'
  
  address;
  // => {postalCode: '11011', city: 'Berlin'}