/**
 * Array.map() method
 * Its super powerfull.
 * How It Works:
 * map iterates of over the items of an array, it executes some logic that we provide  and gives us back a new array.
 * Creates a new array with the results of calling a function for every array elements in order.
 */

/// Example, each of our users have the first name and the last name. We can use the map() method to map out only the firstnames and put them in an
// new array.
// define our  first names variable and use the map() method on the users array. Then we can map out or obtain the first names only.
const users = [
  {
    firstName: "Randle",
    lastName: "McMurphy",
  },
  {
    firstName: "Chief",
    lastName: "Bromden",
  },
  {
    firstName: "Billy",
    lastName: "Bibbit",
  },
];

const firstNames = users.map((user) => user.firstName);
// Will logout: [ 'Randle', 'Chief', 'Billy' ]
console.log(firstNames);
/// Create a new array with only the last names from the users array using the map() method:
const lastName = users.map((user) => user.lastName);
// Will logout: [ 'McMurphy', 'Bromden', 'Bibbit' ]
console.log(lastName);

/// Exercise: Map the array of numbers to an array of square roots.
// Convert these numbers to the square roots of those numbers.
// Square root of a number: the square root of 25 is: 5 x 5 = 21

const numbers = [1, 4, 9, 16, 25];
// Do the operation of square root on each of the number in the numbers array.
// Will logout: [ 1, 2, 3, 4, 5 ]
console.log(numbers.map((num) => Math.sqrt(num)));

// Parameters:
// The callback fn that we are providing to the map() method can accept some other paremeters, i.e.
// the index of the current item that we are interating over, and we can also obtain the original array.

const meals = ["Falafel", "Hummus", "Pita bread"];
// Create new variable called 'meals2', map over each meal, obtain the index of each meal, and obtain the original array:
// logout the original array. Return the index of the meal and the meal itself.
const meals2 = meals.map((meal, index, array) => {
  console.log(array);
  return `${index}.${meal}`;
});
// Logout the new meals2 array created by using the map() method on the original meals array.
// Will logout: [ '0.Falafel', '1.Hummus', '2.Pita bread' ]
console.log(meals2);
// We have iterated over the meals array 3 times to get the index of each element and its name of the element (name of the meal)
// in to our new array 'meals2'

// Exercise: "DOMify" the objects in the array so we have a DOMified verion of our artists array.
// Map to an array of the names in h1s, and the ages in h2s, e.g.
// "<h1>Sharon Van Etten</h1><h2>39 years</h2>"
// Create a DOM string out of each artists object. So from each object grab the name and put in H1 tag, then grab the age and put in H2 tag.
//

const artists = [
  {
    name: "Sharon Van Etten",
    age: 39,
  },
  {
    name: "Florence Welch",
    age: 34,
  },
  {
    name: "Hozier",
    age: 30,
  },
];
// iterate over each artist using the map() method and for each of them we will have a H1 tag with the name of the artist. Then H2 with the age of the
// artist. Then printout the new array called: domifiedArtists.
const domifiedArtists = artists.map(
  (artist) => `<h1>${artist.name}</h1><h2>${artist.age}</h2>`
);
// Logout the new variable 'domifiedArtists' that has the DOM String.
// This is the new array - the DOMified of version of our original array.
// Will logout:
/*
'<h1>Sharon Van Etten</h1><h2>39</h2>',
  '<h1>Florence Welch</h1><h2>34</h2>',
  '<h1>Hozier</h1><h2>30</h2>'
*/
console.log(domifiedArtists);
