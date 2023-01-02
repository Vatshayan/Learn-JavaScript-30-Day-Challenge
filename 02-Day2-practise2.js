// Properties

// When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. All data types have access to specific properties that are passed down to each instance. For example, every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name:
 console.log('Hello'.length); // Prints 5


// Methods 

// On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
console.log('hello'.toUpperCase()); // Prints HELLO

// On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.
console.log('Hey'.startsWith('H')); //Prints True

// In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.

// If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim().
console.log('    Remove whitespace   '.trim()); //Prints Remove whitespace


// Built-in Objects
// To generate a random number between 0 and 50, we could multiply this result by 50, like so:
console.log(Math.random() * 50); // Prints 44.5

// Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use
console.log(Math.floor(Math.random()*100)); // Prints 95


// Put the number 2017 in the parentheses of the method and use console.log() to print the result.
console.log(Number.isInteger(2017)); //Print true





