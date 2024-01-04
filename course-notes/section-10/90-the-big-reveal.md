# TypeScript: The Complete Developer's Guide

## Lesson 90. The Big Reveal


Its time to figure out how the project is going to be in its final form.

So the last thing we really need to fix, is that sorter can only take a numbers.

We need to make sure that Sorter can take other types of collections as well.

Like a colelction of characters, a string or a linked list


So last we have to do, how do we get thsit ype right here to go away?



In the sorter class we're going to define an interface, and this interface is going to provide some instructions to other classes on our project.

On how they can be eligible for sorting.

So the big quesion here is what are those instructions exactly?

How do we tell every other class inside of our project how we can sort them?


The thing we are trying to sort: collection

On collection we need three different things

 - length
 - compare method
 - swap method


CharactersCollection

Characters collection is going to wrap up a string that we want to sort in order to sort that string.



All you and I have to do is define a swap method that's going to swap two characters inside that string.

A compare method that's going to compare two characters inside that string.

And a length property that says how long that string is.




