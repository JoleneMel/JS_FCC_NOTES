//Debugging 1
/*
Use the JavaScript Console to Check the Value of a Variable
Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.

You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, 
we strongly recommend switching to desktop Firefox or Chrome.

The console.log() method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. 
Placing it at strategic points in your code can show you the intermediate values of variables. 
It's good practice to have an idea of what the output should be before looking at what it is. 
Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print the string Hello world! to the console:

console.log('Hello world!');
Use the console.log() method to print the value of the variable a where noted in the code.
*/
//answer
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
console.log(a);



//Debugging 2
// Understanding the Differences between the freeCodeCamp and Browser Console
// You may have noticed that some freeCodeCamp challenges include their own console.
// This console behaves a little differently than the browser console.

// There are many methods to use with console to output messages. 
//log, warn, and clear to name a few. The freeCodeCamp console will only output log messages, 
//while the browser console will output all messages. When you make changes to your code, 
//it will automatically run and show the logs. 
//The freeCodeCamp console is then cleared each time your code runs.

// First, open your browser console so you can see the logs. 
//To do that, you can right-click the freeCodeCamp navigation bar at the top and click inspect on most browsers. 
//Then find the console tab in the window that opens.

// After that, use console.log to log the output variable. View the two consoles to see the log. 
//Finally, use console.clear after your log to clear the browser console. 
//View the difference in the two consoles.

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();