/*

Destructuring in JavaScript ES6:

Resources:
ES6: The Right Parts -> Destructuring: https://app.pluralsight.com/library/courses/es6-the-right-parts/table-of-contents

Audience Q&A: TypeScript vs JavaScript:
The declaative form versus the imperative form:
Destructuring feature is the most complex as there is lots of steps to learn.
The best of CoffeeScript made it into ES6. 

ARRAY DESTRUCTURING:

*/

/* 
A function named foo that returns an arry.
We want to consume that value in some other part of the programme.

We need to individually reference different values, we want lexical names to reference like a, b, and c.
So create a temp variable then creating individual assignments. This practice is Destructuring.
Take a structure like an Object or an Array and deconstruct it down into its constituent parts through assignment. So Destructuring is really an
assignment operation. This the imperative version.

A declarative form of this destructing assignment;
Array destructuring.
*/

// Imperative:
function foo() {
  return [1, 2, 3];
}

var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];

/* A declarative form of this destructing assignment;
 Array destructuring:
 declare something that looks like an array but not an array. Inside we list out things we want to assign.
 An array is always a source of assignment as its a value but this isn't an array, its an Pattern.
 We are saying: we are expecting an array with 3 values and would like JS Engine to take that value deconstruct it down to its individual parts and take
 the first item in the array and assign it to 'a', take the item in the second position and assign it to variable b, etc.

*/

// Declare a ncice clean pattern -> Declarative:

function foo() {
  return [1, 2, 3];
}

/* A declaration for pattern assignment. When we have more than three elements we want to put them on different lines.
 White space and new lines are good for readability.
 We are saying go break these things down and assign them.
 Its ok to get back more values than what we account for. So the pattern what need to be a fully and inclusive pattern, it can be a partial pattern for
 stuff we care about.
 Use white space and new lines to make my code base more readable.
 We are saying: put value 1 into the place of a, etc.
 Declare a nice clean pattern that says: this is the shape of stuff I'm expecing to get back and if I get something that matches the shape, I want you to
 make these assignments.

*/
let [a, b, c] = foo();

/*
Destructuring and Default Value:

Define a default value in case we don't get back anything so we don't need to do the undefined checking stuff which is long winded.
Just add a value to a variable to give it a default value:

*/

function foo() {
  return[1];
}

let [a, b = 42, c] = foo(); // I've given variable 'b' a default value.



/*
Dumping Variables:


*/



/*
Object Destructuring:

*/

// ES5 Version:

function foo() {
  return { a:1, b:2, c:3};
}

var temp = foo();
var a = tmp.a;
var b = tmp.b ! == undefined ? tmp.b : 42;
var c = tmp.c;

// ES6 Version: Object Pattern:
// I want the a property to be targeted to ..
// 1:06
function foo() {
  return { a:1, b:2, c:3};
}
// Go get the property of name 'a' and assign it to a lexical variable called 'a'.
// With Object literals, the property name is always on the left, with Object destructuring the property name is always on the left.

let {
  a: a,
  b: b,
  c: c
} = foo();

// Where target and source are the same, we don't need to do any alias or renaming, we don't need to specify them twice.
let {
  a,
  b,
  c
} = foo();

// We can reassign a property to a different variable called 'X':
// Now the 'X' is the target not the source.
// Can have default value assignments, i.e. a = 10,
// If we return something that is not an Object, could get failure here. So put a guard here: empty object to be destrucutred
// If our pattern don't account for a property, that property just doesn't get worried about.
// If our patter accounts for a property that don't exist, we end up getting a variable that's just undefined as we accessed the 'd' on an object
// and it didn't have one.

let {
  a = 10,
  b: X = 42,
  c
} = foo() || {}; // Provide a default as must return something that is an object case something falsey came back.

/*
Nested Object Destructuring:
we can do nested object destructuring as we can do nested array destructuring


*/

function foo() {
  return { a:1, b:2, c:3,
      d: {
          e: 4 // 'e' variable assigned to value of 4.
      }
     };
}
// 'd' -> now instead of lexical variable for it to be targeted at, now need a destructuring pattern for it to be targeted at using a set of braces
// Can't do it with arrays but with objects we can account for variable 'd' a number of times: we can multiple account for a property.
// If we try to destructure an undefined structure/value we will get an exception case. Therefore, we need a provide a default
let {
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: { // start of destructuring pattern
    e
  } = {} // Empty object to be destructured used as the source of the destructuring. The value to be destructured.
} = foo() || {};

// If we try to destructure an undefined structure/value we will get an exception case. Therefore, we need a provide a default
let {
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: { 
    e
  } = {} // provide a default incase of a undefined value -> if 'd' don't exist.
} = foo() || {};

// A pattern that comes from some value somewhere, 8:10
// { a: X  = 2 } = ..

// We can do an array inside of an object:

let {
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: [ 
    e
  ] = [] // if you want a hard failure then leave off this default but most of the time we don't want this. Get a linter rule to force this in everytime.
} = foo() || {};

// This is an object destructuring not a block lable: use a pair of parenthise:
({
  a = 10,
  b: X = 42,
  c,
  d: X,
  d: Z,
  d: [ 
    e
  ] = []
} = foo() || {});

/*
Destructuring and Functions Parameters:
Functions that have that takes 3 or more arguments, switch it to an object destructuring so that people can name their arguements instead.

*/

function foo( {a, b, c} = {} ) {
  console.log(a, b, c);
}

foo( {
    a: 1,
    b: 2,
    c: 3
});



/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Destructuring assignment:

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects,
into distinct variables.
*/

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

// Syntax:
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Description:
// The object and array literal expressions provide an easy way to create ad hoc packages of data.
const x = [1, 2, 3, 4, 5];

// The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

// Similarly, you can destructure arrays on the left-hand side of the assignment
const [firstElement, secondElement] = list;
// is equivalent to:
// const firstElement = list[0];
// const secondElement = list[1];

/*

Examples: Array destructuring
Basic variable assignment:

*/
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// Assignment separate from declaration
// A variable can be assigned its value via destructuring, separate from the variable's declaration.
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// In an array destructuring from an array of length N specified on the right-hand side of the assignment, if the number of variables
// specified on the left-hand side of the assignment is greater than N, only the first N variables are assigned values. The values of the
// remaining variables will be undefined.
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined

/// Default values:
// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

/// Swapping variables
// Two variables values can be swapped in one destructuring expression.
// Without destructuring assignment, swapping two values requires a temporary variable.
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
// I don't understand how the managed to get between the 1 and 2? I will ask my mentor this afternoon.

/*
Parsing an array returned from a function
It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

In this example, f() returns the values [1, 2] as its output, which can be parsed in a single line with destructuring.
*/

function f() {
  return [1, 2];
}

let a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

/// Ignoring some returned values.
// You can ignore return values that you're not interested in:
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1

// You can also ignore all returned values:
[,,] = f();

/// Assigning the rest of an array to a variable:
// When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern:
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

///  Unpacking values from a regular expression match
// When the regular expression exec() method finds a match, it returns an array containing first the entire matched portion
// of the string and then the portions of the string that matched each parenthesized group in the regular expression.
// Destructuring assignment allows you to unpack the parts out of this array easily, ignoring the full match if it is not needed.
function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
  // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// "https"

/*
Object destructuring: 
Basic assignment:
*/

// Declaring the variable 'user' with const. Assigning user to an object with two properties that has its own values.
const user = {
  id: 42,
  isVerified: true
};

// Destructuring: unpacking the values from the properties and put them into distinct variables:
const {id, isVerified} = user;
// Logging out each variable to get its value:
console.log(id); // 42
console.log(isVerified); // true
// Is my comments above correct?

/// Assignment without declaration.
// A variable can be assigned its value with destructuring separate from its declaration.
/* 
Note: The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration. 

{a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.

However, ({a, b} = {a: 1, b: 2}) is valid, as is const {a, b} = {a: 1, b: 2}

Your ( ... ) expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line.
*/

let a, b;
// This is object literal without a declaration hence the set of parenthises:
({a, b} = {a: 1, b: 2});

/// Assigning to new variable names:
// A property can be unpacked from an object and assigned to a variable with a different name than the object property.
const o = {p: 42, q: true};
// foo, bar are the new property names:
const {p: foo, q: bar} = o; 
// Logout the values of the new property names.
console.log(foo); // 42
console.log(bar); // true

/// Default values:
// A variable can be assigned a default, in the case that the value unpacked from the object is undefined.
// This is similar to Array Desructuring.
const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5

/// Assigning to new variables names and providing default values:
// A property can be both
// Unpacked from an object and assigned to a variable with a different name.
// Assigned a default value in case the unpacked value is undefined.

const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5

/// Unpacking fields from objects passed as a function parameter: 
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

// This unpacks the id, displayName and firstName from the user object and prints them:
function userId({id}) {
  return id;
}

function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"

/// Setting a function parameter's default value:
/* 
Note: In the function signature for drawChart above, the destructured left-hand side is assigned to an empty object literal on the right-hand side:
{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}.

You could have also written the function without the right-hand side assignment.
However, if you leave out the right-hand side assignment, the function will look for at least one argument to be supplied when invoked,
whereas in its current form, you can call drawChart() without supplying any parameters. The current design is useful if you want to be able to
call the function without supplying any parameters, the other can be useful when you want to ensure an object is passed to the function.
*/

function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: {x: 18, y: 30},
  radius: 30
});

/*
Nested object and array destructuring:
*/
// The de object is inside of the translations array that is inside of the metadata object.
const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung'
    }
  ],
  url: '/en-US/docs/Tools/Scratchpad'
};
// 
let {
  title: englishTitle, // rename
  translations: [
    {
       title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

/// For of iteration and destructuring:
const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

/// Computed object property names and destructuring:
// Computed property names, like on object literals, can be used with destructuring.
let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"

/// Rest in Object Destructuring:
// The Rest/Spread Properties for ECMAScript proposal (stage 4) adds the rest syntax to destructuring.
// Rest properties collect the remaining own enumerable property keys that are not already picked off by the destructuring pattern.
let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

/// Invalid JavaScript identifier as a property name:
// Destructuring can be used with property names that are not valid JavaScript identifiers by providing an alternative identifier that is valid.
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"

/// Combined Array and Object Destructuring:
// Array and Object destructuring can be combined. Say you want the third element in the array props below, and then you want the name property
// in the object, you can do the following:
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name); // "FizzBuzz"

/// The prototype chain is looked up when the object is deconstructed:
// When deconstructing an object, if a property is not accessed in itself, it will continue to look up along the prototype chain.
let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
// self "123"
// prot "456" (Access to the prototype chain)











