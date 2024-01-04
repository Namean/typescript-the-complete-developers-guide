# TypeScript: The Complete Developer's Guide

## Lesson 92. Sorting Arbitrary Collections

Now that we've put our interface definition together, we're going to start to create these other classes

like characters collection and the length list.

Remember, the characters collection is going to represent a string.

So inside that class we're going to have like some data property or something like that that's going

to reference the string that we are trying to sort.

Also, inside a character's collection, we're going to implement these swap, compare and length methods

that are customized for a string.

Because we are implementing those methods, they will be compatible with these sorter interface or the

sortable interface to be clear.

And so we will be able to pass them as an argument to our sorter class.

So let's get to it.

Like I said, I can't repeat this enough.

This is extremely significant because we don't have to memorize the actual sorting algorithm anymore.

We only have to memorize.

Okay, define, compare, define swap, get the length.

That's it.