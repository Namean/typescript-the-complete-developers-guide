# TypeScript: The Complete Developer's Guide

## Lesson 88. Extracting Key Logic

In the last video we spoke about why this was not a great approach.

Because it results in having to update Sort.sort() with new types that need to be sorted.

Which can be solved with depenedency inversion, by creating an interface, and having each type implement "Sortable"

### intermediate refactor

- The intermediate refactor is going to help you understand the general strategy were going to use to fix this problem
- Then we'll start to introduce interfaces, and really understand the full big picture.

### Important Reminder

- Bubble Sort Algorithm
- Must be customized to the data structure we are working with

- Operation 1 - Comparison must be customized between two elements
  -Operation2 - The swapping logic has to be customized.

The entire key to everything

Around this bubble sort algorithm and the whole reason that it doens't work that well with these very different types is that we've got two operators that are going to have to be customized depending upon the data struture we are working with.

extract the that comparison lgoic into a helper function in a different class.

And then we're also going to extract the swapping logic into a different class as well.

So our sorter isn't going to contain a direct reference to an array of numbers.

Instead we're going to have our sorter have a direct reference to some new thing that we're going to create called a NumbersCollection.

The NumbersCollection is going to hold a reference to the actual array of numbers that we want to sort on some data property.

### src/Sorter.ts
