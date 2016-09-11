// Functions

/*
    A function is a way to logically group a piece of code together (like a block) but also makes that block of code something that you can call more than once.

*/

// Example Function:

function printAmount(){
    console.log( amount.toFixed(2) ); // to fixed formats a number to a string that has exactly 2 digits in the decimal.
}

// The example function can be called any time we would like to print the value of our amount variable to the console.

var amount = 99.99;

printAmount(); // 99.99

amount *= 2; // even when the value of amount changes our function will still print its value to the console.

printAmount(); //199.98


// functions can also recieve parameters

function foo(b){ // be is a parameter
    a = a + b;
    console.log(a);
}

var a = 20;

foo(20); // will console.log 40 . 20 is an argument

// Difference between arguments and parameters. Paremeters are declared variables in a function, arguments are assigning a value to the variable.