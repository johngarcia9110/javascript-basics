// Values and Types

// This section does not cover all values or types in JavaScript but rather serves as an example/explination of why they matter.

var a = 42;
var b = "42";

// to us these values both mean 42, to the computer the value of these variables do mean very different things.

//The value of var a is a number (can use math)
//The value of var b is a string  (can't use math)

// numbers have different behaviors than strings do.

//Example:

console.log(b[0]); // "4" strings can be accessed character by character.
console.log(a[0]); // undefinded

// If we wnated to use the value of "a" and access the first char, we would have to first convert it to the type of "string"

 a = a.toString();
console.log(a[0]); // 4

// We can do the same conversion with strings to turn them into numbers

b = parseInt(b);
console.log(b); // 42 as a number

// the console will output numbers in blue and strings in black

// We can also coerce a number to a string

a = 42;

a = a + "";
console.log(a); // 42 (black text)
