; // [1, 2, 3, 4, 5]
```

## `Array.reduce()`
The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

```js
const numbers = [1, 2, 3, 4, 5];
numbers.reduce((accumulator, number) => accumulator + number, 0); // 15
```

## `Array.reduceRight()`
The `reduceRight()` method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

```js
const meals = ["Falafel", "Hummus", "Pita bread"];
const reversedMeals = meals.reduceRight((reversedArray, item) => {
    reversedArray.push(item);
    return reversedArray;
}, []);

console.log(reversedMeals); // ["Pita bread", "Hummus", "Falafel"]
```

## Methods that mutate the original array

### `Array.reverse()`
The `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```js
const numbers = [1, 2, 3, 4, 5];
const reversed = numbers.reverse();
console.log(reversed); // [5, 4, 3, 2, 1]
console.log(numbers); // [5, 4, 3, 2, 1]
```

### `Array.push()`
The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

```js
const meals = ["Falafel", "Hummus", "Pita bread"];
meals.push("Olives");
console.log(meals); // ["Falafel", "Hummus", "Pita bread", "Olives"]
```

### `Array.pop()`
The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

```js
const meals = ["Falafel", "Hummus", "Pita bread", "Olives"];
const last = meals.pop();
console.log(last); // "Olives"
console.log(meals); // ["Falafel", "Hummus", "Pita bread"]
```

### `Array.unshift()`
The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

```js
const pets = ["Tom", "Jerry", "Spike"];
pets.unshift("Florence");
console.log(pets); // ["Florence", "Tom", "Jerry", "Spike"]
```

### `Array.shift()`
The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

```js
const pets = ["Florence", "Tom", "Jerry", "Spike"];
const first = pets.shift();
console.log(first); // "Florence"
console.log(pets); // ["Tom", "Jerry", "Spike"]
```

### `Array.splice()`
The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
const letters = ['a', 'b', 'c', 'd', 'e'];
letters.splice(2, 1, 30);
console.log(letters); // ['a', 'b', 30, 'd', 'e']
letters.splice(0, 1, 42, 43);
console.log(letters); // ['a', 'b', 30, 31, 'd', 'e']
```

### `Array.slice()` - NON-MUTATING!
The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```
