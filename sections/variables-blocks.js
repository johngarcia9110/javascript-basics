// Variables and Blocks

//Variables

// variables must be formally declared before the first time it is used

var a = 42; //variables are declared using "var"

// you can also declare a variable using a function

function a(){}

// Blocks
// A block is a pairing of curly braces with one or more statements inside of it

//Example:

/*
{
    var a = 42;
    foo(a / 2);
    
}

Note: blocks not attached to a statement will run everytime
*/

// blocks can be attached to statements like if or while

while (a > 10){
    a--;
    console.log(a);
}

