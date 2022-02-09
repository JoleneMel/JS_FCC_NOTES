/*Class one
All js variables are case sensitive, new variables should be in camelCase, snake case = snake_case(ruby and rust use these), 
let should be used in place of var when possible 

The difference between var and let keywords, let (ES6 addition) we can declare variable more than once with var(same case etc) while let 
you can only define once
Variables with let are still mutable though

const= constant which means it cannot be changed or immuteable
Common practice with const variables are to name it like below 
*/
const FAV_VEGGIE = "Carrots";

/*The above is referred to as SCREAMING_SNAKE_CASE

assignment operators 
+
-
>
<
>=
<=
+=
-= 
*
/

If you divide / with a 0 example 3/0 = infinity within JavaScript 

Increment w/ variables ex below 
*/
let example = 33;
//The increment is short hand for this 
//example = example + 1;
//So with this below it looks like this 
example++;
//Now an odd thing is the below code 
example = example++;
//will print out the previous result (after the addition of 1 it would print out 34)
//Why because it is incremented but not updated, it is because this is done after the assignment variable now before


/*Like with the increment there is also a decrement shorthand, example2 below 
*/

let example2 = 43;
//The decrement is short hand for this 
//example = example - 1;
//So with this below it looks like this 
example2--;
//Now an odd thing is the below code 
example2 = example2--;
//will print out the previous result (after the decrement of 1 it would print out 42)

/*Decimal numbers, not whole numbers(duh), Note that not all numbers can accurately be represented in floating point. Which can cause rounding issues
more information here https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems
With the assignment operators you can do anything like you would be with decimals :) 
Q&A Part :) 
Semi colons are like new lines and standard practice 

let should be used over var
 */