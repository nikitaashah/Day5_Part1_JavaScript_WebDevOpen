// Template Strings
let greeting = `Yo, Root Learn`;

// Embed variables and expressions
let name = 'Ana';
console.log(`Hello there, ${name}`);
// ==> Hello there, Ana!
console.log(`${name} walks every day atleast ${1 + 2} km.`);
// ==> Ana walks every day at least 3 km.

// ES5 Old-School Style!
var customer = { firstName: 'Foo', lastName: 'Kim' };
var message = 'Hello ' + customer.firstName + ' ' + customer.lastName + '!';
console.log(message);
// ==> Hello Foo Kim!

// ES6 Interpolation Style!
let customer = { firstName: 'Foo', lastName: 'Kim' };
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log(message);
// ==> Hello Foo Kim!!

// Multi-line Interpolation!
const fruits = `
1. banana
2. apple
3. orange
4. cherry
`;
console.log(fruits);
// ==>
// 1. banana
// 2. apple
// 3. orange
// 4. cherry

// Special Characters
const favBook = "My favourite book is " Anna Karenina ".";
console.log(favBook);
// <== error: Unexpected token
const favBook1 = "My favorite book is 'Anna Karenina'.";
console.log(favBook1); // <== My favorite book is 'Anna Karenina'.
const favBook2 = 'My favorite book is "Anna Karenina".';
console.log(favBook2); // <== My favorite book is "Anna Karenina".
const mood = "I'm OK.";
console.log(mood); // <== I'm OK.

// String length
const name1 = 'Ana';
console.log(name1.length); // <== 3


// Accessing characters in a string
// charAt(n)
const greeting1 = 'Hello there!';
console.log(`"${greeting1}" is a string and it's length is ${greeting1.length}.`);
// "Hello there!" is a string and it's length is 12.
console.log(greeting1.charAt(0)); // <== H
console.log(greeting1.charAt(1)); // <== e
console.log(greeting1.charAt(5)); // <== " "
console.log(greeting1.charAt(11)); // <== !
console.log(greeting1.charAt(12)); // <== "" as an empty string

// String character access with square brackets and index numbers
const greeting2 = 'Hello there!';
console.log(greeting2[0]); // <== H
console.log(greeting2[3]); // <== l
console.log(greeting2[9]); // <== r
console.log(greeting2[-2]); // undefined


// Finding a substring
// .indexOf(substr)
const message = "Don't be sad, be happy!";
console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf('t')); // <== 4
console.log(message.indexOf('Be')); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf('py')); // 20
// More than one occurence
const message = "Don't be sad, be happy!";
console.log(message.indexOf('be')); // <== 6
console.log(message.indexOf('be', 7)); // <== 1

// Look for a substring, from end to beginning
// str.lastIndexOf(substr)
const message = "Don't be sad, be happy!";
console.log(message.lastIndexOf('be'));
// The index of the first "be" from the end is 14
