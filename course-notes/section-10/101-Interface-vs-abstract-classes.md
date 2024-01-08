# TypeScript: The Complete Developer's Guide

## Lesson 101. Interfaces vs Abstract Classes

We don't need the interface anymore, we can delete it if we want.

### Properties, Use case and application of Interfaces and Abstract Classes

Interfaces allow us to setup contracts between different classes.

- Get classes to work together
- promotes very loose coupling
- In general I recommend you try looking for interfaces any time that we have different objects that want to work together.

Abstract Class: - Sets up a contract between different classes - Use when we are trying to build up a defintion of an object - Strongly couples classes together

In the case of our application with Google map,, User, and Company. User and Company were very differnt from map.

Thos were very dissimilar objects, and so any time we are working with a very dissimilar objects or objects with different purposes. That is a time to reach for an interface.

However, in this application we just worked on, we had an example where we were trying to really build u[ a defintion of an object using some very similar classes

So we we're defining like a CharacterCollection, NumberCollection and they were trying to work with a Sorter.

A sorter class probably has a lot to do with a collection of data, like a collection of umbers or strings or whatever.

And so because a Sorter was very closely related to the NumbersCollection
