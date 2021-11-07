/*

 In 2020 - 2021 during The Complete JavaScript Course 2020 - Version 2, I have covered Closures. However, it is now Nov 2021 and I am using Pluralsign to
 refresh my memory on this Javascript concept: https://github.com/VanessaTsang888/theCompleteJS-Course2020

Advanced JavaScript: https://app.pluralsight.com/course-player?clipId=5abbc419-8e49-4070-8770-92c41b362778
   The Closure section which third section: duration 46m 41s. 
   This course was updated in 10-04-2015 which is prety old. Therefore, I have decided to use the: JavaScript Closures:
   https://app.pluralsight.com/guides/javascript-closures
   which was released in Jan 10, 2019.

*/

/*

Summary:
Closures are a very powerful mechanism in the JavaScript programming language. All members of an object in the JavaScript are public by default.
However, the closure mechanism enables objects to have private members and more. In this tutorial, we will learn about closures and the benefits
of using them in your JavaScript code.

Definition:
So, what is a closure? Douglas Crockford, author of the book JavaScript: The Good Parts, used some great examples of the closure mechanism here:
https://www.oreilly.com/library/view/javascript-the-good/9780596517748/ch04s10.html
Vanessa: "I actually have this book."
His definition of a closure is similar to the following:

The closure is an inner function which always has access to the variables and parameters of its outer function, even when the outer function has returned.

Higher-order functions:
Let's consider the following code:

*/

// currentValue is referenced in the increment function which is referenced in the global scope:
// increment being called by reference.

function counter(initValue) {
  var currentValue = initValue;

  var increment = function (step) {
    currentValue += step;
    console.log("currentValue = " + currentValue);
  };

  return increment;
}
// This function is a Closure, and has access to the variables and parameters of its outer function, i.e. increment
var incrementCounter = counter(0);

incrementCounter(1); // This line actually invokes the increment function with parameter 1
incrementCounter(2);
incrementCounter(3);

/*

In the JavaScript language, functions are objects, so they can be passed as arguments to other functions, and they can be returned from other functions
and assigned to variables.

In our example, we have created the counter function, which returns the increment function and assigns it to the incrementCounter variable, so that
variable contains a reference to the increment function (the objects in the JavaScript are being copied by reference, not by value).

That reference enables us to call the increment function outside of the counter function's scope, so in our case, we called it from the global scope.
Besides that, the line var incrementCounter = counter(0); initializes the currentValue variable.

Every call after this, incrementCounter serves as a reference for the inner function (referred to by increment). As such,
the line incrementCounter(1) actually invokes the increment function with parameter 1. Since that function is a closure, it still has access to the variables and parameters of its outer function, although we called it outside of its outer function. Thus, the currentValue will be increased by 1 and its value will become 1. In the subequent function calls, currentValue will be increased by 2 and 3, respectively, so the output of the code will be:

*/

currentValue = 1;
currentValue = 3;
currentValue = 6;

/*

In JavaScript, local variables of a function will be destroyed after the function returns, unless there is at least one reference on them. In our example,
the currentValue is referenced in the increment function, which is referenced in the global scope. Therefore, the currentValue and increment will not be
destroyed until the entire script has executed. That's why we can invoke the increment function from the global scope even after the counter function has
returned; increment is being called by reference because it is stored in the incrementCounter function.

*/
