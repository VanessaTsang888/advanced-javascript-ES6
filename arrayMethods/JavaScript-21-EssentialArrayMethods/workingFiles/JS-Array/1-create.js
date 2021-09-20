/**
Creating an array:

There are different ways to writing an array:
1. Array literal notion
2. Array contructor
3. Array.from()
4. Array.of()
5. Array.fill()

The first way is using the array literal.
We can put any types of values inside our array like Numbers, arrays, etc.

The second way to declare an array is to use the array constructor, using the
new keyword.


**/

//Using an array literal to declare an array:
// Define the name of the array, use a set of square brackets, inside type my comma-separated values.
// Execute the code: top menu: Run -> Start Debugging
const meal = ["Falafel", 2, ["1", 3], "Hummus", "Pita bread"];
// Logout the meal variable to display my meal array:
console.log(meal); // ['Falafel', 'Hummus', 'Pitta bread']

// using an array constructor to declare an array:
const meal2 = new Array("Falafel", "Hummus");
// Printout the meal2 array:
console.log(meal2); // ["Falafel", "Hummus"]

// This will not create an array with a single elment of the number 7. Instead
// Instead of a single elment we'll get 7 empty items:
// we have an array with space for 7 differnt items but the array is empty.
const numbers = new Array(7);
// Access the first element in the array use square brackets and specify the index for the first
// element which is 0. It will be undefined as we don't have anthing there yet.
// console.log(numbers[0]); // undefined
console.log(numbers); // Array(7) []

// Using Array.from to declare an array:
// Specify an array, like a collection inside the parenthises, i.e. another array.
// Modify the values and specify a callback function using an arrow function. Iterate
// every  and double it
const numbers2 = Array.from([1, 2, 3], (num) => num * 2);
console.log(numbers2); // Array(3) [1, 2, 3]

// Using the Array.of method to declare an array:
// We don't need the square brackets, just input the values we want separaged with commas.
const numbers3 = Array.of(1, 2, 3, 4, 5);
console.log(numbers3); // [ 1, 2, 3, 4, 5 ]

/**** I'm not able to execute the Array.of code - error: No debug found. Can not send 'variables'.
// Continue from 06:08.
// https://rhyme.com/run/6LYNMNGSTP3YHO52HDR7
// Can't find what I need from this link.
// Solution - work around:
// Terminal at the bottom forth tab -> ls, cd Documents, ls, cd JS-21EssentialArrayMethods -> node 1-create.js
 *****/

// This array with 7 slots to be filled with values.
const numbers4 = new Array(7);
console.log(numbers4); // [ <7 empty items> ]
// Assign the value 1 tothe first location of the array:
numbers4[0] = 1;
// In the first location is the value 1. Then 6 empty slots for other values.
console.log(numbers4); // [ 1, <6 empty items> ]

// Once of the ways to fill the 7 items or slots is to assign a value to each location of the array.
// This modifies or mutates the original array - its called  mutating methods. Need to specify the value we want inside of the array.
numbers4.fill(42);
// this gives us 7 elements of the number 42.
console.log(numbers4); // [42, 42, 42, 42, 42, 42, 42]
// We can specify the exact location we want to fill.
// If we want to specify the frist, the second and the last index to fill.
numbers4.fill(5, 0, 2);
console.log(numbers4); // [5,  5, 42, 42, 42, 42, 42]
// Issues: I'm expecting this: [5,  0, 42, 42, 42, 42, 2] // and not the above.

/*
Explaination from Sir;
The first number of the fill method is the value that will be used in the array; so when we say fill(5, 0, 2)the number 5 will replace
the first two elements in the array.

0 is the starting index in the array and 2 is the end index, which means elements 0 and 1 will be replaced with the value 5

Given the arr is [42, 42, 42, 42, 42]

If we then said arr.fill(5, 2) we will get [42, 42, 5, 5, 5]

As we didn't specify the end index in this example, we use the number 5 to replace the elements starting from the third element
(i.e., start index - 1 because we count from zero) and all the way to the end of the array

If we specify the end index, only that many elements will be replaced.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

*/

/*
Issue:
Error: You've used the cloud workspace in this session for too long. You will no longer be assigned a cloud workspace.

*/
