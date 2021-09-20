/**
 * Searching in side of arrays - part 1 -> search methods:
 *
 * I've watched this video but not used the Cloud Workspace to code with the lecture as I'm not able to get access to that space.
 * I think I can do it here but then may be its best for me to move on to the next JS Guided Project?
 */

//// Array.includes(), Array.find(), Array.findIndex()
// includes() method allows us to find specific item that we are looking for in our array.
const meals = ["Falafel", "Hummus", "Pita bread"];
// Use the includes() method to search for: Falafel.
// Will logout 'true' as we have the item 'Falafel' in our collection/array.
console.log(meals.includes("Falafel")); // true
console.log(meals.includes("chips")); // false
// Check if we have Falafel after the first index. Will logout false as we don't have Falafel after the first index.
console.log(meals.includes("Falafel", 1)); // false

// Using the Array.find() method to search to a meal starting with the letter 'H'.
// Need to provide a callback fn which will be executed on each item and going to give the first item that matches the condition we give it.
// Condition: we want our meal to start with 'H' and our fn will output true or false.
// If we search for an item that's not in our array, will logout: undefined. Example: 'L' as we don't have any items that starts with 'L'.

// This find() method used below is also a callback function as it expects a function as a parameter: find(meal) => {...}
// This single parameter which is a cllaback function is executed against each element in the array.
// startsWith() is a method on each String on the array called: meals
//
const mealStartingWithH = meals.find((meal) => {
  return meal.startsWith("H");
});
// Print the variable.
console.log(mealStartingWithH); // Hummus

// Using the Array.findIndex() method to search for the index of a character.
const mealStartingWithHIndex = meals.findIndex((meal) => {
  return meal.startsWith("H");
});
// I expect: 1
console.log(mealStartingWithHIndex); // 1

// Exercise 1: Use the find() method to find the first number that is bigger than 10 and print it using console.log() :
const numbers = [3, 7, 12, 9, 15, 1];
// 12 is the first number that is bigger than 10:
console.log(numbers.find((num) => num > 10)); // 12

// Use the Array.filter() method to filter out all numbers that is greater than 10:
// Will filter out specific values that we want and give us a new array with only those filtered values.
const numbersBiggerThanTen = numbers.filter((num) => num > 10);
console.log(numbersBiggerThanTen); // [ 12, 15 ]

/* Exercise 2: 
This is an array of objects. Each have a name and an age.

Create a new array with people older than 18.

*/

const people = [
  {
    name: "Tom",
    age: 15,
  },
  {
    name: "Stanimira",
    age: 23,
  },
  {
    name: "Jessica",
    age: 30,
  },
];

const peopleOlderThan18 = people.filter((person) => person.age > 18);
console.log(peopleOlderThan18);
