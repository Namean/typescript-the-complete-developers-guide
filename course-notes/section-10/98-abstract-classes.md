# TypeScript: The Complete Developer's Guide

## Lesson 98. Abstract Classes

### Expectation vs Reality

Typescipt if always going to analyze your code, and look at every class in isolation, trying to make sure that it works.

TypeScript is looking a Sorter, and sees that there are references to swap(), compare () and length().

TypeScript makes sure that that swap(), compare(), and length() exists on Sorter but they don't. So we're seeing red errors all around those different references.

This is what TypeScript thinks is happinging inside of Sorter right now, but this is not reality. Its expecting the worst case scenario.

The relaity that you and I know is that we are never going to create an instance of sorter directly. Because its awkward and a big pain.

We're going to extend or borrow methods from Sorter. So we need to make sure that TypeScript understands what the reality is.

This is what we're going to talk about, how we're going to modify the Sorter class to help TypeScript understand what the reality is.

### Fixing the problem

<!-- So to fix the problem, w'ere going to turn sorter from a normal class into something called an abstract class -->

So to fix the problem we're going to turn Sorter from a normal class to an abstract class

### What is an Abstract class?

<!-- So let's very quickly talk about what an abstract class is. -->

- Abstract Classes

  - Can't be used to create an object directly
  - Only used as a parent class
  - Can contain real implementation for some methods
  - The implemented methods can refer to other methods that don't actaully
  - exists yet (we still have to provide names and types for the un-implemented methods)

  - Can make child classes promise to implement some other method

First. An abstract class cannot be used to create an object directy.

What do I mean by that? Meaning we can create an instance a class for example NumbersCollection, this is okay in the case of Sorter, becuase we never use it anway.

###

<!-- We're going to turn sorter into an abstract class. -->

- We're going to turn sorter into an abstract class.

It will have a real implementation or real definition
We'll then provide stubs for the other methods that must exist

finally extend CharactersSorter, must implement all the methods
