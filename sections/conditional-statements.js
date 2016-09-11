// Conditional Statements

var a = 10;

if (a > 5){
    a = a * 2;
}

console.log(a);// 20

/*
 the if statement expects a true or a false, if the statement is true, the if statement will run its block statment(s)
 if the if statemnt encounters a "falsy" value it will not run its block. The falsy values in JavaScript are:
    0
    -0
    NaN
    ""
    false
    null
    undefined
*/


if (a)// here "a" is true, because the "a" variable has a truthy value of 20. Since 20 is not on our list of falsy values, the statement is true and the block will run.
{
    a = a * 2;
}

console.log(a); // 40