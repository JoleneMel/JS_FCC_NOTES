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

/* 
Compound operators also work with negative numbers, Like the += operator, -= subtracts a number from a variable.
*/
myVar = myVar - 5; 
//Is the same as 
myVar -= 5;

/*
Keeping with the trend we can also do the same with multiplication

The *= operator multiplies a variable by a number. will multiply myVar by 5. This can be rewritten as:
*/
myVar *= 5;

//Can you do the remainder operator with the compound operator? 
//With an example like 
let b = 12;
b %= 2;
//It can be done :) 

//This can be done with the devision operator as well examples below since this is a little repeatitive 
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

//Team patpat 

/*
Escaping Literal Quotes in Strings
When you are defining a string you must start and end with a single or double quote. 
What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
example below 
*/
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
/*
This signals to JavaScript that the following quote is not the end of the string, 
but should instead appear inside the string. So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".

Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes".
*/
//Basically when you use "" you cannot use "" again within that, why because javascript thinks that you would like to end that line there
//Then there are missing semi colons and it is a mess. 
//Using the \ to \"escape"\ it will allow it to used properly :) 

//example 2
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

/*
Quoting Strings with Single Quotes
String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. 
Unlike some other programming languages, single and double quotes work the same in JavaScript.
examples below 
*/

const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

/*
The reason why you might want to use one type of quote over the other is if you want to use both in a string. 
This might happen if you want to save a conversation in a string and have the conversation in quotes. 
Another use for it would be saving an <a> tag with various attributes in quotes, all within a string.
examples below 
*/

const conversation = 'Finn exclaims to Jake, "Algebraic!"';

/*
However, this becomes a problem if you need to use the outermost quotes within it. Remember, a string has the same kind of quote at the beginning and end. 
But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

example within notes so it will not cause any errors
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';

Here badStr will throw an error.

In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.

Note: The backslash \ should not be confused with the forward slash /. They do not do the same thing.
*/

//So within JavaScript you can use "" or '' for strings, within that it is an easier way to use " " by doing something like this 

let exampleForAbove = 'Hello I "am" a string';
//The above works because it is not a double quote within a double quote 

//For another answer we do not need to escape any back ticks `` see below for an example 

let exampleForAbove2 = 'Hello I `am` a string';

/*
With different ways to escape there are different methods of doing so see below for the escape sequences in strings 
Escape Sequences in Strings
Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.


Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.

Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. 
You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Note: The indentation for SecondLine is achieved with the tab escape character, not spaces.
*/
//So if we want to accomplish the above we would do like below 
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";