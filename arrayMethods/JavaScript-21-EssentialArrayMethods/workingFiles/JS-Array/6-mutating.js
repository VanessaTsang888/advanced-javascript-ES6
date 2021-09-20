/**
 * Mutating methods: The original array is mutated, modified or changed on execution.
 * Mutates the original method rather than return a new array.
 *
 */

// Array.reverse()
// This will reverse the order of the numbers of the array.
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();
// Will logout: [ 5, 4, 3, 2, 1 ]
console.log(numbers);

// Array.fill() is also a mutating method - we learnt this from the first task.

// Array.push(), Array.pop()
const meals = ["Falafel", "Hummus", "Pita bread"];
// Array.push() will push a new element to the end of the array.
// Example, push olives at end of array.
meals.push("Olives");
// Will logout:  'Falafel', 'Hummus', 'Pita bread', 'Olives' ]
console.log(meals);
/// Array.pop() will remove the last element from array and returns it so we can assign it to a new variable.
// Use Array.pop() 3 more times and will leave us with an empty array.
const last = meals.pop();
// [ 'Falafel', 'Hummus', 'Pita bread' ] Olives
console.log(meals, last);

// Array.unshift(), Array.shift()
// Append an item to the beginning of the array and remove items from the beginning of array
const pets = ["Tom", "Jerry", "Spike"];
// Append a new item at the beginning of array:
pets.unshift("Stanimira");
console.log(pets); // [ 'Stanimira', 'Tom', 'Jerry', 'Spike' ]
// Array.shift() returns the variable that it removes so we can assign it to a variable:
const first = pets.shift();
console.log(pets); // [ 'Tom', 'Jerry', 'Spike' ]
console.log(first); // Stanimira

/// Array.splice()
// Used for replacing values in an array.
// specify the starting index we want to replace,  2 items from the first index, then delete 2 items, and we can insert any arbitrary values.
const letters = ["a", "b", "c", "d", "e"];
// Will remove 2 elements starting from the first index of 0. Then in place it adds 3 items: first, second, thrid.
letters.splice(0, 2, "first", "second", "third");
// Will logout: [ 'first', 'second', 'third', 'c', 'd', 'e' ]
console.log(letters);

/// Array.slice() - NON-MUTATING!
const animals = ["ant", "bison", "camel", "duck", "elephant"];
// To slice part of an array, i.e. start slice from index 2 onwards. This will give us a new array with "camel" and "duck".
// We must specify the index number of where we want to start the slice.
// Will logout: [ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
