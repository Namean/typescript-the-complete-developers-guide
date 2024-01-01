# TypeScript: The Complete Developer's Guide

## Lesson 84. Two Huge Issues

### TLDR

- Different data structures or collections require different methods of sorting.

<br />

<!-- prettier-ignore -->
- We've now got an initial implementation of our sorting algorithm put together.
- currently, the algorithm only works with an array of numbers.
- we eventually want this to work with a string of characters or even a linked list

to get a better idea of how we could somehow make this algorithm work with a string of characters or

### Two important Elements

There are two very important elements I want to make sure are super crystal clear around strings, because

these two elements are going to help you understand what's going to have to change inside of here.

```js
const color = "red";
console.log(color[0]); // -> 'r'
color[0] = "Y";
console.log(color); // -> 'red'
```

### Getting our logic to work with strings

#### Why Algorithm's Swapping Logic breaks for Strings

This means that our swapping logic isn't going to work for a string of characters.

Right now our swapping logic is 100% design to work with an array, specifically an array of numbers.

We would also make a change to our if statement to work with strings.

#### Why Algorithm's If Statement breaks for Strings

Here's why

```js
"Xaaa";

"X" > "a"; // false, wouldn't work with Bubble Sort
"X".charCodeAt(0); // -> 88
"a".charCodeAt(0); // -> 97
```

First off, we cannot do that direct swapping logic with a string of characters.

Second off, we can technically do a comparison of characters at specific indices, but it's not going

to give us the result we expect.

So the entire point of all this, like this long discussion, all I'm trying to tell you is that given

different types of collections, we need to do a very different method of comparison and we need to

do a very different method of swapping.

So let's take that logic.

We're going to move on to the next video and figure out how we're going to fix our code to work properly

with a string of characters, just as well as with an array of numbers.
