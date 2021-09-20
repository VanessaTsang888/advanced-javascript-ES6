/*

Array.reduce()
This method receives a fn that has an 'accumulator' and values and arguments. Then it applies the fn to the 'acc'
and each value in the array and returns just a single value.

Example, for the below array, it iterates through each element uses that to modify the 'acc' value, and then produces
just a single value from that. Use Array.reduce() to get the sum of all the elements in the array/ reduce them all into one single value
which is the sum of all the elements added up together.
We receive an acc which is will be the sum of the element(s) that we have so far, the current number. Then we return the sum of the acc
plus the next number.
We start with acc 0, we have the first number which is 1, sum that 1 with 0. Next iteration we have the acc of 1, and the number 2
which is the second element, we sum these and we have 3. Then we iterate over to the third element which is also 3, so we have 3 + 3 which
is 6. Then we have an acc of 6 and the value of 4 which is the fourth element, sum that and we have 10. Finally, we have the acc of 10 and the
last element in the array which is 5, so the sum or resulting of that is 15.

*/
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, number) => accumulator + number);
console.log(sum); // 15
// We specify our first value, i.e. 10
// So if we start with 10, our resulting value will be 25 as our initial value is 10.
// If we execute an empty array we will get an type error: TypeError: Reduce of empty array with no initial value.
// but if we put in an initial value of 0, we will get 0 logged out. So always set an initial value:
// const sum = numbers.reduce((accumulator, number) => accumulator + number, 10);

/* 

Exercise:
Join the array elements into a comma-separated string.

*/
const pets = ["Tom", "Jerry", "Spike"];
const petsText = pets.reduce((acc, pet) => `${acc}, ${pet}`);
// Will logout: Tom, Jerry, Spike
console.log(petsText);

/*

Array.reduceRight()
If we want the same petsText String but in the opposit order, we can use the Array.reduceRight() method.
Will iterate from the last element to the first element.

*/
const petsText2 = pets.reduceRight((acc, pet) => `${acc}, ${pet}`);
// Will logout: Spike, Jerry, Tom
console.log(petsText2);

/*

Exercise:
Create a new array that is the same as the original array but in the reverse order.
Reverse the array by using Array.reduceRight.
Set the initial value as an empty array. Push the current item into the reersedArray/ add new item to the end of the array using the push() method.
Then return the reersedArray

*/
const meals = ["falafel", "Hummus", "Pita bread"];
const reversedMeals = meals.reduceRight((reversedArray, item) => {
  reversedArray.push(item);
  return reversedArray;
}, []);
