# TypeScript: The Complete Developer's Guide

## Lesson 87. Why is This Bad?

In the last two videos. We went just a little bit off topic.

Discussing more about Union types and how we can restore access to one set of properties in that Union by using a Type Guard.

Remember type guards are essentailly very intelliget snipepts of code.

TypeScript really understands what is going on here.

TypeScript understands that if we get intot his if statement then this.collection must be an array

and we are going to restore access to all the properties of an array on this.collection.


### Conclusion of bad code

We've now written out all the bad code we are going to write.

Let me tell you why this stuff is bad


### The reason the code is bad.

The reason the code is bad is the exact same reason we rant into that last project.

### Dependnecy problem
If we ever want to add in some adiitonal things to be sorted here, we woudld have to go back over to our class sorter and add them into this union.


#### Sorting a linked list as well
So for example, if we also wanted to deal with sorting a linked list, we would have to say, okay

 - Is this collection an instance of linked list?

 We have not done any implementation on linked list.

 Then inside here we would put our logic


 #### Adding more types to Sorter.sort()


 have to come back to this sort function every time and add in some additional if statements.

And as you might guess, that is not ideal at all.

So again, this concludes the bad code.

The reason it is bad is that if we ever want to add support for sorting some other type of data collection,

we would have to come back to our sorter and start to really change a bunch of data in here.

If we eventually end up with like 50 different types of things that were supposed to be sortable, well,

then all of a sudden we're going to have 50 nested if statements inside of here all essentially maybe

doing like the exact same thing.

So clearly this solution is not going to quite work out.