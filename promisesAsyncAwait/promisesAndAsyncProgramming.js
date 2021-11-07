/*

In 2020 - 2021 during The Complete JavaScript Course 2020 - Version 2, I have covered Promises, Async/Await. However, it is now Nov 2021 and
I am using Pluralsign to refresh my memory on these Javascript concepts: https://github.com/VanessaTsang888/theCompleteJS-Course2020

JavaScript Promises and Async Programming: https://app.pluralsight.com/library/courses/javascript-promises-async-programming/table-of-contents
Duration 1h 21m | Released 26-11-2019
This course is a bit old and I've spoken to colleagues and they advised me that it is still worth doing.

*/

/*

S1. Course Overview: 1m 14s:
Will cover:
-> Asynchronous programming
-> Consuming & creating promises
-> Using Asyn/Await in JavaScript
By end of course I'll know how to work with promise-based libraries, as well as how to wrangle asynhronous code by creating your own promises.


S2: Understanding Promises: 14m 43s:
-> Understanding Promises:
-> Building a Callback Pyramid:
-> Why is the Pyramid bad?:
-> Solving the Callback Pyramid:
-> Setting up the sample project:

-> Understanding Promises:
Yes promises make things better but not simple. A common problem is fetching data and how that it's asynchronous throws a wrench into the whole system.
The code on demo page: not sure we actually had the data we needed when we needed it.

-> Building a Callback Pyramid:
Dealing with APIs can lead to uncertainty. A technique that we can use to ensure that we have all data we need before we use it.
Perform roughly same call, but this time can ensure have our ourder statuses defined before we try to access them.
The 'Callback Hell' btn -> with this btn the orderStatuses are returned before the orders data is returned to ensure we have our data.
How?: Our xhr2 is defined inside the xhr onload function. So we are waiting until the data of our first call came back before we attempt to make our
second call. By doing this we ensured we have all data that we need for our second API request. However, it comes at a cost as our second call is
buried inside the success of our first call -> nesting functions in this manner can cause problems -> 2 problems we can run into -> next cli[.]


Consuming Promises:
As per last clip, one way to solve the race condition problem is to use 'Callbacks' and functions inside of other functions. This can introduce
another problem: The Callback Pryramid of doom.

Wikipedia.org:
A common problem that arises when a program uses many levels of nested indentation to control access to a function.
It's called the Callback Pyramid of Doom as - Example: Why Pyramid?

*/

// callbacks.js

a("test", (err, aResult) => {
  blur(aResult, (err, bResult) => {
    c(bResult, (err, cResult) => {
      d(cResult);
    });
  });
});

/* 

It gets this name from the indentiation on the left -> just on the right, it looks like a Pyramid.
What makes this a Pyramid of Doom and not just a pyramid or why is this bad?
First, makes dirtieer code and exposes me to more errors. The above code will get more complex and we still need to process what's 
happening every time we read it. Can make simple mistakes.
Second problem with pyramiding code like this is handling errors. It is right to handle the 'onerror case' but that would make our code even
messier as will have a lot more code in our onload functions, and we're making the first problem even worse. Now we're handling errors inside
of a success function, which can lead to anther series of messy decisions in how to write code. So how to solve this problem without introducing
a new problem or how to write code so that it executes in order witout massive nesting of functions?


*/

/*

-> Solving the Callback Pyramid:
Use Promises:
    checkout: developer.mozilla.org
Promise is Object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

An object that helps with 'asynchronus operation' whcih is what we've been trying to deal with.
When a promise is called, it may or may not have a value. The value may come instantly or some time in the future?
Promises allow developers to write asychronous code in a more clear and less error-prone manner.
This make our code more readable.

Promise States:
A promise can have 3 states:
S1: pending -> the initail state, when you first create a promise, its in the pending state.
The call is happening, the promise is pending.
S2: Fulfilled -> moved from from Pending to fulfilled state when the async call has completed successfully. So will return a single
value i.e. a specific order from an API.
S3: Rejected -> moves from pending to rejected state when the asyc call has failed and will return a reason why it was rejected, similar
to the catch function in a try-catch block.
We may hear that a promise is settled, or resolved. Both are referring to the same state: either in the fulfilled or rejected state - no
longer pending.
How do we get a value out of a promise? Note: promises do not wait for us to request the value before they execute. Let's see them in
practice in next clip.

Setting up the sample project:
We'll be accessing an API used by Carved Rock Fitness. Their API allows them to create, track and ship out to their customers.
API Entities: Addresses, Items, Orders, Users, ItemCategories, OrderStatuses.
Used to check on the status of an order, or determin where the orders been shipped to.
Clone github repo: github.com/taylonr/async-programming-promises
Apart from the master branch there are 4 other branches:
1. consuming-promises
2. creating-promises
3. iterating
4. understanding-promises

continue from 1:25

*/

/*

Creating and Queuing Promises:


*/

/*


Iterating with Asyn/Await:

*/
