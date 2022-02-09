/*All js variables are case sensitive, new variables should be in camelCase, snake case = snake_case(ruby and rust use these), 
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
/*
*/