# Executing A Program

Once we have our source code written, we need to employ a utility that can turn our code into instructions that a computer can understand. Usually this is
refered to as a interpreter or a compiler.

## How Is Our Code Read?

For some computer languages the translation of commands is done from top to bottom, line by line.
In other languages the translation is done ahead of time (refered to as compiling the code). When the compiled code runs later,
whats running is the already compiled computer instructions. The computer does not interpret the source code as it runs, rather it just runs the instructions because our source
code has already been translated into computer instructions.

__Interpreted languages__ RUN each line and stop if an error appears. This means that if you have an error on line 5 but lines 1 - 4 are valid, lines 1 - 4 will run and the program will
stop at line 5 throwing an error.

__Compiled languages__ pass through the entire code first to find out if the program is even valid, then goes back to figure out what the code does and if there are any errors.
If there are errors in the code the program will NOT run until they are fixed. 

__NOTE:__ _JavaScript is commonly assumed to be an Interpreted language because JavaScript source code is processed each time it is run. However, this is not an entirely accurate
assumtion. The JavaScript engine actually compiles the program on the fly then immediately runs the compiled code._