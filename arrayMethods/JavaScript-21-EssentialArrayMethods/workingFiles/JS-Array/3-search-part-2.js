/*

Search methods on arrays:

Array.some()
Array.every()
Array.indexOf()
Array.lastIndexOf()
Array.

*/

const myPets = [
  {
    name: "Vanessa",
    type: "cat",
  },
  {
    name: "Ken-Simon",
    type: "cat",
  },
  {
    name: "Tom",
    type: "cat",
  },
  {
    name: "Jerry",
    type: "mouse",
  },
  {
    name: "Sparky",
    type: "dog",
  },
];
/// The some() method checks if there is a least one element that matches the condition:
/// Check if there is a pet that matches a certain condition inside our array, i.e. check if there is a cat in the array.
// Create a helper function called isCat. We know is a pet is a cat if a type is equal to 'cat'.
// Use the some() method on our myPets array to check if there is some pet that is a cat.
// We are looking for a cat in our myPet array by using an Arrow Function and then to store the result into the isCat variable on the left of the equals
// operator.
const isCat = (pet) => pet.type === "cat"; // true

// Printout what ever the isCat variable is storing.
console.log(myPets.some(isCat)); // true

/// Using the every() method to Check if every single element matches the condition that we given it.
// Check if every pet is a cat.
console.log(myPets.every(isCat)); // false // we have different types of pets not just cat.

/// Exercise 1:
// 1. Check if there is at least one prime number in the numbers array.
// 2. Check if all numbers in the array are prime.

const numbers = [2, 4, 6, 8, 10];
// The instructor is wrong as this do not check for prime numbers but even numbers.
const isPrime = (num) => num % 2 === 0;
console.log(numbers.some(isPrime));
console.log(numbers.every(isPrime));

/// Check if a number is odd:
const isOdd = (num) => num % 2 !== 0;
console.log(numbers.some(isOdd)); // false
console.log(numbers.every(isOdd)); // false

//// Array.indexOf(), and the Array.lastIndexOf() methods:

const meals = ["Falafel", "Hummus", "Pita bread", "Falafel"];
// Check which index is Falafel located in. Will print out '0' as Falafel is located in the first location of the array.
// we can specify a second argument - a value that we are looking for and the index we are searching from, i.e. if we specify '1' we will
// skip location 0 and start from location 1 and do the check from there. Will printout '3' as that is the index that matches the first Falafel
// starting from index 1.
console.log(meals.indexOf("Falafel")); // 0
console.log(meals.indexOf("Falafel", 1)); // 3
/// lastIndexOf() method
// This will start searching from the last element on the right. Will printout '3' as the first 'Falafel' we get is in location '3'.
console.log(meals.lastIndexOf("Falafel")); // 3
// Specify an index where we want to start searching from. We will start searching from index 1 and move to the left until we get the String 'Falafel'.
// Will printout: 0
console.log(meals.lastIndexOf("Falafel", 1)); // 0
