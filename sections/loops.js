// Loops

// For loops

// The FOR loop has 3 parts. Initialization expression, Conditional Expression (test expression) and the update clause.

for(var a = 5; a < 10; a++){
    console.log(a); // outputs the value of each time the for loop runs. The for loop will stop at a = 9.
}

// in for loops, all three of the parts are optional

// for (;;){ } this is a endless loop, because the condition of this loop will never be false. This is valid and will run but will crash the browser.

//While Loops

// while loops can work as for loops (see example below). Note: this is an improper use of a while loop. 

var b = 5;

while(true){ // even though true will always be true, the if statement in the while loop will tell the loop to stop once a becomes greater than or equal to 10.
    if(a >= 10){
        break; // stops the loop
    }
    console.log(a);
    a++;
}