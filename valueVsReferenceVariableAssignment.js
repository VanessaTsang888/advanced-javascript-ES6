/*

1 - Reference Vs Value In JavaScript:
https://youtu.be/-hBJz2PPIVE

PASS BY VALUE:

When we set a variable to a value that is any of the basic primitive types/value, i.e. a number, a string, a Boolean, we are using passing
by value or setting a variable by value. That means the value is going to be set to an actual value.

JS will copy the value from the right-hand-side and store it in the variable on the left hand side of the equals operator.

save the value of 11 to the variable 'c'.

Variable 'c' is set to value of 11 and variable a is set to value of 10 as its set to not reference to meaning these are two different values.
So when we update variable 'c' we are not touching variable 'a' since that points to (referenced to) its own value of 10 and the two variables
are completely distinct from each other. 

*/

let a = 10;
let b = "Hi";
c = a;
c = c + 1; // save the value of 11 from the right hand side of the equals operator to the variable c on the left hand side.

/* 

PASS BY REFERENCE:
3:58
Setting variable 'c' to an array is going to be pass by Reference as arrays and objects are not primitive types.
So we are storing a reference to that object (array) which is just a memory address so some place inside the memory of your computer.
So variable 'c' just stores a reference of: <0x01> to that that address: 0x01.
We are still storing that value but storing it inside of the memory address: 0x01.
So the variable 'c' is pointing to that address: 0x01.
When you called variable 'c' you will get the value/object of array but the memory itself is only storing the reference to that memory address.
Variable 'd', we take a copy of the reference from variable 'c' and store it in variable 'd'.
So both variable 'c' and 'd' point to same memory address or refereence same piece of memory.
6:44


Variable	Value	    Address	    Value
a	        10		
b	        "Hi"		
c	        <0x01>	    0x01	    [1,2, 3]
d	        <0x01>		
			

			



*/

let a = 10; // a number -> primiative type -> pass by value
let b = "Hi"; // a string -> primitive type -> pass by value
let c = [1, 2]; // an object -> pass by reference -> just a memory address: 0x01 -> Value: [1, 2]
let d = c;
// Add a new variable. Adding the element 3 to our array, it changing both 'c' and 'd' as they point to the same address
// d.push(3); // [1, 2,3]
d = [3, 4, 5]; // reference: <0x02>. Memory address: 0x02. Will not affect 'c'.

console.log(`a = ${a}`); // a = 10
console.log(`b = ${b}`); // b = Hi
