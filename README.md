# FEW 2.1 - Date Library
## Description
Dates are super important. You'll use them often. The goal of this assignment is to create a library that handles date operations in a better and more intuitive way than the built in Date Object.

## Why Do this assignment?
You'll make use the JS Date Object often. Building a library around dates will give you a better understanding of it works and what you can do with it.

## Project requirements
Your job is to make a class that wraps the Date object. Your class should have a Date it keeps internally. It should be able to instantiate itself with the same parameters that are used with the Date Object.

Your date library should inlcude unit tests for all of it's functions. Writing these as you work might be a good idea.

# Challenge 1

The Date Object can be instantiated with a date string, with a list of parameter for: year, month, date, hours, mins, secs, or with another Date object.

To do this you'll create a class that holds a Date object as a property. You class needs to accept a variable number of parameters and be able to pass these parameters to Date object it initializes.

class D {
	constructor(...args) {
		this.date = new Date(...args)
	}
}
Read about ...args: https://javascript.info/rest-parameters-spread-operator

tl;dr args is an array with all of the parameters passed to a function. The ... (spread operator) deconstructs the array. This allows for a variable number of arguments to be passed.

You should be able to instantiate this class like this now:

// Create a date from a string (single parameter)
const d = new D('9/26/1965') 
// Create a date from some numbers (list of parameters)
const e = new D(1970, 1, 1, 0, 0, 0)
This should work with any number of arguments.

# Challenge 2

Your class should provide human readable values for year, month, date, hour, mins, secs.

The built in Date provides the month and day of the week starting with 0, and it doesn't provide a string for the day of the week or month which is inconvenient.

// Gets the current date with no params
const d = new D() 
console.log(d.year())  // 2019 fullYear
console.log(d.month()) // July 6
console.log(d.day())   // 27
console.log(d.hours()) // 18
console.log(d.mins())  // 6
console.log(d.secs())  // 5
Stretch goal: Use a getter for each of these. Using a getter each of the methods could be accessed as a property rather than y calling the method. For example: d.month instead of d.month().

// Gets the current date with no params
const d = new D() 
console.log(d.year)  // 2019 fullYear
console.log(d.month) // July 6
console.log(d.day)   // 27
console.log(d.hours) // 18
console.log(d.mins)  // 6
console.log(d.secs)  // 5
Read about getters here:

https://javascript.info/property-accessors
https://coryrylan.com/blog/javascript-es6-class-syntax
Challenge 3

You need a format method that takes a "mask" string. The mask will contain formatting characters which displays various date elements, other characters are displayed unchanged.

The built in Date object has some limited formatting options. You're library will offer a more flexible solution.

List of formatting characters:

'Y' -> 2019 (Year full)
'y' -> 19 (Year short)
'M' -> July (Month full)
'm' -> Jul (Month short)
'D' -> 01 (date padded)
'd' -> 1 (date)
'H' -> 05 (Hours padded)
'h' -> 5 (Hours)
'I' -> 08 (Minutes padded)
'i' -> 8 (Minutes)
'S' -> 04 (Seconds padded)
's' -> 4 (Seconds)
The format() method should provide an acceptable default formatted date with no parameters.

For example:

// Make a date with values for Y, M, D etc.
const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 
Notice the "mask" string provided replaces each of the special characters with a component of the date. If the character is not recognized than it is printed.

console.log(d.format('y/m/d'))       // 17/Jan/2
In the example above y is replaced with short year, and the '/' is printed. The same applies to the rest of the string.

Take a look at how moment JS handles date andf time formatting:

https://momentjs.com/docs/#/parsing/string-format/
Stretch goal - It would be good if we could support more features here. Formatting dates is a very common task. There are a few things missing from the list above.

Each of the things below need a character to represent them.

day of the week
day of week full - Monday, Tuesday, Wednesday...
day of the week short - Mon, Tue, Wed...
The ordinal suffix. This is the st, th that follows a number. For example, 1st, 2nd, 3rd, 4th, 5th 6th, 7th, 8th 9th etc.
Challenge 4

Make a when() this should return a human readble description of 'when' a date will occur.

This is a common way to display relative dates you see this is apps you use every daye.

This method should compare the date owned by your class instance with the current date.

const d = new D(2019, 0, 2, 3, 4, 5)
console.log(d.when()) // 6 months ago
const d = new D(2019, 9, 2, 3, 4, 5)
console.log(d.when()) // 3 months from now
const d = new D(2024, 9, 2, 3, 4, 5)
console.log(d.when()) // 5 years from now
const d = new D(2019, 6, 30, 3, 4, 5)
console.log(d.when()) // 3 days from now
const d = new D()
console.log(d.when()) // today
Take a look at how moment.js handles this:

https://momentjs.com/docs/#/displaying/fromnow/
Stretch Challenge

Look for edge cases in the when() method. When does it not work?

Decribe the edge case, the problem, and what casues it
Solve the problem in code
Stretch Challenge

Make when() work for time hours minutes, seconds.

1 hour from now
3 hours ago
23 mins from now
11 mins ago
23 seconds from now
52 seconds ago
Stretch Challenge

Take the challenge above one step further by including both date and time. This is an open ended challenge you can make it as detailed as you care to take it. Feel free to interprept the challenge and make your best judgement as to how it can be implemented.

Here is some sample output:

2 days three hours from now
3 years 5 months 2 days from now
1 year 4 months 23 days ago
3 hours and 24 minutes from now
etc.
Challenge 5

Document your date lib. Do this by writing JS Doc string comments describing each method.

Output the documentation to your repo or write it to your readme.md file.

Use: https://documentation.js.org

JS Docs is a format for writing documentation in comments along side your code. Using this format your comments can be turned into web pages automatically.

JS Docs follow the format:

/** 
 * hello
 * @returns String 'Hello World'
 */

function hello() {
	return 'Hello World'
}
JS Doc comments begin with

Challenge 6

Publish your date lib to npm. Include the following badges in your readme.md:

npm version
license
size
GitHub Issues
Challenge 7

Add continuous integration. Use Travis-ci and Coveralls.

Add badges for:

Build
Coverage
Challenge 8

Use Rollup to bundle your date lib. Include both umd and esm bundles.

Stretch Challenge

Use .toPrimitive() to allow your Data object to return a String or Number depending on context.

https://javascript.info/object-toprimitive

Deliverable
After completing the challenges above post a link to your npm package on npm.

Due date
Class 6 - Nov 12
