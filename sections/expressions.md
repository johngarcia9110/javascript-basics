# Expressions

 Take example: __a = b * 2;__
 
Grouping the example by the expressions in the statement would look something like this:

((a) = ((b) * (2)));

(b) and (2) are expesions themeselves.

((b) * (2)) is another expression.

Finally: (a = ((b) * (2))); makes an expression statement.

## More Complex Statement

Take the statement below and group the expressions using brackets:

__a = b * 2 + foo(c * 3);__ 

Note: this is a nonsense statment, used to illustrate a point.

ANSWER: 

[[a]= [ [[b] * [2]] + [ [foo]( [ [c] * [3] ] ) ] ] ];

### Controling Operator Precedence 

Using parenthesis we can control operator precedence:

a = (b * 2) + foo(c * 3);

Expressions are evaluated using PEMDAS however if two of the same operators are in an expression with the same level of precendce the computer will 
calculate from left to right. For example:

a = b * 2 + foo(c * 3);

Does the foo function get called first? NO.

The program will got from left to right so, it will evaluate b * 2 first.


