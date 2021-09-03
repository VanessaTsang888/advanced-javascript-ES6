/* 

4 - Spread Syntax (The Spread Operator):


Spread Operator: x3 periods or dots then the elements -> let nums2 = […nums1, 4, 5, 6]
Use this syntax instead of concatenate arrays in front of an array or an iterable object where we want to spread elements into its individual components.


https://youtu.be/1INe_jCWq1Q
1:36
The instructor is declaring the variable nums1 with var rather than let or const which is wrong as var is ES5 not ES6.

*/

// When to use the Spread Operator:
// 1 - When we need to add the elements from one array into another array. Example:

window.onload = function () {
  let nums1 = [1, 2, 3];
  let nums2 = [...nums1, 4, 5, 6]; //  [1, 2, 3, 4, 5, 6]

  consol.log(nums2);
};

// 2 - We have a function and want to return the elements inside of the nums array all added up to one single number:

window.onload = function () {
  let nums = [3, 5, 7];
  function addNums(a, b, c) {
    console.log(a + b + c);
  }

  addNums(...nums); // 15
};

/*

Exercism: Rest and Spread:
https://exercism.org/tracks/javascript/concepts/rest-and-spread


*/
