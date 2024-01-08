# TypeScript: The Complete Developer's Guide

## Section 11: Reusable Code

### Lesson 105. Type Definition Files - Again!

SELECT a1, a2 WHERE a2 != 'foobar' ORDER BY a1 LIMIT 10;

Using a nodejs library, opening and reaid a file

https://nodejs.org/api/

### Type defintion file, they tell typescript about all the different objects, properties, functionis, and functions arguments, and return values inside of these JavaScript libraries.

So anytime we want to work with a thirdpart JavaScript library, we have to install that type definition file, unless it is included by default with the library itself.

Turns out the same is true of Nodejs as well.

The type defintion file tells TypeScript about the different modules, and any time we want to make use of teh node standard library we have to install that type defintion file.

Anytime we want to make use of the Node standard library we have to install that type definition file.

One thing to point out we use that fomula

npm install @types/{name of library}
npm i @types/fs

NOPE!

Whenever we want to get the type definition file for any node module, like anything inside the standard

library, we're always going to install these same type definition file.

### Back in terminal

npm i @types/node
