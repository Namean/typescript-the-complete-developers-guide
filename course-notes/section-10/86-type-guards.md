# TypeScript: The Complete Developer's Guide

## Lesson 86. Type Guards


We just spoke about the results of using a Union operator between an array of numbers and a string

public collection: number[] | string) {}


To be clear, why this is significat, we have some existing logic, that only works if we treat the collection as an array of numbers.


further, to consider collection as a string 

When we get to the second block of code, we need to tell TypeScript to treat the code as an array of numbers, and in the second block treat the collection as a string 


convicnce TypeScript this.collection is a string.

Right now as it stands we are only able to do things common to an array and string,

we want to later use this code with a Linked list, which further limits what methods



### Convinvcing TypeScript


To do so, we'll use something called a Type Guard, which is a check on this.collection once the type guard is ran, it clarifies the type, and restores acces to this.collection of the clairifed type.

### Writing out the Type Guard

- Simple Syntax
- More difficult understand

this.collection instanceof Array

Again, we can use a Type Guard to restore access to one of the specific types that we are dealing with inside of a Union Operator.

### Type Guard String Syntax

Now to add a Type Guard for a string the syntax is going to be just a little bit different
restores properties for a string
if (typeof this.collection === 'string')


### Type Guard Syntax difference

Anytime we want to setup type guard for for a primitive value, that is a number, string, symbol, or boolean

if (typeof this.colelction === 'boolean') {

}

Even though this syntax technically works for Arrays and Objects and others, it does not function as a Type Guard in TypeScript.






The other form of syntax when we want to use any other type

if (this.collection instanceof Array) // Constructor function for anything
if (this.collection instanceof Sorter)
if (this.collection instanceof Date)

