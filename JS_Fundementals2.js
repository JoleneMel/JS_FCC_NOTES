/*Class 2 for JS fundmentals (to noteate after, I am going through the videos again to do better notes and make my github more active as I am not able 
    to post as much so easily)

    Remainders in JavaScript using the modulud operator 
    The remainder operator % gives the remainder of the division of two numbers.

Example
*/
5 % 2 // = 1 //because
Math.floor(5 / 2) = 2 //(Quotient)
2 * 2 //= 4
5 - 4 //= 1 //(Remainder)

/*
Usage
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
*/
17 % 2// = 1 (17 is Odd) So if it has a remainder it is odd 
48 % 2// = 0 (48 is Even) If not it is even 

/*
Compound Assignment With Aurgment Addition 
In programming, it is common to use assignments to modify the contents of a variable. 
Remember that everything to the right of the equals sign is evaluated first, so we can say:

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator. example 
*/
let myVar = 1;
myVar += 5;
console.log(myVar);